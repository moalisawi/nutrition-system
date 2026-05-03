// ==================== Subscriber Modal ====================
function openAddModal() {
  if (!hasPermission('canCreate')) return showNotice('لا تملك صلاحية إضافة مشترك.', 'error');
  document.getElementById('subscriberForm').reset();
  document.getElementById('editingId').value = '';
  document.getElementById('subscriberModalTitle').textContent = 'إضافة مشترك جديد';
  document.getElementById('saveSubscriberBtn').textContent    = 'حفظ المشترك';
  document.getElementById('editStateInfo').classList.add('hidden');
  document.getElementById('referrerWrap').classList.add('hidden');
  document.getElementById('f_date').value      = new Date().toISOString().split('T')[0];
  document.getElementById('f_residence').value = 'فلسطين-غزة';
  document.getElementById('f_phoneCountry').value = 'PS';
  if (currentUserProfile?.role === 'employee') {
    document.getElementById('f_convinced').value    = currentUserProfile.employeeName || currentUserProfile.name || '';
    document.getElementById('f_convinced').disabled = true;
  } else {
    document.getElementById('f_convinced').disabled = false;
  }
  updateDialCode();
  document.getElementById('subscriberModal').classList.add('active');
}

function openEditModal(id) {
  if (!hasPermission('canEdit')) return showNotice('لا تملك صلاحية تعديل المشتركين.', 'error');
  const s = sampleData.find(x => x.id === id);
  if (!s) return;
  document.getElementById('subscriberForm').reset();
  document.getElementById('editingId').value = id;
  document.getElementById('subscriberModalTitle').textContent = 'تعديل بيانات المشترك';
  document.getElementById('saveSubscriberBtn').textContent    = 'حفظ التعديلات';
  document.getElementById('f_date').value         = s.date || '';
  document.getElementById('f_name').value         = s.name || '';
  document.getElementById('f_residence').value    = s.residence || s.country || '';
  document.getElementById('f_phoneCountry').value = s.phoneCountry || phoneCountries.find(c => c.dialCode === s.dialCode)?.iso || '';
  document.getElementById('f_phone').value        = s.phone || '';
  document.getElementById('f_age').value          = s.age || '';
  document.querySelector(`input[name="package"][value="${s.package}"]`)?.click();
  document.getElementById('f_duration').value     = s.duration || '';
  document.getElementById('f_currency').value     = s.currencyOriginal || s.currency || 'USD';
  document.getElementById('f_payment').value      = s.payment || '';
  document.getElementById('f_source').value       = s.source || '';
  document.getElementById('f_referrer').value     = s.referrer || '';
  document.getElementById('f_convinced').value    = s.convincedBy || '';
  document.getElementById('f_paidshift').value    = s.paidShift || '';
  document.querySelector(`input[name="team"][value="${s.team}"]`)?.click();
  document.getElementById('f_notes').value        = s.notes || '';
  toggleReferrerField();
  updateDialCode();
  const info = document.getElementById('editStateInfo');
  info.textContent = s.subscriptionState === 'withdrawn'
    ? `هذا المشترك منسحب. المسترد: $${formatNumber(s.refundAmountUSD, 2)}، الصافي: $${formatNumber(s.netAmountUSD, 2)}`
    : 'هذا التعديل يغير بيانات المشترك ولا يغير حالة الانسحاب.';
  info.classList.remove('hidden');
  document.getElementById('subscriberModal').classList.add('active');
}

function closeSubscriberModal() {
  document.getElementById('subscriberModal').classList.remove('active');
}

