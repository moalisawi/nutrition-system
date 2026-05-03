// ==================== Global State ====================
let db = null;
let auth = null;
let storage = null;
let unsubscribeSubscribers = null;
let unsubscribeUsers = null;
let sampleData = [];
let usersData = [];
let currentUserProfile = null;
let currentExchangeRates = { USD: 1, EGP: 47.5, JOD: 0.71, ILS: 3.65 };
let currentMonth = new Date();
currentMonth.setDate(1);

const PAYMENT_METHODS = ['PayPal','محفظة موبايل','زين كاش','انستاباي','ويسترن يونيون','كريبتو / USDT','فودافون كاش','كاش'];

const roleLabels = { owner: 'مالك', admin: 'مدير', employee: 'موظف' };
const permissionsByRole = {
  owner:    { canViewAll: true,  canViewRevenue: true,  canCreate: true,  canEdit: true,  canWithdraw: true,  canDelete: true,  canManageUsers: true  },
  admin:    { canViewAll: true,  canViewRevenue: true,  canCreate: true,  canEdit: true,  canWithdraw: true,  canDelete: false, canManageUsers: false },
  employee: { canViewAll: false, canViewRevenue: false, canCreate: true,  canEdit: false, canWithdraw: false, canDelete: false, canManageUsers: false },
};

function hasPermission(name) {
  const role = currentUserProfile?.role;
  return Boolean(role && permissionsByRole[role]?.[name]);
}

const currencyInfo = {
  USD: { name: 'دولار', code: 'USD' },
  EGP: { name: 'جنيه', code: 'EGP' },
  JOD: { name: 'دينار', code: 'JOD' },
  ILS: { name: 'شيكل', code: 'ILS' },
};

const residenceCountries = [
  { name: 'قطاع غزة',     value: 'فلسطين-غزة'   },
  { name: 'الضفة الغربية', value: 'فلسطين-الضفة' },
  { name: 'عرب الداخل',   value: 'فلسطين-الداخل' },
];

