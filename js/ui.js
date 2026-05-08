// ==================== Utilities ====================
const arabicMonths = ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];

function formatNumber(num, decimals = 0) {
  return new Intl.NumberFormat('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }).format(Number(num || 0));
}
function formatDate(dateStr) {
  if (!dateStr) return '-';
  return new Date(dateStr).toLocaleDateString('ar-EG', { day: '2-digit', month: '2-digit', year: 'numeric' });
}
function formatDateTime(value) {
  const date = typeof value?.toDate === 'function' ? value.toDate() : new Date(getMillis(value));
  if (Number.isNaN(date.getTime())) return '-';
  return date.toLocaleString('ar-EG', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}
function getMillis(value) {
  if (!value) return 0;
  if (typeof value.toMillis === 'function') return value.toMillis();
  if (typeof value.seconds === 'number') return value.seconds * 1000;
  return new Date(value).getTime() || 0;
}
function getResidenceLabel(value) {
  return residenceCountries.find(c => c.value === value)?.name || phoneCountries.find(c => c.iso === value)?.name || value || '-';
}
function getPhoneCountryLabel(iso) {
  const c = phoneCountries.find(x => x.iso === iso);
  return c ? `${c.name} ${c.dialCode}` : '';
}
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
}
function escapeAttr(value) {
  return escapeHtml(value).replace(/`/g, '&#96;');
}
function toast(message) {
  const el = document.createElement('div');
  el.className = 'fixed top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 text-sm font-bold';
  el.textContent = message;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 3000);
}

// ==================== Subscriber Normalization ====================
function calculateExpiry(startDate, days) {
  const start = new Date(startDate);
  start.setDate(start.getDate() + Number(days || 0));
  return start.toISOString().split('T')[0];
}
function getDaysRemaining(expiryDate) {
  const today = new Date();
  today.setHours(0,0,0,0);
  return Math.ceil((new Date(expiryDate) - today) / (1000 * 60 * 60 * 24));
}
function getComputedStatus(s) {
  if (s.subscriptionState === 'withdrawn') return 'منسحب';
  if (s.daysRemaining < 0) return 'منتهي';
  if (s.daysRemaining <= 7) return 'ينتهي قريباً';
  return 'نشط';
}
function normalizeSubscriber(s) {
  const expiryDate = s.expiryDate || calculateExpiry(s.date, s.duration);
  const daysRemaining = getDaysRemaining(expiryDate);
  const lockedRate = Number(s.lockedRate || 1);
  const amount = Number(s.amount || 0);
  const amountUSD = Number(s.amountUSD || (amount / lockedRate));
  const totalPrice    = Number(s.totalPrice    ?? amount);
  const totalPriceUSD = Number(s.totalPriceUSD ?? amountUSD);

  // Use explicit undefined checks — NOT ?? which treats stored 0 incorrectly
  const paidAmountUSD = Number(
    s.paidAmountUSD !== undefined ? s.paidAmountUSD   // new doc: explicit
    : amountUSD                                        // old doc: fully paid
  );
  const paidAmount = Number(
    s.paidAmount !== undefined ? s.paidAmount
    : paidAmountUSD * lockedRate
  );
  const remainingAmountUSD = Number(
    s.remainingAmountUSD !== undefined ? s.remainingAmountUSD
    : Math.max(0, totalPriceUSD - paidAmountUSD)
  );
  // Legacy refund fields kept for backward compatibility; new refunds use refunds collection
  const refundAmount    = Number(s.refundAmount    || 0);
  const refundRate      = Number(s.refundRate      || 1);
  const refundAmountUSD = Number(s.refundAmountUSD || (refundAmount / refundRate));
  // netAmountUSD = paidAmountUSD (refunds tracked independently via refunds collection)
  const netAmountUSD    = Number(s.netAmountUSD ?? paidAmountUSD);
  const normalized = {
    ...s, lockedRate, amount, amountUSD,
    totalPrice, totalPriceUSD, paidAmount, paidAmountUSD, remainingAmountUSD,
    refundAmount, refundRate, refundAmountUSD, netAmountUSD, expiryDate, daysRemaining
  };
  normalized.status = getComputedStatus(normalized);
  return normalized;
}

// ==================== Revenue Helpers (Transaction-Based) ====================
// Per-subscriber real net: paid minus refunds from collection, with legacy fallback
function getSubRealNetUSD(s) {
  const paid = s.paidAmountUSD || s.amountUSD || 0;
  const refunded = typeof getTotalRefundedUSD === 'function' ? getTotalRefundedUSD(s.id) : (s.refundAmountUSD || 0);
  return paid - refunded;
}

// ==================== Calendar ====================
function renderCalendar() {
  const year  = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  document.getElementById('currentMonthLabel').textContent = `${arabicMonths[month]} ${year}`;
  const monthData = sampleData.filter(s => {
    const d = new Date(s.date);
    return d.getFullYear() === year && d.getMonth() === month;
  });
  // Transaction-based: revenue from payments in this month, minus refunds in this month
  const monthPaymentsRev = monthData.reduce((s, x) => s + (x.paidAmountUSD || x.amountUSD || 0), 0);
  const monthRefundsRev  = refundsData
    .filter(r => { const d = new Date(r.refundDate); return d.getFullYear() === year && d.getMonth() === month; })
    .reduce((s, r) => s + (r.refundAmountUSD || 0), 0);
  const monthNetRevenue  = monthPaymentsRev - monthRefundsRev;

  document.getElementById('monthTotal').textContent   = formatNumber(monthData.length);
  document.getElementById('monthRevenue').textContent = hasPermission('canViewRevenue')
    ? formatNumber(monthNetRevenue, 2) : 'مخفي';
  document.getElementById('monthSilver').textContent  = formatNumber(monthData.filter(s => s.package === 'فضية').length);
  document.getElementById('monthGold').textContent    = formatNumber(monthData.filter(s => s.package === 'ذهبية').length);
  const firstDay    = new Date(year, month, 1);
  const lastDay     = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startOffset = (firstDay.getDay() + 1) % 7;
  const todayStr    = new Date().toISOString().split('T')[0];
  let html = '';
  for (let i = 0; i < startOffset; i++) html += '<div></div>';
  for (let day = 1; day <= daysInMonth; day++) {
    const dateStr    = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const dayData    = monthData.filter(s => s.date === dateStr);
    const isToday    = dateStr === todayStr;
    const silverCount = dayData.filter(s => s.package === 'فضية').length;
    const goldCount   = dayData.filter(s => s.package === 'ذهبية').length;
    const dayRevenue  = dayData.reduce((s, x) => s + getSubRealNetUSD(x), 0);
    if (dayData.length > 0) {
      const revenuePopup = hasPermission('canViewRevenue') ? `<p class="text-emerald-600 font-bold">$${formatNumber(dayRevenue, 2)}</p>` : '';
      html += `<div class="calendar-day has-data${isToday ? ' today' : ''}" onclick="showDayDetails('${dateStr}')">
        <div class="day-num">${day}</div>
        <div class="day-count">${dayData.length} اشتراك</div>
        <div class="flex gap-1 mt-1">
          ${silverCount > 0 ? `<span style="font-size:9px;background:#cbd5e1;color:#334155;padding:1px 4px;border-radius:4px;">${silverCount}</span>` : ''}
          ${goldCount  > 0 ? `<span style="font-size:9px;background:#fde68a;color:#78350f;padding:1px 4px;border-radius:4px;">${goldCount}</span>` : ''}
        </div>
        <div class="day-popup">
          <p class="font-bold text-slate-800 mb-1">يوم ${day}</p>
          <p class="text-slate-600">${dayData.length} اشتراك</p>
          ${revenuePopup}
          ${silverCount > 0 ? `<p class="text-slate-600">فضية: ${silverCount}</p>` : ''}
          ${goldCount   > 0 ? `<p class="text-amber-700">ذهبية: ${goldCount}</p>` : ''}
        </div>
      </div>`;
    } else {
      html += `<div class="calendar-day empty${isToday ? ' today' : ''}"><div class="day-num">${day}</div></div>`;
    }
  }
  document.getElementById('calendarGrid').innerHTML = html;
}

function changeMonth(delta) {
  currentMonth.setMonth(currentMonth.getMonth() + delta);
  renderCalendar();
}

function showDayDetails(dateStr) {
  const dayData = sampleData.filter(s => s.date === dateStr);
  const date    = new Date(dateStr);
  document.getElementById('dayModalTitle').textContent    = date.toLocaleDateString('ar-EG', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  document.getElementById('dayModalSubtitle').textContent = `${dayData.length} اشتراك في هذا اليوم`;
  const totalUSD    = dayData.reduce((s, x) => s + getSubRealNetUSD(x), 0);
  const silver      = dayData.filter(s => s.package === 'فضية');
  const gold        = dayData.filter(s => s.package === 'ذهبية');
  const revenueCard = hasPermission('canViewRevenue')
    ? `<div class="bg-emerald-50 rounded-lg p-3 text-center"><p class="text-xs text-emerald-700">إيرادات اليوم</p><p class="text-xl font-bold text-emerald-900">$${formatNumber(totalUSD, 2)}</p></div>` : '';
  const gridCols = hasPermission('canViewRevenue') ? 'grid-cols-3' : 'grid-cols-2';
  let html = `<div class="grid ${gridCols} gap-3 mb-5">${revenueCard}<div class="pkg-silver rounded-lg p-3 text-center"><p class="text-xs">فضية</p><p class="text-xl font-bold">${silver.length}</p></div><div class="pkg-gold rounded-lg p-3 text-center"><p class="text-xs">ذهبية</p><p class="text-xl font-bold">${gold.length}</p></div></div><div class="space-y-2">`;
  dayData.forEach(s => {
    const pkgClass = s.package === 'فضية' ? 'pkg-silver' : 'pkg-gold';
    const empClass = s.convincedBy === 'حنان' ? 'badge-emp-hanan' : s.convincedBy === 'ميار' ? 'badge-emp-mayar' : 'badge-emp-medo';
    const amountHtml = hasPermission('canViewRevenue') ? `<span class="text-sm font-bold text-emerald-700">$${formatNumber(getSubRealNetUSD(s), 2)}</span>` : '';
    html += `<div class="border border-slate-200 rounded-lg p-3 flex items-center justify-between flex-wrap gap-2"><div><p class="font-bold text-slate-800">${s.name}</p><p class="text-xs text-slate-500">${getResidenceLabel(s.residence || s.country)} · ${s.dialCode || ''}${s.phone || ''}</p></div><div class="flex items-center gap-2 flex-wrap"><span class="${pkgClass} text-xs px-2 py-1 rounded font-bold">${s.package}</span><span class="text-xs ${empClass} px-2 py-1 rounded font-semibold">${s.convincedBy || '-'}</span>${amountHtml}</div></div>`;
  });
  html += '</div>';
  document.getElementById('dayModalBody').innerHTML = html;
  document.getElementById('dayModal').classList.add('active');
}

function closeDayModal() {
  document.getElementById('dayModal').classList.remove('active');
}

// ==================== Stats & Table ====================
function updateStats(data) {
  const total           = data.length;
  const withdrawn       = data.filter(s => s.subscriptionState === 'withdrawn').length;
  const activeForExpiry = data.filter(s => s.subscriptionState !== 'withdrawn');
  const grossUSD        = data.reduce((sum, s) => sum + (s.paidAmountUSD || s.amountUSD || 0), 0);
  // Per-subscriber refund: check refunds collection first, then legacy field
  const refundUSD       = data.reduce((sum, s) => {
    const fromCollection = refundsData.filter(r => r.subscriberId === s.id).reduce((a, r) => a + (r.refundAmountUSD || 0), 0);
    return sum + (fromCollection > 0 ? fromCollection : (s.refundAmountUSD || 0));
  }, 0);
  const netUSD          = grossUSD - refundUSD;
  const expiring        = activeForExpiry.filter(s => s.status === 'ينتهي قريباً').length;
  const silver          = data.filter(s => s.package === 'فضية');
  const gold            = data.filter(s => s.package === 'ذهبية');
  const totalRemaining  = data.reduce((sum, s) => sum + s.remainingAmountUSD, 0);

  document.getElementById('totalSubs').textContent         = formatNumber(total);
  document.getElementById('withdrawnCountText').textContent = `منسحب: ${formatNumber(withdrawn)}`;
  document.getElementById('netRevenueUSD').textContent     = hasPermission('canViewRevenue') ? formatNumber(netUSD, 2) : 'مخفي';
  document.getElementById('grossRefundText').textContent   = hasPermission('canViewRevenue') ? `مدفوعات: $${formatNumber(grossUSD, 2)} / مسترد: $${formatNumber(refundUSD, 2)}` : 'الإيرادات تظهر للإدارة فقط';
  document.getElementById('expiringCount').textContent     = formatNumber(expiring);
  if (document.getElementById('totalRemainingUSD')) {
    document.getElementById('totalRemainingUSD').textContent = hasPermission('canViewRevenue') ? formatNumber(totalRemaining, 2) : 'مخفي';
  }
  document.getElementById('silverCount').textContent   = formatNumber(silver.length);
  document.getElementById('silverRevenue').textContent = hasPermission('canViewRevenue') ? formatNumber(silver.reduce((s, x) => s + getSubRealNetUSD(x), 0), 2) : 'مخفي';
  document.getElementById('goldCount').textContent     = formatNumber(gold.length);
  document.getElementById('goldRevenue').textContent   = hasPermission('canViewRevenue') ? formatNumber(gold.reduce((s, x) => s + getSubRealNetUSD(x), 0), 2) : 'مخفي';
  document.getElementById('alertsBadge').textContent   = expiring + activeForExpiry.filter(s => s.status === 'منتهي').length;
}

function updateTeamPerformance(data) {
  if (!hasPermission('canViewRevenue')) {
    document.getElementById('teamPerformance').innerHTML = '<div class="text-center text-slate-400 py-8">تقارير الإيرادات متاحة للإدارة فقط</div>';
    return;
  }
  const employees = ['حنان', 'ميار', 'ميدو'];
  const colors = { 'حنان': ['bg-purple-100','text-purple-700','bg-purple-500'], 'ميار': ['bg-teal-100','text-teal-700','bg-teal-500'], 'ميدو': ['bg-orange-100','text-orange-700','bg-orange-500'] };
  const stats = employees.map(emp => {
    const empData = data.filter(s => s.convincedBy === emp);
    return { name: emp, count: empData.length, revenueUSD: empData.reduce((sum, x) => sum + getSubRealNetUSD(x), 0) };
  }).sort((a, b) => b.revenueUSD - a.revenueUSD);
  const maxRevenue = Math.max(...stats.map(s => s.revenueUSD), 1);
  const totalUSD   = stats.reduce((sum, x) => sum + x.revenueUSD, 0);
  document.getElementById('teamPerformance').innerHTML = stats.map((s, i) => {
    const [bg, text, bar] = colors[s.name];
    const pct = totalUSD > 0 ? (s.revenueUSD / totalUSD * 100) : 0;
    return `<div><div class="flex items-center justify-between mb-2"><div class="flex items-center gap-2"><span class="text-xs text-slate-400">#${i + 1}</span><span class="${bg} ${text} px-3 py-1 rounded-lg font-semibold text-sm">${s.name}</span><span class="text-xs text-slate-500">${s.count} مشترك</span></div><div class="text-left"><p class="font-bold text-slate-800">$${formatNumber(s.revenueUSD, 2)}</p><p class="text-xs text-slate-500">${pct.toFixed(1)}%</p></div></div><div class="bg-slate-100 rounded-full h-2 overflow-hidden"><div class="${bar} h-full rounded-full" style="width:${s.revenueUSD / maxRevenue * 100}%"></div></div></div>`;
  }).join('');
}