document.getElementById('subscriberForm').addEventListener('submit', async e => {
  e.preventDefault();
  if (!db) return showNotice('Firebase غير جاهز للحفظ.', 'error');
  const btn = document.getElementById('saveSubscriberBtn');
  btn.disabled = true; btn.textContent = 'جاري الحفظ...';
  try {
    const id           = document.getElementById('editingId').value;
    const phoneCountry = document.getElementById('f_phoneCountry').value;
    const dialCode     = phoneCountries.find(c => c.iso === phoneCountry)?.dialCode || '+';
    const currency     = document.getElementById('f_currency').value;
    const lockedRate   = currentExchangeRates[currency] || 1;
    const duration     = Number(document.getElementById('f_duration').value);
    const date         = document.getElementById('f_date').value;
    const totalPrice   = Number(document.getElementById('f_totalPrice').value);
    const totalPriceUSD = totalPrice / lockedRate;
    const old = id ? sampleData.find(s => s.id === id) : null;
    const refundAmountUSD = old?.refundAmountUSD || 0;
    const convincedBy = currentUserProfile.role === 'employee'
      ? (currentUserProfile.employeeName || currentUserProfile.name || '')
      : document.getElementById('f_convinced').value;

    // ── Determine paid / remaining ──────────────────────────────────────
    let paidAmount, remainingAmount, paidAmountUSD, remainingAmountUSD;

    if (!id) {
      // Creating: read initial-payment field (empty = full payment, 0 = deferred)
      const initialPaymentInput = document.getElementById('f_initialPayment').value;

      if (initialPaymentInput === '' || initialPaymentInput === null) {
        paidAmount = totalPrice;
      } else {
        paidAmount = Number(initialPaymentInput);
      }

      remainingAmount    = totalPrice - paidAmount;
      paidAmountUSD      = paidAmount      / lockedRate;
      remainingAmountUSD = remainingAmount / lockedRate;
    } else {
      // Editing: preserve whatever was paid; recalculate remaining against new totalPrice
      paidAmountUSD      = old?.paidAmountUSD ?? totalPriceUSD;
      paidAmount         = old?.paidAmount    ?? (paidAmountUSD * lockedRate);
      remainingAmountUSD = Math.max(0, totalPriceUSD - paidAmountUSD);
      remainingAmount    = Math.max(0, totalPrice     - paidAmount);
    }
    const netAmountUSD = Math.max(0, paidAmountUSD - refundAmountUSD);

    const payload = {
      date,
      name:      document.getElementById('f_name').value.trim(),
      residence: document.getElementById('f_residence').value,
      phoneCountry, dialCode,
      phone:     document.getElementById('f_phone').value.trim(),
      age:       Number(document.getElementById('f_age').value) || null,
      package:   document.querySelector('input[name="package"]:checked').value,
      duration,
      currencyOriginal: currency, currency, lockedRate,
      totalPrice, totalPriceUSD,
      amount: totalPrice, amountUSD: totalPriceUSD, // legacy
      paidAmount, paidAmountUSD,
      remainingAmount, remainingAmountUSD,
      netAmountUSD,
      expiryDate: calculateExpiry(date, duration),
      payment:   document.getElementById('f_payment').value,
      source:    document.getElementById('f_source').value,
      referrer:  document.getElementById('f_referrer').value.trim(),
      convincedBy,
      paidShift: document.getElementById('f_paidshift').value,
      team:      document.querySelector('input[name="team"]:checked').value,
      notes:     document.getElementById('f_notes').value.trim(),
      updatedBy: currentUserProfile.uid,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    };

    if (id) {
      await db.collection('subscribers').doc(id).update(payload);
      await writeAuditLog('subscriber_updated', { targetType: 'subscriber', targetId: id, targetName: payload.name, summary: `تم تعديل بيانات المشترك: ${payload.name}` });
      toast('تم تعديل بيانات المشترك');
    } else {
      // Pre-generate ID so we can link the receipt and first payment
      const subscriberRef = db.collection('subscribers').doc();
      const newId         = subscriberRef.id;

      // Upload receipt if provided (non-fatal)
      let receiptData = null;
      const rf = document.getElementById('f_receipt')?.files?.[0];
      if (rf) { btn.textContent = 'جاري رفع الوصل...'; try { receiptData = await uploadReceiptFile(rf, newId); } catch(_){} }

      const batch = db.batch();
      batch.set(subscriberRef, {
        ...payload,
        subscriptionState: 'active',
        refundAmount: 0, refundAmountUSD: 0,
        createdBy: currentUserProfile.uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      if (paidAmount > 0) {
        batch.set(db.collection('payments').doc(), {
          subscriberId:     newId,
          subscriberName:   payload.name,
          amountOriginal:   paidAmount,
          currencyOriginal: currency,
          exchangeRate:     lockedRate,
          amountUSD:        paidAmountUSD,
          paymentMethod:    payload.payment,
          receiptUrl:       receiptData?.url  || null,
          receiptType:      receiptData?.type || null,
          date,
          notes: null,
          isInitialPayment: true,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          createdBy: currentUserProfile.uid,
        });
      }
      await batch.commit();
      await writeAuditLog('subscriber_created', { targetType: 'subscriber', targetId: newId, targetName: payload.name, summary: `تم إضافة مشترك جديد: ${payload.name}` });
      toast('تم حفظ المشترك في Firebase');
    }
    closeSubscriberModal();
  } catch (error) {
    showNotice('فشل الحفظ: ' + error.message, 'error');
  } finally {
    btn.disabled = false;
    btn.textContent = document.getElementById('editingId').value ? 'حفظ التعديلات' : 'حفظ المشترك';
  }
});

// ==================== Withdraw Modal ====================
function openWithdrawModal(id) {
  if (!hasPermission('canWithdraw')) return showNotice('لا تملك صلاحية تسجيل الانسحاب.', 'error');
  const s = sampleData.find(x => x.id === id);
  if (!s) return;
  document.getElementById('withdrawForm').reset();
  document.getElementById('withdrawId').value        = id;
  document.getElementById('withdrawSubName').textContent = `${s.name} - المدفوع $${formatNumber(s.amountUSD, 2)}`;
  document.getElementById('w_date').value            = s.withdrawnAt || new Date().toISOString().split('T')[0];
  document.getElementById('w_reason').value          = s.withdrawalReason || '';
  document.getElementById('w_refundAmount').value    = s.refundAmount || 0;
  document.getElementById('w_refundCurrency').value  = s.refundCurrency || s.currency || 'USD';
  document.getElementById('withdrawModal').classList.add('active');
}

function closeWithdrawModal() {
  document.getElementById('withdrawModal').classList.remove('active');
}

document.getElementById('withdrawForm').addEventListener('submit', async e => {
  e.preventDefault();
  if (!db) return showNotice('Firebase غير جاهز للحفظ.', 'error');
  const id = document.getElementById('withdrawId').value;
  const s  = sampleData.find(x => x.id === id);
  if (!s) return;
  const btn = document.getElementById('saveWithdrawBtn');
  btn.disabled = true; btn.textContent = 'جاري الحفظ...';
  try {
    const refundCurrency   = document.getElementById('w_refundCurrency').value;
    const refundAmount     = Number(document.getElementById('w_refundAmount').value || 0);
    const refundRate       = currentExchangeRates[refundCurrency] || 1;
    const refundAmountUSD  = refundAmount / refundRate;
    await db.collection('subscribers').doc(id).update({
      subscriptionState: 'withdrawn',
      withdrawnAt:       document.getElementById('w_date').value,
      withdrawalReason:  document.getElementById('w_reason').value.trim(),
      refundAmount, refundCurrency, refundRate, refundAmountUSD,
      netAmountUSD:      Math.max(0, s.amountUSD - refundAmountUSD),
      updatedBy:         currentUserProfile.uid,
      updatedAt:         firebase.firestore.FieldValue.serverTimestamp(),
    });
    await writeAuditLog('subscriber_withdrawn', {
      targetType: 'subscriber', targetId: id, targetName: s.name || '',
      summary:    `تم تسجيل انسحاب: ${s.name || ''} - مسترد $${formatNumber(refundAmountUSD, 2)}`,
      metadata:   { refundAmount, refundCurrency, refundAmountUSD }
    });
    closeWithdrawModal();
    toast('تم تسجيل الانسحاب والاسترداد');
  } catch (error) {
    showNotice('فشل تسجيل الانسحاب: ' + error.message, 'error');
  } finally {
    btn.disabled = false; btn.textContent = 'حفظ الانسحاب';
  }
});

// ==================== Exchange Rates Modal ====================
function openExchangeRatesModal() {
  document.getElementById('ratesEditor').innerHTML = Object.entries(currencyInfo).filter(([k]) => k !== 'USD').map(([code, info]) =>
    `<div class="flex items-center gap-3 p-3 border border-slate-200 rounded-lg"><div class="flex-1"><p class="font-medium text-slate-800">${info.name}</p><p class="text-xs text-slate-500">كم وحدة تساوي 1 دولار</p></div><input id="rate_${code}" type="number" step="0.01" value="${currentExchangeRates[code]}" class="w-24 border border-slate-300 rounded-lg px-3 py-1.5 text-sm text-center font-mono"></div>`
  ).join('');
  document.getElementById('exchangeRatesModal').classList.add('active');
}

function closeExchangeRatesModal() {
  document.getElementById('exchangeRatesModal').classList.remove('active');
}

function saveExchangeRates() {
  ['EGP','JOD','ILS'].forEach(code => {
    const val = Number(document.getElementById('rate_' + code).value);
    if (val > 0) currentExchangeRates[code] = val;
  });
  closeExchangeRatesModal();
}

// ==================== User Profile ====================
async function saveUserProfile(uid) {
  if (!hasPermission('canManageUsers')) return showNotice('لا تملك صلاحية إدارة المستخدمين.', 'error');
  const existing = usersData.find(u => u.uid === uid);
  if (!existing) return;
  const isCurrentUser = uid === currentUserProfile?.uid;
  const payload = {
    name:         document.getElementById('user_name_' + uid).value.trim(),
    employeeName: document.getElementById('user_employee_' + uid).value.trim(),
    updatedBy:    currentUserProfile.uid,
    updatedAt:    firebase.firestore.FieldValue.serverTimestamp(),
  };
  if (!isCurrentUser) {
    payload.role   = document.getElementById('user_role_' + uid).value;
    payload.active = document.getElementById('user_active_' + uid).checked;
  }
  try {
    await db.collection('users').doc(uid).update(payload);
    toast('تم حفظ بيانات المستخدم');
  } catch (error) {
    showNotice('فشل حفظ المستخدم: ' + error.message, 'error');
  }
}

// ==================== Delete Subscriber ====================
async function deleteSubscriber(id, name) {
  if (!hasPermission('canDelete')) return showNotice('ما عندك صلاحية للحذف', 'error');
  if (!confirm(`متأكد بدك تحذف المشترك: ${name} ؟`)) return;
  try {
    await db.collection('subscribers').doc(id).delete();
    await writeAuditLog('subscriber_deleted', {
      targetType: 'subscriber', targetId: id, targetName: name,
      summary:    `تم حذف المشترك نهائياً: ${name}`
    });
    toast('تم حذف المشترك نهائياً');
  } catch (error) {
    showNotice('فشل الحذف: ' + error.message, 'error');
  }
}