const phoneCountries = [
  ['أفغانستان','AF','+93'],['ألبانيا','AL','+355'],['الجزائر','DZ','+213'],['أندورا','AD','+376'],['أنغولا','AO','+244'],['الأرجنتين','AR','+54'],['أرمينيا','AM','+374'],['أستراليا','AU','+61'],['النمسا','AT','+43'],['أذربيجان','AZ','+994'],
  ['البحرين','BH','+973'],['بنغلاديش','BD','+880'],['بيلاروسيا','BY','+375'],['بلجيكا','BE','+32'],['بليز','BZ','+501'],['بنين','BJ','+229'],['بوتان','BT','+975'],['بوليفيا','BO','+591'],['البوسنة والهرسك','BA','+387'],['بوتسوانا','BW','+267'],['البرازيل','BR','+55'],['بروناي','BN','+673'],['بلغاريا','BG','+359'],['بوركينا فاسو','BF','+226'],['بوروندي','BI','+257'],
  ['كمبوديا','KH','+855'],['الكاميرون','CM','+237'],['كندا','CA','+1'],['تشاد','TD','+235'],['تشيلي','CL','+56'],['الصين','CN','+86'],['كولومبيا','CO','+57'],['الكونغو','CG','+242'],['كوستاريكا','CR','+506'],['كرواتيا','HR','+385'],['كوبا','CU','+53'],['قبرص','CY','+357'],['التشيك','CZ','+420'],
  ['الدنمارك','DK','+45'],['جيبوتي','DJ','+253'],['الإكوادور','EC','+593'],['مصر','EG','+20'],['السلفادور','SV','+503'],['إريتريا','ER','+291'],['إستونيا','EE','+372'],['إثيوبيا','ET','+251'],['فنلندا','FI','+358'],['فرنسا','FR','+33'],
  ['الغابون','GA','+241'],['غامبيا','GM','+220'],['جورجيا','GE','+995'],['ألمانيا','DE','+49'],['غانا','GH','+233'],['اليونان','GR','+30'],['غواتيمالا','GT','+502'],['غينيا','GN','+224'],['هايتي','HT','+509'],['هندوراس','HN','+504'],['هونغ كونغ','HK','+852'],['المجر','HU','+36'],
  ['آيسلندا','IS','+354'],['الهند','IN','+91'],['إندونيسيا','ID','+62'],['إيران','IR','+98'],['العراق','IQ','+964'],['أيرلندا','IE','+353'],['الداخل / إسرائيل','IL','+972'],['إيطاليا','IT','+39'],['ساحل العاج','CI','+225'],['اليابان','JP','+81'],['الأردن','JO','+962'],
  ['كازاخستان','KZ','+7'],['كينيا','KE','+254'],['الكويت','KW','+965'],['قرغيزستان','KG','+996'],['لاوس','LA','+856'],['لاتفيا','LV','+371'],['لبنان','LB','+961'],['ليبيا','LY','+218'],['ليختنشتاين','LI','+423'],['ليتوانيا','LT','+370'],['لوكسمبورغ','LU','+352'],
  ['ماليزيا','MY','+60'],['جزر المالديف','MV','+960'],['مالي','ML','+223'],['مالطا','MT','+356'],['موريتانيا','MR','+222'],['موريشيوس','MU','+230'],['المكسيك','MX','+52'],['مولدوفا','MD','+373'],['موناكو','MC','+377'],['منغوليا','MN','+976'],['المغرب','MA','+212'],['موزمبيق','MZ','+258'],
  ['نيبال','NP','+977'],['هولندا','NL','+31'],['نيوزيلندا','NZ','+64'],['نيكاراغوا','NI','+505'],['النيجر','NE','+227'],['نيجيريا','NG','+234'],['كوريا الشمالية','KP','+850'],['النرويج','NO','+47'],['عمان','OM','+968'],['باكستان','PK','+92'],['فلسطين','PS','+970'],['بنما','PA','+507'],['باراغواي','PY','+595'],['بيرو','PE','+51'],['الفلبين','PH','+63'],['بولندا','PL','+48'],['البرتغال','PT','+351'],
  ['قطر','QA','+974'],['رومانيا','RO','+40'],['روسيا','RU','+7'],['رواندا','RW','+250'],['السعودية','SA','+966'],['السنغال','SN','+221'],['صربيا','RS','+381'],['سنغافورة','SG','+65'],['سلوفاكيا','SK','+421'],['سلوفينيا','SI','+386'],['الصومال','SO','+252'],['جنوب أفريقيا','ZA','+27'],['كوريا الجنوبية','KR','+82'],['إسبانيا','ES','+34'],['سريلانكا','LK','+94'],['السودان','SD','+249'],['السويد','SE','+46'],['سويسرا','CH','+41'],['سوريا','SY','+963'],
  ['تايوان','TW','+886'],['طاجيكستان','TJ','+992'],['تنزانيا','TZ','+255'],['تايلاند','TH','+66'],['توغو','TG','+228'],['تونس','TN','+216'],['تركيا','TR','+90'],['تركمانستان','TM','+993'],['أوغندا','UG','+256'],['أوكرانيا','UA','+380'],['الإمارات','AE','+971'],['المملكة المتحدة','GB','+44'],['الولايات المتحدة','US','+1'],['أوروغواي','UY','+598'],['أوزبكستان','UZ','+998'],['فنزويلا','VE','+58'],['فيتنام','VN','+84'],['اليمن','YE','+967'],['زامبيا','ZM','+260'],['زيمبابوي','ZW','+263']
].map(([name, iso, dialCode]) => ({ name, iso, dialCode }));