function updateAlerts(data) {
  const expiring = data.filter(s => s.subscriptionState !== 'withdrawn' && (s.status === 'ينتهي قريباً' || s.status === 'منتهي')).sort((a, b) => a.daysRemaining - b.daysRemaining).slice(0, 5);
  document.getElementById('alertsList').innerHTML = expiring.length === 0
    ? '<div class="px-6 py-8 text-center text-slate-400">لا توجد تنبيهات</div>'
    : expiring.map(s => {
        const isExpired = s.status === 'منتهي';
        const text  = isExpired ? `منتهي منذ ${Math.abs(s.daysRemaining)} يوم` : `ينتهي خلال ${s.daysRemaining} يوم`;
        const color = isExpired ? 'text-red-600 bg-red-50' : 'text-amber-600 bg-amber-50';
        return `<div class="px-6 py-3 flex items-center justify-between hover:bg-slate-50"><div><p class="font-medium text-slate-800">${s.name}</p><p class="text-xs text-slate-500">${s.dialCode || ''}${s.phone || ''} · ${s.package}</p></div><div class="text-left"><span class="text-xs px-2 py-1 rounded-full font-semibold ${color}">${text}</span><p class="text-xs text-slate-400 mt-1">المسؤول: ${s.convincedBy || '-'}</p></div></div>`;
      }).join('');
}

