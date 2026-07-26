(function () {
  var STRINGS = {
    en: {
      'nav.membership': 'Membership',
      'nav.studio': 'Studio',
      'nav.hours': 'Hours &amp; Location',
      'nav.cta': 'Call to Join',
      'hero.eyebrow': 'Ladies-only studio · Hamad Town',
      'hero.title': 'Strength training, <em>built around her</em>.',
      'hero.lede': 'FitFat Fitness is a women-only gym on Sh Hamad Avenue — a private space to train, sweat, and get stronger without an audience.',
      'hero.callBtn': 'Call <span dir="ltr">+973 3530 3430</span>',
      'hero.ghostBtn': 'See membership rates',
      'hero.reviews': '13 Google reviews',
      'heroCard.aria': 'Opening hours',
      'heroCard.title': 'Weekly Schedule',
      'heroCard.address': 'Sh Hamad Ave, Hamad Town, Bahrain',
      'hours.Friday': 'Friday',
      'hours.Saturday': 'Saturday',
      'hours.Sunday': 'Sunday',
      'hours.Monday': 'Monday',
      'hours.Tuesday': 'Tuesday',
      'hours.Wednesday': 'Wednesday',
      'hours.Thursday': 'Thursday',
      'hours.closed': 'Closed',
      'hours.open': '8 AM – 10 PM',
      'philosophy.kicker': 'A studio designed for comfort, not intimidation.',
      'philosophy.p1': "No mixed-gender floor, no waiting on equipment, no second-guessing what to wear. FitFat Fitness keeps its floor women-only, seven days a week except Friday, so training stays about the work — not who's watching.",
      'philosophy.p2': 'Walk-ins are welcome to view the studio during opening hours, or call ahead to speak with the team about which membership length fits your goals.',
      'philosophy.fact1': 'Average rating from 13 Google reviews',
      'philosophy.fact2': 'Days open per week (closed Fridays)',
      'philosophy.fact3': 'Hours open daily, 8 AM – 10 PM',
      'philosophy.fact4': 'Membership lengths, from 1 month to 1 year',
      'membership.eyebrow': 'Membership',
      'membership.title': "Pick a length, not a contract you regret.",
      'membership.note': 'Call the studio to confirm current promotions and start your membership — <span dir="ltr">+973 3530 3430</span>.',
      'plan.d1': '1 Month', 'plan.d2': '2 Months', 'plan.d3': '3 Months', 'plan.d4': '6 Months', 'plan.d5': '1 Year',
      'plan.bd': 'BD',
      'plan.pm1': '30.00 BD / month',
      'plan.pm2': '27.50 BD / month',
      'plan.pm3': '26.67 BD / month',
      'plan.pm4': '25.00 BD / month',
      'plan.pm5': '20.83 BD / month',
      'plan.best': 'Best value',
      'contact.eyebrow': 'Visit',
      'contact.title': 'Find us on Sh Hamad Avenue.',
      'contact.addressLabel': 'Address',
      'contact.plusCode': 'Plus code: <span dir="ltr">3G74+5Q</span> Hamad Town',
      'contact.phoneLabel': 'Phone',
      'contact.hoursLabel': 'Hours',
      'contact.hoursValue': 'Sat – Thu, 8 AM – 10 PM · Closed Friday',
      'contact.directions': 'Get directions <span class="map-arrow" aria-hidden="true">↗</span>',
      'contact.mapAria': 'Open location in Google Maps',
      'cta.title': 'Ready to start?',
      'cta.body': 'Call the studio to check current availability and lock in your membership length.',
      'footer.text': 'FitFat Fitness — Sh Hamad Ave, Hamad Town, Bahrain',
      'footer.tag': 'Gym · Ladies only',
      'footer.whatsapp': 'WhatsApp',
      'footer.whatsappAria': 'Chat on WhatsApp',
      'footer.instagram': 'Instagram',
      'footer.instagramAria': 'Follow on Instagram',
      'status.open': 'Open now · closes 10 PM',
      'status.closedFriday': 'Closed today · reopens Saturday 8 AM',
      'status.closed': 'Closed now · reopens 8 AM'
    },
    ar: {
      'nav.membership': 'الاشتراكات',
      'nav.studio': 'الاستوديو',
      'nav.hours': 'ساعات العمل والموقع',
      'nav.cta': 'اتصلي للانضمام',
      'hero.eyebrow': 'استوديو نسائي فقط · مدينة حمد',
      'hero.title': 'تمارين القوة، <em>مصمَّمة من أجلها</em>.',
      'hero.lede': 'فيت فات فتنس صالة رياضية نسائية فقط في شارع حمد — مساحة خاصة للتمرين والتعرّق واكتساب القوة دون أي أنظار.',
      'hero.callBtn': 'اتصلي على <span dir="ltr">+973 3530 3430</span>',
      'hero.ghostBtn': 'عرض أسعار الاشتراكات',
      'hero.reviews': '13 تقييم على Google',
      'heroCard.aria': 'ساعات العمل',
      'heroCard.title': 'الجدول الأسبوعي',
      'heroCard.address': 'شارع حمد، مدينة حمد، البحرين',
      'hours.Friday': 'الجمعة',
      'hours.Saturday': 'السبت',
      'hours.Sunday': 'الأحد',
      'hours.Monday': 'الاثنين',
      'hours.Tuesday': 'الثلاثاء',
      'hours.Wednesday': 'الأربعاء',
      'hours.Thursday': 'الخميس',
      'hours.closed': 'مغلق',
      'hours.open': '8 ص – 10 م',
      'philosophy.kicker': 'استوديو مصمَّم للراحة، لا للترهيب.',
      'philosophy.p1': 'لا صالة مختلطة، لا انتظار على الأجهزة، ولا حرج في ما ترتدينه. تبقى صالة فيت فات فتنس نسائية فقط طوال الأسبوع ما عدا يوم الجمعة، حتى يبقى التركيز على التمرين لا على من يراقب.',
      'philosophy.p2': 'يسعدنا استقبالك للاطلاع على الاستوديو خلال ساعات العمل، أو اتصلي بنا للتحدث مع الفريق حول مدة الاشتراك الأنسب لأهدافك.',
      'philosophy.fact1': 'متوسط التقييم من 13 مراجعة على Google',
      'philosophy.fact2': 'أيام العمل أسبوعيًا (مغلق يوم الجمعة)',
      'philosophy.fact3': 'ساعات العمل يوميًا، 8 ص – 10 م',
      'philosophy.fact4': 'مدد اشتراك متعددة، من شهر واحد إلى سنة كاملة',
      'membership.eyebrow': 'الاشتراكات',
      'membership.title': 'اختاري المدة، لا عقدًا تندمين عليه.',
      'membership.note': 'اتصلي بالاستوديو لتأكيد العروض الحالية وبدء اشتراكك — <span dir="ltr">+973 3530 3430</span>.',
      'plan.d1': 'شهر واحد', 'plan.d2': 'شهران', 'plan.d3': '3 أشهر', 'plan.d4': '6 أشهر', 'plan.d5': 'سنة واحدة',
      'plan.bd': 'د.ب',
      'plan.pm1': '30.00 د.ب / شهريًا',
      'plan.pm2': '27.50 د.ب / شهريًا',
      'plan.pm3': '26.67 د.ب / شهريًا',
      'plan.pm4': '25.00 د.ب / شهريًا',
      'plan.pm5': '20.83 د.ب / شهريًا',
      'plan.best': 'الأفضل قيمة',
      'contact.eyebrow': 'زورينا',
      'contact.title': 'تجدينا في شارع حمد.',
      'contact.addressLabel': 'العنوان',
      'contact.plusCode': 'الرمز الإضافي: <span dir="ltr">3G74+5Q</span> مدينة حمد',
      'contact.phoneLabel': 'الهاتف',
      'contact.hoursLabel': 'ساعات العمل',
      'contact.hoursValue': 'السبت – الخميس، 8 ص – 10 م · مغلق الجمعة',
      'contact.directions': 'احصلي على الاتجاهات <span class="map-arrow" aria-hidden="true">↗</span>',
      'contact.mapAria': 'افتحي الموقع في خرائط Google',
      'cta.title': 'جاهزة للبدء؟',
      'cta.body': 'اتصلي بالاستوديو للاستفسار عن التوفر الحالي وتثبيت مدة اشتراكك.',
      'footer.text': 'FitFat Fitness — شارع حمد، مدينة حمد، البحرين',
      'footer.tag': 'صالة رياضية · نسائية فقط',
      'footer.whatsapp': 'واتساب',
      'footer.whatsappAria': 'تواصلي عبر واتساب',
      'footer.instagram': 'انستقرام',
      'footer.instagramAria': 'تابعينا على انستقرام',
      'status.open': 'مفتوح الآن · يغلق 10 م',
      'status.closedFriday': 'مغلق اليوم · يفتح السبت 8 ص',
      'status.closed': 'مغلق الآن · يفتح 8 ص'
    }
  };

  var toggle = document.getElementById('langToggle');
  var root = document.documentElement;

  function updateLiveStatus(lang) {
    try {
      var parts = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Bahrain', weekday: 'long', hour: 'numeric', hour12: false
      }).formatToParts(new Date());
      var day = parts.find(function (p) { return p.type === 'weekday'; }).value;
      var hour = parseInt(parts.find(function (p) { return p.type === 'hour'; }).value, 10);
      if (hour === 24) hour = 0;

      document.querySelectorAll('#hoursList li').forEach(function (li) { li.classList.remove('today'); });
      var row = document.querySelector('#hoursList li[data-day="' + day + '"]');
      var status = document.getElementById('liveStatus');
      if (row) {
        row.classList.add('today');
        var todayIsFriday = day === 'Friday';
        var isOpen = !todayIsFriday && hour >= 8 && hour < 22;
        if (status) {
          if (isOpen) status.textContent = STRINGS[lang]['status.open'];
          else if (todayIsFriday) status.textContent = STRINGS[lang]['status.closedFriday'];
          else status.textContent = STRINGS[lang]['status.closed'];
        }
      }
    } catch (e) { /* Intl timeZone unsupported: static hours list still reads correctly */ }
  }

  function applyLang(lang) {
    var dict = STRINGS[lang];
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });
    root.lang = lang;
    root.dir = lang === 'ar' ? 'rtl' : 'ltr';
    toggle.setAttribute('data-active', lang);
    toggle.setAttribute('aria-pressed', lang === 'ar' ? 'true' : 'false');
    updateLiveStatus(lang);
    try { localStorage.setItem('fitfat-lang', lang); } catch (e) {}
  }

  toggle.addEventListener('click', function () {
    var next = toggle.getAttribute('data-active') === 'en' ? 'ar' : 'en';
    applyLang(next);
  });

  var saved = 'en';
  try { saved = localStorage.getItem('fitfat-lang') || 'en'; } catch (e) {}
  applyLang(saved);
})();
