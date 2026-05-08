// ==================== File Upload ====================
async function uploadReceiptFile(file, subscriberId) {
  if (!file) return null;
  if (file.size > 5 * 1024 * 1024) throw new Error('الملف أكبر من 5MB');
  if (!['image/jpeg','image/png','application/pdf'].includes(file.type)) throw new Error('نوع الملف غير مدعوم (JPG, PNG, PDF فقط)');
  if (!storage) throw new Error('Firebase Storage غير جاهز');
  const isImage  = file.type.startsWith('image/');
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
  const path     = `receipts/${subscriberId}/${Date.now()}_${safeName}`;
  const snap     = await storage.ref(path).put(file, { contentType: file.type });
  const url      = await snap.ref.getDownloadURL();
  return { url, type: isImage ? 'image' : 'pdf' };
}

function previewReceiptFile(inputEl, previewEl) {
  if (!previewEl) return;
  const file = inputEl?.files?.[0];
  if (!file) { previewEl.innerHTML = ''; return; }
  if (file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = ev => {
      previewEl.innerHTML = `<img src="${ev.target.result}" class="h-24 w-auto object-contain rounded border border-slate-200 mt-2">`;
    };
    reader.readAsDataURL(file);
  } else {
    previewEl.innerHTML = `<div class="flex items-center gap-2 mt-2 text-sm text-slate-600 bg-slate-50 rounded-lg p-2 border border-slate-200"><span class="text-2xl">📄</span><span class="truncate">${escapeHtml(file.name)}</span></div>`;
  }
}

// ==================== Add Payment Modal ====================
function openAddPaymentModal(subscriberId) {
  if (!hasPermission('canCreate')) return showNotice('لا تملك صلاحية إضافة دفعة.', 'error');
  const sub = sampleData.find(s => s.id === subscriberId);
  if (!sub) return;
  document.getElementById('addPaymentForm').reset();
  document.getElementById('ap_subscriberId').value       = subscriberId;
  document.getElementById('ap_date').value               = new Date().toISOString().split('T')[0];
  document.getElementById('ap_currency').value           = sub.currencyOriginal || sub.currency || 'USD';
  document.getElementById('ap_receiptPreview').innerHTML = '';
  document.getElementById('ap_subInfo').textContent      = sub.name;

  const totalUSD  = sub.totalPriceUSD || sub.amountUSD || 0;
  const paidUSD   = sub.paidAmountUSD || sub.amountUSD || 0;
  const remUSD    = sub.remainingAmountUSD || 0;
  const pct       = totalUSD > 0 ? Math.min(100, (paidUSD / totalUSD) * 100) : 100;
  const isPartial = remUSD > 0.01;
  document.getElementById('ap_summaryBar').innerHTML = hasPermission('canViewRevenue') ? `
    <div class="grid grid-cols-3 gap-2 text-center mb-3 text-xs">
      <div class="bg-slate-50 rounded p-2"><p class="text-slate-500">الكلي</p><p class="font-bold text-slate-800">$${formatNumber(totalUSD, 2)}</p></div>
      <div class="bg-emerald-50 rounded p-2"><p class="text-emerald-600">محصّل</p><p class="font-bold text-emerald-700">$${formatNumber(paidUSD, 2)}</p></div>
      <div class="bg-amber-50 rounded p-2"><p class="text-amber-600">متبقي</p><p class="font-bold text-amber-700">$${formatNumber(remUSD, 2)}</p></div>
    </div>
    <div class="pay-bar"><div class="pay-bar-fill ${isPartial ? 'partial' : ''}" style="width:${pct}%"></div></div>` : '';

  document.getElementById('addPaymentModal').classList.add('active');
}

function closeAddPaymentModal() {
  document.getElementById('addPaymentModal').classList.remove('active');
}

document.getElementById('addPaymentForm').addEventListener('submit', async e => {
  e.preventDefault();
  if (!db) return showNotice('Firebase غير جاهز.', 'error');
  const btn = document.getElementById('ap_submitBtn');
  btn.disabled = true; btn.textContent = 'جاري الحفظ...';
  try {
    const subscriberId = document.getElementById('ap_subscriberId').value;
    const sub = sampleData.find(s => s.id === subscriberId);
    if (!sub) throw new Error('المشترك غير موجود');
    const currency   = document.getElementById('ap_currency').value;
    const amountOrig = Number(document.getElementById('ap_amount').value);
    const rate       = currentExchangeRates[currency] || 1;
    const amountUSD  = amountOrig / rate;
    const method     = document.getElementById('ap_paymentMethod').value;
    const date       = document.getElementById('ap_date').value;
    const notes      = document.getElementById('ap_notes').value.trim();

    // Upload receipt (optional, non-fatal)
    let receiptData = null;
    const rf = document.getElementById('ap_receipt')?.files?.[0];
    if (rf) { btn.textContent = 'جاري رفع الوصل...'; try { receiptData = await uploadReceiptFile(rf, subscriberId); } catch(_){} }

    const subscriberRef = db.collection('subscribers').doc(subscriberId);
    const paymentRef    = db.collection('payments').doc();

    await db.runTransaction(async tx => {
      const snap        = await tx.get(subscriberRef);
      const d           = snap.data();
      const newPaidUSD  = (d.paidAmountUSD ?? d.amountUSD ?? 0) + amountUSD;
      const totalUSD    = d.totalPriceUSD  ?? d.amountUSD ?? 0;
      const newRemUSD   = Math.max(0, totalUSD - newPaidUSD);
      // netAmountUSD = paidAmountUSD (refunds tracked independently in refunds collection)
      const newNetUSD   = newPaidUSD;
      const newPaidOrig = (d.paidAmount ?? d.amount ?? 0) + amountOrig;

      tx.set(paymentRef, {
        subscriberId,
        subscriberName:  sub.name,
        amountOriginal:  amountOrig,
        currencyOriginal: currency,
        exchangeRate:    rate,
        amountUSD,
        paymentMethod:   method,
        date,
        notes:           notes || null,
        receiptUrl:      receiptData?.url  || null,
        receiptType:     receiptData?.type || null,
        isInitialPayment: false,
        createdAt:       firebase.firestore.FieldValue.serverTimestamp(),
        createdBy:       currentUserProfile.uid,
      });
      tx.update(subscriberRef, {
        paidAmountUSD:      newPaidUSD,
        paidAmount:         newPaidOrig,
        remainingAmountUSD: newRemUSD,
        netAmountUSD:       newNetUSD,
        updatedAt:          firebase.firestore.FieldValue.serverTimestamp(),
        updatedBy:          currentUserProfile.uid,
      });
    });

    await writeAuditLog('payment_added', {
      targetType: 'subscriber', targetId: subscriberId, targetName: sub.name,
      summary:    `دفعة $${formatNumber(amountUSD, 2)} لـ ${sub.name}`,
    });
    closeAddPaymentModal();
    toast('تم تسجيل الدفعة بنجاح');
  } catch (err) {
    showNotice('فشل حفظ الدفعة: ' + err.message, 'error');
  } finally {
    btn.disabled = false; btn.textContent = 'حفظ الدفعة';
  }
});