function updateTable(data) {
  document.getElementById('subsTableBody').innerHTML = data.map((s, i) => {
    const statusClass = s.status === 'نشط' ? 'status-active' : s.status === 'ينتهي قريباً' ? 'status-expiring' : s.status === 'منسحب' ? 'status-withdrawn' : 'status-expired';
    const empClass    = s.convincedBy === 'حنان' ? 'badge-emp-hanan' : s.convincedBy === 'ميار' ? 'badge-emp-mayar' : 'badge-emp-medo';
    const pkgClass    = s.package === 'فضية' ? 'pkg-silver' : 'pkg-gold';
    // Use refunds collection for display; fallback to legacy subscriber field
    const subRefundUSD = typeof getTotalRefundedUSD === 'function' ? getTotalRefundedUSD(s.id) : s.refundAmountUSD;
    const refundText   = hasPermission('canViewRevenue') && subRefundUSD > 0 ? `$${formatNumber(subRefundUSD, 2)}` : '-';
    const realNetUSD   = (s.paidAmountUSD || s.amountUSD || 0) - subRefundUSD;
    const netText      = hasPermission('canViewRevenue') ? `$${formatNumber(realNetUSD, 2)}` : 'مخفي';
    const totalText   = hasPermission('canViewRevenue') ? `$${formatNumber(s.totalPriceUSD, 2)}` : 'مخفي';

    let payCell = 'مخفي';
    if (hasPermission('canViewRevenue')) {
      const paidUSD  = s.paidAmountUSD;
      const totalUSD = s.totalPriceUSD || s.amountUSD;
      const remUSD   = s.remainingAmountUSD;
      const pct      = totalUSD > 0 ? Math.min(100, (paidUSD / totalUSD) * 100) : 100;
      const isPartial = remUSD > 0.01;
      payCell = `<div>
        <span class="font-semibold text-emerald-700 text-xs">$${formatNumber(paidUSD, 2)}</span>
        ${isPartial ? `<span class="text-xs text-amber-600 mr-1">/ متبقي $${formatNumber(remUSD, 2)}</span>` : ''}
        <div class="pay-bar"><div class="pay-bar-fill ${isPartial ? 'partial' : ''}" style="width:${pct}%"></div></div>
      </div>`;
    }

    const editBtn     = hasPermission('canEdit') ? `<button onclick="openEditModal('${s.id}')" class="px-2 py-1 rounded bg-indigo-50 text-indigo-700 hover:bg-indigo-100 text-xs">تعديل</button>` : '';
    const payBtn      = hasPermission('canCreate') && s.subscriptionState !== 'withdrawn' ? `<button onclick="openAddPaymentModal('${s.id}')" class="px-2 py-1 rounded bg-sky-50 text-sky-700 hover:bg-sky-100 text-xs">دفعة</button>` : '';
    const histBtn     = `<button onclick="openViewPaymentsModal('${s.id}')" class="px-2 py-1 rounded bg-slate-50 text-slate-600 hover:bg-slate-100 text-xs">سجل</button>`;
    const withdrawBtn = !hasPermission('canWithdraw') ? '' : (s.subscriptionState === 'withdrawn'
      ? `<button onclick="openWithdrawModal('${s.id}')" class="px-2 py-1 rounded bg-slate-100 text-slate-600 hover:bg-slate-200 text-xs">تعديل الانسحاب</button>`
      : `<button onclick="openWithdrawModal('${s.id}')" class="px-2 py-1 rounded bg-rose-50 text-rose-700 hover:bg-rose-100 text-xs">انسحاب</button>`);
    const deleteBtn   = hasPermission('canDelete') ? `<button onclick="deleteSubscriber('${s.id}', '${escapeAttr(s.name)}')" class="px-2 py-1 rounded bg-red-50 text-red-700 hover:bg-red-100 text-xs">حذف</button>` : '';

    return `<tr class="hover:bg-slate-50">
      <td class="px-4 py-3 text-slate-400 text-xs">${i + 1}</td>
      <td class="px-4 py-3 text-slate-600 text-xs whitespace-nowrap">${formatDate(s.date)}</td>
      <td class="px-4 py-3 font-medium text-slate-800 whitespace-nowrap">${escapeHtml(s.name || '-')}</td>
      <td class="px-4 py-3 text-slate-600 text-xs font-mono whitespace-nowrap" dir="ltr">${s.dialCode || ''} ${s.phone || ''}</td>
      <td class="px-4 py-3 text-slate-600 text-xs whitespace-nowrap">${getResidenceLabel(s.residence || s.country)}</td>
      <td class="px-4 py-3"><span class="${pkgClass} text-xs px-2 py-1 rounded font-bold whitespace-nowrap">${s.package || '-'}</span></td>
      <td class="px-4 py-3 whitespace-nowrap text-xs text-slate-600">${totalText}</td>
      <td class="px-4 py-3 bg-emerald-50/30 whitespace-nowrap">${payCell}</td>
      <td class="px-4 py-3 whitespace-nowrap text-rose-700 text-xs">${refundText}</td>
      <td class="px-4 py-3 bg-emerald-50/50 whitespace-nowrap"><span class="font-bold text-emerald-700">${netText}</span></td>
      <td class="px-4 py-3 text-xs text-slate-600 whitespace-nowrap">${formatDate(s.expiryDate)}</td>
      <td class="px-4 py-3"><span class="text-xs px-2 py-1 rounded-full font-semibold ${statusClass} whitespace-nowrap">${s.status}</span></td>
      <td class="px-4 py-3"><span class="text-xs px-2 py-1 rounded font-semibold ${empClass}">${s.convincedBy || '-'}</span></td>
      <td class="px-4 py-3"><div class="flex gap-1 flex-wrap whitespace-nowrap">${editBtn}${payBtn}${histBtn}${withdrawBtn}${deleteBtn}</div></td>
    </tr>`;
  }).join('') || '<tr><td colspan="14" class="px-4 py-8 text-center text-slate-400">لا توجد بيانات</td></tr>';
  document.getElementById('subsCount').textContent = `عرض ${data.length} مشترك من ${sampleData.length}`;
}