// ==================== Firebase ====================
const firebaseConfig = {
  apiKey: "AIzaSyDgLSqpUGXIuG9nTVknm1sPr0ngkThSaUA",
  authDomain: "joker-52b38.firebaseapp.com",
  projectId: "joker-52b38",
  storageBucket: "joker-52b38.firebasestorage.app",
  messagingSenderId: "182749321026",
  appId: "1:182749321026:web:1e835fdf6fa52210e79adb",
  measurementId: "G-C546FDS9NM"
};

function showNotice(message, type = 'warn') {
  const box = document.getElementById('firebaseNotice');
  box.className = `rounded-xl border p-4 text-sm ${type === 'error' ? 'border-red-200 bg-red-50 text-red-900' : 'border-amber-200 bg-amber-50 text-amber-900'}`;
  box.textContent = message;
  box.classList.remove('hidden');
}

function initFirebase() {
  try {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    auth = firebase.auth();
    storage = firebase.storage();
    auth.onAuthStateChanged(handleAuthState);
  } catch (error) {
    showNotice('تعذر تشغيل Firebase: ' + error.message, 'error');
  }
}

async function handleAuthState(user) {
  unsubscribeSubscribers?.();
  unsubscribeUsers?.();
  sampleData = [];
  usersData = [];
  renderAll();
  renderUsersAdmin();

  if (!user) {
    currentUserProfile = null;
    document.getElementById('appRoot').classList.add('hidden');
    document.getElementById('loginScreen').classList.remove('hidden');
    return;
  }

  try {
    const doc = await db.collection('users').doc(user.uid).get();
    if (!doc.exists || doc.data().active !== true) {
      await auth.signOut();
      showLoginError('حسابك غير مفعّل في النظام. اطلب من المالك إضافتك في users.');
      return;
    }
    currentUserProfile = { uid: user.uid, email: user.email, ...doc.data() };
    document.getElementById('loginScreen').classList.add('hidden');
    document.getElementById('appRoot').classList.remove('hidden');
    applyRoleUi();
    subscribeToSubscribers();
  } catch (error) {
    showLoginError('تعذر تحميل صلاحيات المستخدم: ' + error.message);
    await auth.signOut();
  }
}

function subscribeToSubscribers() {
  unsubscribeSubscribers?.();
  const baseQuery = hasPermission('canViewAll')
    ? db.collection('subscribers').orderBy('createdAt', 'desc')
    : db.collection('subscribers').where('convincedBy', '==', currentUserProfile.employeeName || currentUserProfile.name || '');

  unsubscribeSubscribers = baseQuery.onSnapshot(snapshot => {
    sampleData = snapshot.docs.map(doc => normalizeSubscriber({ id: doc.id, ...doc.data() }));
    sampleData.sort((a, b) => getMillis(b.createdAt) - getMillis(a.createdAt));
    renderAll();
  }, error => showNotice('تعذر تحميل بيانات المشتركين من Firebase: ' + error.message, 'error'));
}

function subscribeToUsers(force = false) {
  if (!hasPermission('canManageUsers')) return;
  if (unsubscribeUsers && !force) return;
  unsubscribeUsers?.();
  unsubscribeUsers = db.collection('users').onSnapshot(snapshot => {
    usersData = snapshot.docs.map(doc => ({ uid: doc.id, ...doc.data() }))
      .sort((a, b) => String(a.name || a.email || '').localeCompare(String(b.name || b.email || ''), 'ar'));
    renderUsersAdmin();
  }, error => showNotice('تعذر تحميل المستخدمين: ' + error.message, 'error'));
}

async function writeAuditLog(action, details = {}) {
  if (!db || !currentUserProfile) return;
  try {
    await db.collection('auditLogs').add({
      action,
      actorUid:  currentUserProfile.uid,
      actorName: currentUserProfile.name || currentUserProfile.email || '',
      actorRole: currentUserProfile.role || '',
      ...details,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  } catch (error) {
    console.warn('audit log failed', error);
  }
}

function showLoginError(message) {
  const box = document.getElementById('loginError');
  box.textContent = message;
  box.classList.remove('hidden');
}

async function logout() {
  await auth?.signOut();
}