// ==================== View Payments Modal ====================
async function openViewPaymentsModal(subscriberId) {
  const sub = sampleData.find(s => s.id === subscriberId);
  if (!sub) return;
  document.getElementById('vp_title').textContent    = `سجل دفعات: ${escapeHtml(sub.name)}`;
  document.getElementById('vp_subtitle').textContent = `الباقة: ${sub.package} · ${formatDate(sub.date)}`;
  document.getElementById('vp_body').innerHTML       = '<div class="text-center text-slate-400 py-8">جاري التحميل...</div>';
  document.getElementById('viewPaymentsModal').classList.add('active');
  try {
    const snap = await db.collection('payments')
      .where('subscriberId', '==', subscriberId)
      .orderBy('createdAt', 'desc').get();
    renderViewPayments(sub, snap.docs.map(d => ({ id: d.id, ...d.data() })));
  } catch (err) {
    document.getElementById('vp_body').innerHTML =
      `<div class="text-center text-red-400 py-8">تعذر التحميل: ${escapeHtml(err.message)}</div>`;
  }
}

function closeViewPaymentsModal() {
  document.getElementById('viewPaymentsModal').classList.remove('active');
}

function renderViewPayments(sub, payments) {
  const totalUSD  = sub.totalPriceUSD || sub.amountUSD || 0;
  const paidUSD   = sub.paidAmountUSD || sub.amountUSD  || 0;
  const remUSD    = sub.remainingAmountUSD || 0;
  const pct       = totalUSD > 0 ? Math.min(100, (paidUSD / totalUSD) * 100) : 100;
  const canSeeRev = hasPermission('canViewRevenue');

  let html = canSeeRev ? `
    <div class="grid grid-cols-3 gap-3 mb-4 text-center text-xs">
      <div class="bg-slate-50 rounded-lg p-3"><p class="text-slate-500 mb-1">السعر الكلي</p><p class="font-bold text-slate-800 text-base">$${formatNumber(totalUSD, 2)}</p></div>
      <div class="bg-emerald-50 rounded-lg p-3"><p class="text-emerald-600 mb-1">محصّل</p><p class="font-bold text-emerald-700 text-base">$${formatNumber(paidUSD, 2)}</p></div>
      <div class="bg-amber-50 rounded-lg p-3"><p class="text-amber-600 mb-1">متبقي</p><p class="font-bold text-amber-700 text-base">$${formatNumber(remUSD, 2)}</p></div>
    </div>
    <div class="pay-bar mb-5"><div class="pay-bar-fill ${remUSD > 0.01 ? 'partial' : ''}" style="width:${pct}%"></div></div>` : '';

  if (payments.length === 0) {
    html += '<div class="text-center text-slate-400 py-6">لا توجد دفعات مسجلة لهذا المشترك</div>';
  } else {
    html += '<div class="space-y-2">';
    payments.forEach(p => {
      const receiptHtml = p.receiptUrl
        ? (p.receiptType === 'image'
            ? `<a href="${p.receiptUrl}" target="_blank" rel="noopener" class="text-indigo-600 text-xs hover:underline">🖼️ عرض الوصل</a>`
            : `<a href="${p.receiptUrl}" target="_blank" rel="noopener" class="text-indigo-600 text-xs hover:underline">📄 عرض PDF</a>`)
        : '';
      html += `
        <div class="border border-slate-200 rounded-lg p-3">
          <div class="flex items-start justify-between gap-2 flex-wrap">
            <div>
              <p class="font-semibold text-slate-800">${formatNumber(p.amountOriginal, 2)} ${escapeHtml(p.currencyOriginal || '')}</p>
              <p class="text-xs text-slate-500 mt-0.5">${escapeHtml(p.paymentMethod || '')} · ${formatDate(p.date)}</p>
              ${p.isInitialPayment ? '<span class="text-xs bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded mt-1 inline-block">أولية</span>' : ''}
              ${p.notes ? `<p class="text-xs text-slate-400 mt-1">${escapeHtml(p.notes)}</p>` : ''}
            </div>
            <div class="text-left shrink-0">
              ${canSeeRev ? `<p class="font-bold text-emerald-700">$${formatNumber(p.amountUSD, 2)}</p>` : ''}
              ${receiptHtml}
            </div>
          </div>
        </div>`;
    });
    html += '</div>';
  }
  document.getElementById('vp_body').innerHTML = html;
}