// ==================== Filters & Role UI ====================
function applyFilters() {
  const search = document.getElementById('searchInput').value.toLowerCase();
  const emp    = document.getElementById('filterEmployee').value;
  const pkg    = document.getElementById('filterPackage').value;
  const status = document.getElementById('filterStatus').value;
  const filtered = sampleData.filter(s =>
    (!search || String(s.name || '').toLowerCase().includes(search) || String(s.phone || '').includes(search)) &&
    (!emp    || s.convincedBy === emp) &&
    (!pkg    || s.package === pkg) &&
    (!status || s.status === status)
  );
  updateTable(filtered);
}

function applyRoleUi() {
  const label = `${currentUserProfile.name || currentUserProfile.email} - ${roleLabels[currentUserProfile.role] || currentUserProfile.role}`;
  document.getElementById('currentUserLabel').textContent = ` | ${label}`;
  document.getElementById('sideUserRole').textContent = label;
  document.querySelectorAll('[data-permission]').forEach(el => {
    el.classList.toggle('hidden', !hasPermission(el.dataset.permission));
  });
  const convinced = document.getElementById('f_convinced');
  if (currentUserProfile.role === 'employee') {
    convinced.value    = currentUserProfile.employeeName || currentUserProfile.name || '';
    convinced.disabled = true;
  } else {
    convinced.disabled = false;
  }
}

function renderUsersAdmin() {
  const body = document.getElementById('usersAdminBody');
  if (!body) return;
  if (!hasPermission('canManageUsers')) {
    body.innerHTML = '<tr><td colspan="6" class="px-4 py-8 text-center text-slate-400">إدارة المستخدمين متاحة للمالك فقط</td></tr>';
    return;
  }
  body.innerHTML = usersData.map(user => {
    const isCurrentUser = user.uid === currentUserProfile?.uid;
    const roleOptions   = ['owner', 'admin', 'employee'].map(role =>
      `<option value="${role}" ${user.role === role ? 'selected' : ''}>${roleLabels[role] || role}</option>`
    ).join('');
    const updated = user.updatedAt ? formatDateTime(user.updatedAt) : '-';
    return `<tr class="hover:bg-slate-50">
      <td class="px-4 py-3 min-w-[260px]">
        <input id="user_name_${user.uid}" value="${escapeAttr(user.name || '')}" class="w-full border border-slate-300 rounded-lg px-3 py-1.5 text-sm mb-1" placeholder="الاسم">
        <p class="text-xs text-slate-400 font-mono" dir="ltr">${user.uid}</p>
        ${user.email ? `<p class="text-xs text-slate-500" dir="ltr">${escapeHtml(user.email)}</p>` : ''}
      </td>
      <td class="px-4 py-3">
        <select id="user_role_${user.uid}" class="border border-slate-300 rounded-lg px-3 py-1.5 text-sm" ${isCurrentUser ? 'disabled title="لا تغيّر دور حسابك الحالي من هنا"' : ''}>${roleOptions}</select>
      </td>
      <td class="px-4 py-3"><input id="user_employee_${user.uid}" value="${escapeAttr(user.employeeName || '')}" class="w-40 border border-slate-300 rounded-lg px-3 py-1.5 text-sm" placeholder="مثال: حنان"></td>
      <td class="px-4 py-3">
        <label class="inline-flex items-center gap-2 text-sm text-slate-700">
          <input id="user_active_${user.uid}" type="checkbox" ${user.active ? 'checked' : ''} ${isCurrentUser ? 'disabled title="لا تعطل حسابك الحالي"' : ''}>
          فعّال
        </label>
      </td>
      <td class="px-4 py-3 text-xs text-slate-500 whitespace-nowrap">${updated}</td>
      <td class="px-4 py-3"><button onclick="saveUserProfile('${user.uid}')" class="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-lg text-xs font-bold">حفظ</button></td>
    </tr>`;
  }).join('') || '<tr><td colspan="6" class="px-4 py-8 text-center text-slate-400">لا توجد بيانات مستخدمين</td></tr>';
}

function populateCountrySelects() {
  const residenceOptions = [
    ...residenceCountries.map(c => `<option value="${c.value}">${c.name}</option>`),
    ...phoneCountries.map(c => `<option value="${c.iso}">${c.name}</option>`)
  ].join('');
  document.getElementById('f_residence').innerHTML    = '<option value="">اختر الإقامة...</option>' + residenceOptions;
  document.getElementById('f_phoneCountry').innerHTML = '<option value="">اختر دولة رقم الهاتف...</option>' + phoneCountries.map(c => `<option value="${c.iso}">${c.name} (${c.dialCode})</option>`).join('');
}

function updateDialCode() {
  const iso = document.getElementById('f_phoneCountry').value;
  document.getElementById('f_dialcode_display').textContent = phoneCountries.find(c => c.iso === iso)?.dialCode || '+';
}

function toggleReferrerField() {
  document.getElementById('referrerWrap').classList.toggle('hidden', document.getElementById('f_source').value !== 'ترشيح');
}

// ==================== Advanced Stats ====================
function populateAdvancedStatsFilters() {
  const countryEl = document.getElementById('asFilterCountry');
  if (!countryEl) return;
  const countries  = [...new Set(sampleData.map(s => s.residence || s.country).filter(Boolean))].sort();
  const currentVal = countryEl.value;
  countryEl.innerHTML = '<option value="">كل الدول</option>' +
    countries.map(c => `<option value="${escapeAttr(c)}" ${c === currentVal ? 'selected' : ''}>${escapeHtml(getResidenceLabel(c))}</option>`).join('');

  const monthEl  = document.getElementById('asFilterMonth');
  const months   = [...new Set(sampleData.map(s => (s.date || '').slice(0, 7)).filter(Boolean))].sort().reverse();
  const curMonth = monthEl.value;
  monthEl.innerHTML = '<option value="">كل الأشهر</option>' +
    months.map(m => {
      const [y, mo] = m.split('-');
      return `<option value="${m}" ${m === curMonth ? 'selected' : ''}>${arabicMonths[Number(mo) - 1]} ${y}</option>`;
    }).join('');

  const pmEl    = document.getElementById('asFilterPayment');
  const methods = [...new Set(sampleData.map(s => s.payment).filter(Boolean))].sort();
  const curPm   = pmEl.value;
  pmEl.innerHTML = '<option value="">كل طرق الدفع</option>' +
    methods.map(m => `<option value="${escapeAttr(m)}" ${m === curPm ? 'selected' : ''}>${escapeHtml(m)}</option>`).join('');
}

function renderAdvancedStats() {
  const pkg     = document.getElementById('asFilterPackage')?.value || '';
  const country = document.getElementById('asFilterCountry')?.value || '';
  const month   = document.getElementById('asFilterMonth')?.value   || '';
  const emp     = document.getElementById('asFilterEmployee')?.value || '';
  const pm      = document.getElementById('asFilterPayment')?.value  || '';

  const filtered = sampleData.filter(s =>
    (!pkg     || s.package === pkg) &&
    (!country || (s.residence || s.country) === country) &&
    (!month   || (s.date || '').slice(0, 7) === month) &&
    (!emp     || s.convincedBy === emp) &&
    (!pm      || s.payment === pm)
  );

  const canRev    = hasPermission('canViewRevenue');
  const totalSubs = filtered.length;
  const totalRev  = filtered.reduce((a, s) => a + getSubRealNetUSD(s),  0);
  const totalPaid = filtered.reduce((a, s) => a + s.paidAmountUSD,      0);
  const totalRem  = filtered.reduce((a, s) => a + s.remainingAmountUSD, 0);

  document.getElementById('asTotalSubs').textContent = formatNumber(totalSubs);
  document.getElementById('asTotalRev').textContent  = canRev ? `$${formatNumber(totalRev,  2)}` : '—';
  document.getElementById('asTotalPaid').textContent = canRev ? `$${formatNumber(totalPaid, 2)}` : '—';
  document.getElementById('asTotalRem').textContent  = canRev ? `$${formatNumber(totalRem,  2)}` : '—';

  const empBarColors = { 'حنان': '#8b5cf6', 'ميار': '#14b8a6', 'ميدو': '#f97316' };
  const empColors    = { 'حنان': 'bg-purple-100 text-purple-700', 'ميار': 'bg-teal-100 text-teal-700', 'ميدو': 'bg-orange-100 text-orange-700' };
  const empStats = ['حنان', 'ميار', 'ميدو'].map(e => {
    const d = filtered.filter(s => s.convincedBy === e);
    return { name: e, count: d.length, rev: d.reduce((a, x) => a + getSubRealNetUSD(x), 0) };
  }).sort((a, b) => b.rev - a.rev);
  const maxRev = Math.max(...empStats.map(e => e.rev), 1);
  document.getElementById('asEmpBreakdown').innerHTML = empStats.map(e => `
    <div class="mb-3">
      <div class="flex items-center justify-between text-xs mb-1">
        <span class="${empColors[e.name] || 'bg-slate-100 text-slate-700'} px-2 py-0.5 rounded font-semibold">${e.name}</span>
        <span class="text-slate-500">${e.count} مشترك${canRev ? ` · $${formatNumber(e.rev, 2)}` : ''}</span>
      </div>
      <div class="bg-slate-100 rounded-full h-2 overflow-hidden">
        <div class="h-full rounded-full" style="width:${e.rev / maxRev * 100}%;background:${empBarColors[e.name] || '#6366f1'}"></div>
      </div>
    </div>`).join('');

  const pmMap     = {};
  filtered.forEach(s => { if (s.payment) pmMap[s.payment] = (pmMap[s.payment] || 0) + 1; });
  const pmEntries = Object.entries(pmMap).sort((a, b) => b[1] - a[1]);
  const maxPm     = Math.max(...pmEntries.map(([, c]) => c), 1);
  document.getElementById('asPayBreakdown').innerHTML = pmEntries.length === 0
    ? '<p class="text-slate-400 text-sm text-center py-4">لا توجد بيانات</p>'
    : pmEntries.map(([m, c]) => `
      <div class="mb-2">
        <div class="flex items-center justify-between text-xs mb-1">
          <span class="text-slate-600">${escapeHtml(m)}</span>
          <span class="font-semibold text-slate-700">${c}</span>
        </div>
        <div class="bg-slate-100 rounded-full h-1.5 overflow-hidden">
          <div class="h-full rounded-full bg-emerald-400" style="width:${c / maxPm * 100}%"></div>
        </div>
      </div>`).join('');
}

// ==================== Transaction-Based Analytics ====================
function updateTransactionCards() {
  if (!hasPermission('canViewRevenue')) return;

  const now       = new Date();
  const curYear   = now.getFullYear();
  const curMonth  = now.getMonth();
  const monthKey  = `${curYear}-${String(curMonth + 1).padStart(2, '0')}`;

  // Monthly refunds from refunds collection (by refundDate)
  const monthRefunds = refundsData.filter(r => (r.refundDate || '').slice(0, 7) === monthKey);
  const monthRefundsTotal = monthRefunds.reduce((sum, r) => sum + (r.refundAmountUSD || 0), 0);

  // Monthly withdrawn subscribers
  const monthWithdrawn = sampleData.filter(s =>
    s.subscriptionState === 'withdrawn' && (s.withdrawnAt || '').slice(0, 7) === monthKey
  ).length;

  // Real net profit: payments this month minus refunds this month (transaction-based)
  // We use subscriber payment dates from payments collection if available,
  // otherwise fall back to subscriber.date for legacy data
  const monthPaymentsTotal = sampleData
    .filter(s => (s.date || '').slice(0, 7) === monthKey)
    .reduce((sum, s) => sum + (s.paidAmountUSD || s.amountUSD || 0), 0);

  const realNetProfit = monthPaymentsTotal - monthRefundsTotal;

  const el = id => document.getElementById(id);
  if (el('monthlyRefundsTotal'))  el('monthlyRefundsTotal').textContent  = formatNumber(monthRefundsTotal, 2);
  if (el('monthlyWithdrawnCount')) el('monthlyWithdrawnCount').textContent = formatNumber(monthWithdrawn);
  if (el('realNetProfit'))        el('realNetProfit').textContent        = formatNumber(realNetProfit, 2);
}

function renderRefundsChart() {
  const container = document.getElementById('refundsChartContainer');
  if (!container || !hasPermission('canViewRevenue')) return;

  // Collect last 6 months
  const months = [];
  const now = new Date();
  for (let i = 5; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    months.push({
      key:   `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`,
      label: `${arabicMonths[d.getMonth()]} ${d.getFullYear()}`
    });
  }

  const chartData = months.map(m => {
    // Revenue: sum of paidAmountUSD for subscribers with date in this month
    const revenue = sampleData
      .filter(s => (s.date || '').slice(0, 7) === m.key)
      .reduce((sum, s) => sum + (s.paidAmountUSD || s.amountUSD || 0), 0);

    // Refunds: sum from refunds collection by refundDate
    const refunds = refundsData
      .filter(r => (r.refundDate || '').slice(0, 7) === m.key)
      .reduce((sum, r) => sum + (r.refundAmountUSD || 0), 0);

    return { ...m, revenue, refunds, net: revenue - refunds };
  });

  const maxVal = Math.max(...chartData.map(d => Math.max(d.revenue, d.refunds)), 1);

  container.innerHTML = chartData.map(d => {
    const revPct = (d.revenue / maxVal) * 100;
    const refPct = (d.refunds / maxVal) * 100;
    return `
      <div class="border border-slate-100 rounded-lg p-3">
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-semibold text-slate-700">${d.label}</span>
          <span class="text-xs font-bold ${d.net >= 0 ? 'text-emerald-700' : 'text-rose-700'}">صافي: $${formatNumber(d.net, 2)}</span>
        </div>
        <div class="space-y-1">
          <div class="flex items-center gap-2">
            <span class="text-xs text-emerald-600 w-16 shrink-0">إيراد</span>
            <div class="flex-1 bg-slate-100 rounded-full h-2.5 overflow-hidden">
              <div class="bg-emerald-500 h-full rounded-full" style="width:${revPct}%"></div>
            </div>
            <span class="text-xs text-slate-600 w-20 text-left">$${formatNumber(d.revenue, 2)}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs text-rose-600 w-16 shrink-0">استرداد</span>
            <div class="flex-1 bg-slate-100 rounded-full h-2.5 overflow-hidden">
              <div class="bg-rose-500 h-full rounded-full" style="width:${refPct}%"></div>
            </div>
            <span class="text-xs text-slate-600 w-20 text-left">$${formatNumber(d.refunds, 2)}</span>
          </div>
        </div>
      </div>`;
  }).join('');
}

// ==================== Master Render ====================
function renderAll() {
  updateStats(sampleData);
  updateTransactionCards();
  renderRefundsChart();
  updateTeamPerformance(sampleData);
  updateAlerts(sampleData);
  applyFilters();
  renderCalendar();
  populateAdvancedStatsFilters();
  renderAdvancedStats();
}
