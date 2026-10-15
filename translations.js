// English is the source text in index.html; these override it per language.
const TRANSLATIONS = {
  tr: {
    "meta.title": "Sabir Halil — Yazılım Mühendisi",

    "nav.about": "Hakkımda",
    "nav.experience": "Deneyim",
    "nav.projects": "Projeler",
    "nav.research": "Araştırma",
    "nav.skills": "Yetenekler",
    "nav.contact": "İletişim",

    "hero.badge": "Yeni fırsatlara açığım",
    "hero.role": 'Yazılım Mühendisi — <span class="gradient-text">Mobil, Backend ve IoT Güvenliği</span>',
    "hero.lead":
      "App Store ve Google Play'de yayında olan Flutter uygulamaları ve NestJS / .NET backend'leri geliştiriyorum — ve bunların arkasındaki güvenli, gerçek zamanlı altyapıyı.",
    "hero.cta1": "Çalışmalarımı gör",
    "hero.cta2": "İletişime geç",
    "hero.location": "Kayseri, Türkiye",

    "stats.years": "Yıllık canlı ortam deneyimi",
    "stats.users": "Fırın Paneli'nin günlük kullanıcısı",
    "stats.langs": "Profesyonel düzeyde konuştuğum dil",
    "stats.ids": "IoT saldırı tespiti doğruluğu",

    "about.eyebrow": "01 — Hakkımda",
    "about.title": "Mühendis, girişimci ve güvenlik araştırmacısı",
    "about.p1":
      "<strong>Flutter</strong> mobil uygulamaları ile <strong>NestJS, Node.js ve .NET</strong> backend'lerini canlıya alma konusunda 2 yılı aşkın deneyime sahip bir yazılım mühendisiyim. <strong>Gökay Bilişim</strong>'de bir IoT akıllı ev platformunun tüm yazılım katmanlarından sorumluyum — tek hata noktası olmayan istemci odaklı bir yük dengeleyici, yalnızca VPN üzerinden yönetici erişimi ve gerçek zamanlı WebSocket cihaz kontrolü dahil.",
    "about.p2":
      "Ayrıca her gün 50'den fazla çalışan tarafından kullanılan fırın yönetim platformu <strong>Fırın Paneli</strong>'nin kurucusuyum ve IoT ağları için makine öğrenmesi tabanlı saldırı tespiti üzerine çalışan bir Siber Güvenlik yüksek lisans öğrencisiyim.",
    "about.p3":
      "Kodu, yazdığım şekilde incelerim: önce uç durumlar, hata senaryoları, güvenlik açıkları ve tasarım ödünleşimleri.",
    "about.c1.label": "Şu anda",
    "about.c1.text": "Gökay Bilişim'de Yazılım Mühendisi",
    "about.c2.label": "Eğitim",
    "about.c2.text": "Siber Güvenlik Yüksek Lisans · Kayseri Üniversitesi",
    "about.c2.sub": "Bilgisayar Mühendisliği Lisans · Erciyes Üniversitesi",
    "about.c3.label": "Liderlik",
    "about.c3.text": "Kaysiber Araştırma Grubu Takım Lideri",
    "about.c4.label": "Diller",
    "about.c4.text": "Türkçe · İngilizce · Arapça · Kürtçe",

    "exp.eyebrow": "02 — Deneyim",
    "exp.title": "Çalıştığım yerler",
    "date.present": "2025 — Günümüz",
    "date.outlier": "2025 · 4 ay",
    "date.sorosons": "Nis 2024 — 2025",
    "date.pronic": "Ağu — Eyl 2023",
    "date.otonom": "Eki 2022 — Nis 2023",
    "tag.current": "Güncel",
    "tag.freelance": "Serbest",
    "tag.internship": "Staj",
    "tag.volunteer": "Gönüllü",

    "job1.title": 'Yazılım Mühendisi <span class="at">@ Gökay Bilişim</span>',
    "job1.summary":
      "Gökay Smart Home IoT platformunun tüm yazılım katmanlarını geliştirdim: Flutter uygulaması (iOS ve Android), NestJS backend, MySQL ve ESP32 cihaz iletişimi.",
    "job1.b1":
      "<strong>İstemci odaklı bir yük dengeleyici</strong> tasarladım — istemciler hangi düğümü kullanacaklarını sorar, ardından doğrudan bağlanır. Trafik dengeleyiciden geçmediği için tek hata noktası ve proxy darboğazı ortadan kalkar. k6 ile NGINX'e karşı performans testleri yapıldı.",
    "job1.b2":
      "Mobil istemciler, backend düğümleri ve cihazlar arasında <strong>WebSocket üzerinden gerçek zamanlı cihaz kontrolü</strong> geliştirdim.",
    "job1.b3":
      "Yönetim paneli ve yönetim servislerini <strong>dahili bir VPN'in arkasına</strong> taşıyarak genel internetten kaldırdım.",
    "job1.b4":
      "Backend'i Node.js'ten <strong>NestJS</strong>'e taşıdım ve <strong>Google Home / Assistant</strong> sesli kontrol entegrasyonunu yaptım.",
    "job1.b5":
      "<strong>Yapay zekâ tabanlı bir saldırı tespit hattı</strong> tasarladım: cihazlarda HMAC-SHA256 imzalama, NestJS WebSocket interceptor ve FastAPI ile sunulan bir LightGBM modeli.",
    "job1.b6":
      "Stajyer olarak başladım (Oca – Şub 2025): VMware ESXi / vSphere / vCenter ile sunucu sanallaştırma, güvenlik duvarı kuralları, VM izolasyonu ve yedekleme.",

    "job2.title": 'Yapay Zekâ Model Değerlendiricisi <span class="at">@ Outlier</span>',
    "job2.b1":
      "Tam zamanlı mühendislik işimle birlikte yapay zekâ model çıktılarını doğruluk, akıl yürütme kalitesi ve talimatlara uyum açısından değerlendirdim.",
    "job2.b2":
      "Model tarafından üretilen yanıtları ve kodları görev gereksinimlerine göre inceledim; hataları, zayıf akıl yürütmeyi ve uç durumları raporladım.",

    "job3.title": 'Yazılım Mühendisi <span class="at">@ Sorosons Software</span>',
    "job3.b1":
      "App Store ve Google Play'de çok sayıda bireysel ve kurumsal uygulama geliştirip yayınladım — toptan satış yönetim sistemleri, medikal otomasyon araçları ve eğlence uygulamaları.",
    "job3.b2":
      "Mobilde Flutter ve Kotlin; backend'de Node.js, .NET Core ve Django; veri tarafında MS SQL, MySQL ve MongoDB.",
    "job3.b3":
      "Firebase kimlik doğrulama ve anlık bildirimler, RevenueCat abonelikleri, Google Cloud ve üçüncü taraf API entegrasyonları yaptım.",

    "job4.title": 'Yazılım Stajyeri <span class="at">@ Pronic Yazılım</span>',
    "job4.summary":
      ".NET Core, JWT ve SQL Server ile bir üniversite öğrenci sistemi (belgeler, duyurular, ders seçimi, kampüs haritası) geliştirdim; Android istemcisini Kotlin, MVVM, Dagger Hilt ve Retrofit ile yazdım.",

    "job5.title": 'Mobil Geliştirici <span class="at">@ Erciyes Otonom</span>',
    "job5.summary":
      "Kotlin ve Firebase Realtime Database ile elektrikli otonom bir araç için gerçek zamanlı telemetri uygulaması (batarya, sıcaklık, konum) geliştirdim; projeyi fuar ve konferanslarda sundum.",

    "proj.eyebrow": "03 — Projeler",
    "proj.title": "Öne çıkan çalışmalar",
    "firin.kicker": "Kurucu ve tek geliştirici · SaaS",
    "firin.sub": "Fırın ve pastane yönetim platformu",
    "firin.desc":
      "Fırınlarda kâğıt defterlerin ve elle yapılan hesapların yerini alan çok kiracılı (multi-tenant) bir SaaS. Sistem; müşteri bakiyelerini, bayat ürün oranlarını, kasa farklarını ve net maaşları otomatik olarak hesaplar.",
    "firin.b1":
      "<strong>11 modül</strong>: üretim, tezgâh satışları, dağıtım rotaları, bayi bakiyeleri, stok ve kasa sayımları, bordro ve PDF raporlama.",
    "firin.b2":
      "Şube raporları genel merkezde birleşen çok şubeli bir zincir dahil, her gün <strong>50'den fazla çalışan</strong> tarafından kullanılıyor.",
    "firin.b3":
      "Şirket sahibinden fırıncılara, satış personeline ve dağıtım şoförlerine kadar <strong>9 yetki seviyesi</strong> ile rol tabanlı erişim.",
    "firin.b4":
      "Flutter uygulamaları (iOS ve Android), web yönetici paneli, .NET Core / SQL Server backend — Linux üzerinde Docker ile, Caddy HTTPS reverse proxy arkasında çalışıyor.",
    "firin.b5": "Ürün sitesi ve mağaza sayfaları Türkçe, İngilizce ve Almanca olarak yerelleştirildi.",
    "firin.s1": "günlük çalışan",
    "firin.s2": "modül",
    "firin.s3": "yetki seviyesi",
    "firin.s4": "dil",
    "link.website": "Web sitesi",
    "link.dashboard": "Yönetim paneli",

    "card1.kicker": "IoT · Canlı ortam",
    "card1.desc":
      "Uçtan uca akıllı ev platformu: Flutter uygulaması, NestJS backend, ESP32 cihazlar, gerçek zamanlı WebSocket kontrolü, Google Home sesli kontrol entegrasyonu ve VPN ile izole edilmiş yönetim servisleri.",
    "card2.kicker": "Dağıtık sistemler · Araştırma",
    "card2.title": "Proxy'siz Yük Dengeleme",
    "card2.desc":
      "Gerçek zamanlı IoT sistemleri için istemci odaklı yük dengeleme — trafik dengeleyiciden geçmez, tek hata noktası yoktur. Google Cloud üzerinde k6, NGINX referansı, Docker Compose ve Python analiziyle tekrarlanabilir deney seti.",
    "card3.kicker": "Güvenlik · Makine Öğrenmesi",
    "card3.title": "Yapay Zekâ Destekli Saldırı Tespit Hattı",
    "card3.desc":
      "Kötü amaçlı trafiği gerçek zamanlı tespit etmek için cihazlarda HMAC-SHA256 mesaj imzalama, NestJS WebSocket interceptor ve FastAPI ile sunulan bir LightGBM modeli.",

    "research.eyebrow": "04 — Araştırma ve Liderlik",
    "research.title": "Makine öğrenmesiyle IoT güvenliği",
    "r1.type": "Liderlik",
    "r1.title": "Kaysiber Araştırma Grubu Takım Lideri",
    "r1.desc":
      "Kayseri Üniversitesi Siber Güvenlik ve Sistem Altyapısı Laboratuvarları; üniversitenin Siber Güvenlik Uygulama ve Araştırma Merkezi'ne bağlı.",
    "r2.type": "Yüksek Lisans Tezi · Devam ediyor",
    "r2.title": "IoT Ağları için Makine Öğrenmesi Tabanlı Gerçek Zamanlı Saldırı Tespiti",
    "r2.desc": "Danışman: Prof. Dr. Ali Gezer.",
    "r3.type": "Dergi makalesi · Gönderim aşamasında",
    "r3.desc": "Prof. Dr. Ali Gezer ile. Google Cloud üzerinde tekrarlanabilir deney seti.",
    "r4.type": "Konferans sunumu",
    "r4.desc":
      "TON_IoT üzerinde Optuna TPE + LightGBM: <strong>%53 daha az öznitelikle</strong> <strong>%99,87 doğruluk</strong>.",
    "r5.type": "Araştırma",
    "r5.title": "IoT Anomali Tespiti",
    "r5.desc": "IoT-23 veri seti üzerinde Autoencoder ve Isolation Forest modelleri.",

    "skills.eyebrow": "05 — Yetenekler",
    "skills.title": "Teknik yetkinlikler",
    "skills.langs": "Programlama dilleri",
    "skills.mobile": "Mobil",
    "skills.backend": "Backend",
    "skills.data": "Veri",
    "skills.infra": "Altyapı",
    "skills.security": "Güvenlik ve ML",
    "skills.iot": "IoT",

    "edu.eyebrow": "06 — Eğitim",
    "edu.title": "Eğitim ve sertifikalar",
    "edu1.title": "Siber Güvenlik Yüksek Lisans",
    "edu1.desc": "Kayseri Üniversitesi · Dersler tamamlandı, tez aşamasında",
    "edu2.title": "Bilgisayar Mühendisliği Lisans",
    "edu2.desc": "Erciyes Üniversitesi",

    "contact.eyebrow": "07 — İletişim",
    "contact.title": "Birlikte güvenilir bir şeyler inşa edelim.",
    "contact.desc":
      "Mobil, backend ve IoT güvenliği alanlarında yazılım mühendisliği pozisyonlarına, serbest projelere ve araştırma iş birliklerine açığım.",
    "contact.linkedin": "LinkedIn'de bağlantı kur",

    "footer.rights": "Tüm hakları saklıdır.",
    "footer.top": "Başa dön ↑",
  },

  ar: {
    "meta.title": "Sabir Halil — مهندس برمجيات",

    "nav.about": "نبذة عني",
    "nav.experience": "الخبرات",
    "nav.projects": "المشاريع",
    "nav.research": "الأبحاث",
    "nav.skills": "المهارات",
    "nav.contact": "تواصل",

    "hero.badge": "متاح لفرص جديدة",
    "hero.role":
      'مهندس برمجيات — <span class="gradient-text">تطبيقات الجوال، الأنظمة الخلفية وأمن إنترنت الأشياء</span>',
    "hero.lead":
      "أطوّر تطبيقات Flutter وأنظمة خلفية بـ NestJS و‎.NET منشورة على App Store وGoogle Play، إلى جانب البنية التحتية الآمنة والفورية التي تقف خلفها.",
    "hero.cta1": "شاهد أعمالي",
    "hero.cta2": "تواصل معي",
    "hero.location": "قيصري، تركيا",

    "stats.years": "سنوات من الإطلاق في بيئة الإنتاج",
    "stats.users": "مستخدم يومي لمنصة Fırın Paneli",
    "stats.langs": "لغات أتحدثها بمستوى مهني",
    "stats.ids": "دقة كشف التسلل في إنترنت الأشياء",

    "about.eyebrow": "01 — نبذة عني",
    "about.title": "مهندس، مؤسس وباحث في الأمن السيبراني",
    "about.p1":
      "أنا مهندس برمجيات بخبرة تزيد على عامين في إطلاق تطبيقات جوال بـ <strong>Flutter</strong> وأنظمة خلفية بـ <strong>NestJS وNode.js و‎.NET</strong> في بيئة الإنتاج. في <strong>Gökay Bilişim</strong> أتولى جميع الطبقات البرمجية لمنصة منزل ذكي قائمة على إنترنت الأشياء، بما في ذلك موازن أحمال يقوده العميل دون نقطة فشل واحدة، ووصول إداري عبر VPN فقط، والتحكم الفوري بالأجهزة عبر WebSocket.",
    "about.p2":
      "كما أنني مؤسس <strong>Fırın Paneli</strong>، منصة لإدارة المخابز يستخدمها يوميًا أكثر من 50 موظفًا، وطالب ماجستير في الأمن السيبراني أبحث في كشف التسلل لشبكات إنترنت الأشياء باستخدام تعلّم الآلة.",
    "about.p3":
      "أراجع الشيفرة بالطريقة نفسها التي أكتبها بها: الحالات الحدّية، وسيناريوهات الفشل، والثغرات الأمنية، وموازنات التصميم أولًا.",
    "about.c1.label": "حاليًا",
    "about.c1.text": "مهندس برمجيات في Gökay Bilişim",
    "about.c2.label": "التعليم",
    "about.c2.text": "ماجستير الأمن السيبراني · جامعة قيصري",
    "about.c2.sub": "بكالوريوس هندسة الحاسوب · جامعة أرجييس",
    "about.c3.label": "القيادة",
    "about.c3.text": "قائد فريق مجموعة Kaysiber البحثية",
    "about.c4.label": "اللغات",
    "about.c4.text": "التركية · الإنجليزية · العربية · الكردية",

    "exp.eyebrow": "02 — الخبرات",
    "exp.title": "أين عملت",
    "date.present": "2025 — حتى الآن",
    "date.outlier": "2025 · 4 أشهر",
    "date.sorosons": "أبريل 2024 — 2025",
    "date.pronic": "أغسطس — سبتمبر 2023",
    "date.otonom": "أكتوبر 2022 — أبريل 2023",
    "tag.current": "حاليًا",
    "tag.freelance": "عمل حر",
    "tag.internship": "تدريب",
    "tag.volunteer": "تطوعي",

    "job1.title": 'مهندس برمجيات <span class="at">@ Gökay Bilişim</span>',
    "job1.summary":
      "بنيت جميع الطبقات البرمجية لمنصة Gökay Smart Home لإنترنت الأشياء: تطبيق Flutter ‏(iOS وAndroid)، والنظام الخلفي بـ NestJS، وقاعدة بيانات MySQL، والاتصال بأجهزة ESP32.",
    "job1.b1":
      "صممت <strong>موازن أحمال يقوده العميل</strong>: يسأل العملاء عن العقدة التي يجب استخدامها ثم يتصلون بها مباشرة. لا تمر أي حركة عبر الموازن، مما يلغي نقطة الفشل الواحدة واختناق الوكيل. وقِيس أداؤه مقارنةً بـ NGINX باستخدام k6.",
    "job1.b2":
      "نفّذت <strong>التحكم الفوري بالأجهزة عبر WebSocket</strong> بين تطبيقات الجوال وعقد الخادم والأجهزة.",
    "job1.b3":
      "نقلت لوحة الإدارة وخدمات الإدارة <strong>خلف شبكة VPN داخلية</strong> بعيدًا عن الإنترنت العام.",
    "job1.b4":
      "نقلت النظام الخلفي من Node.js إلى <strong>NestJS</strong> ودمجت التحكم الصوتي عبر <strong>Google Home / Assistant</strong>.",
    "job1.b5":
      "صممت <strong>منظومة لكشف التسلل قائمة على الذكاء الاصطناعي</strong>: توقيع الرسائل بـ HMAC-SHA256 على الأجهزة، ومعترض WebSocket في NestJS، ونموذج LightGBM يُخدَّم عبر FastAPI.",
    "job1.b6":
      "بدأت متدربًا (يناير – فبراير 2025): أنشأت خوادم افتراضية باستخدام VMware ESXi / vSphere / vCenter، وكتبت قواعد الجدار الناري، وعزلت الأجهزة الافتراضية، وأعددت النسخ الاحتياطي.",

    "job2.title": 'مقيّم نماذج ذكاء اصطناعي <span class="at">@ Outlier</span>',
    "job2.b1":
      "قيّمت مخرجات نماذج الذكاء الاصطناعي من حيث الصحة وجودة الاستدلال والالتزام بالتعليمات، إلى جانب عملي الهندسي بدوام كامل.",
    "job2.b2":
      "راجعت الإجابات والشيفرات التي تولّدها النماذج وفق متطلبات المهام، ورصدت الأخطاء وضعف الاستدلال والحالات الحدّية.",

    "job3.title": 'مهندس برمجيات <span class="at">@ Sorosons Software</span>',
    "job3.b1":
      "طوّرت وأطلقت عدة تطبيقات للمستهلكين والمؤسسات على App Store وGoogle Play، منها أنظمة لإدارة البيع بالجملة وأدوات أتمتة طبية وتطبيقات ترفيهية.",
    "job3.b2":
      "الجوال بـ Flutter وKotlin؛ والأنظمة الخلفية بـ Node.js و‎.NET Core وDjango؛ والبيانات في MS SQL وMySQL وMongoDB.",
    "job3.b3":
      "دمجت مصادقة Firebase والإشعارات الفورية، واشتراكات RevenueCat، وGoogle Cloud، وواجهات برمجية من أطراف خارجية.",

    "job4.title": 'متدرب برمجيات <span class="at">@ Pronic Yazılım</span>',
    "job4.summary":
      "بنيت نظامًا جامعيًا للطلاب (الوثائق، الإعلانات، اختيار المقررات، خريطة الحرم) باستخدام ‎.NET Core وJWT وSQL Server، مع تطبيق Android بلغة Kotlin باستخدام MVVM وDagger Hilt وRetrofit.",

    "job5.title": 'مطوّر تطبيقات جوال <span class="at">@ Erciyes Otonom</span>',
    "job5.summary":
      "طوّرت تطبيق قياس عن بُعد فوري لمركبة كهربائية ذاتية القيادة (البطارية، الحرارة، الموقع) باستخدام Kotlin وFirebase Realtime Database، وعرضت المشروع في معارض ومؤتمرات.",

    "proj.eyebrow": "03 — المشاريع",
    "proj.title": "أبرز الأعمال",
    "firin.kicker": "المؤسس والمطوّر الوحيد · SaaS",
    "firin.sub": "منصة لإدارة المخابز ومحلات الحلويات",
    "firin.desc":
      "منصة SaaS متعددة المستأجرين حلّت محل الدفاتر الورقية والحسابات اليدوية في المخابز. يحسب النظام تلقائيًا أرصدة العملاء ونسب المنتجات البائتة وفروقات الصندوق وصافي الرواتب.",
    "firin.b1":
      "<strong>11 وحدة</strong>: الإنتاج، ومبيعات الكاونتر، ومسارات التوصيل، وأرصدة عملاء التجزئة، وجرد المخزون والصندوق، والرواتب، وتقارير PDF.",
    "firin.b2":
      "يستخدمه يوميًا <strong>أكثر من 50 موظفًا</strong>، من بينهم سلسلة متعددة الفروع تُجمَّع تقارير فروعها في المقر الرئيسي.",
    "firin.b3":
      "تحكم بالوصول قائم على الأدوار بـ <strong>9 مستويات صلاحية</strong>، من مالك الشركة إلى الخبازين وموظفي المبيعات وسائقي التوصيل.",
    "firin.b4":
      "تطبيقات Flutter ‏(iOS وAndroid)، ولوحة تحكم ويب للمدير، ونظام خلفي بـ ‎.NET Core / SQL Server، منشور بـ Docker على خادم Linux خلف وكيل عكسي Caddy عبر HTTPS.",
    "firin.b5": "موقع المنتج وصفحات المتاجر مترجمة إلى التركية والإنجليزية والألمانية.",
    "firin.s1": "موظف يوميًا",
    "firin.s2": "وحدة",
    "firin.s3": "مستوى صلاحية",
    "firin.s4": "لغات",
    "link.website": "الموقع",
    "link.dashboard": "لوحة التحكم",

    "card1.kicker": "إنترنت الأشياء · قيد الإنتاج",
    "card1.desc":
      "منصة منزل ذكي متكاملة: تطبيق Flutter، ونظام خلفي بـ NestJS، وأجهزة ESP32، وتحكم فوري عبر WebSocket، وتكامل صوتي مع Google Home، وخدمات إدارة معزولة عبر VPN.",
    "card2.kicker": "الأنظمة الموزعة · بحث",
    "card2.title": "موازنة الأحمال دون وكيل",
    "card2.desc":
      "موازنة أحمال يقودها العميل لأنظمة إنترنت الأشياء الفورية: لا تمر الحركة عبر الموازن ولا توجد نقطة فشل واحدة. حزمة تجارب قابلة لإعادة الإنتاج على Google Cloud باستخدام k6 ومرجع NGINX وDocker Compose وتحليل بـ Python.",
    "card3.kicker": "الأمن · تعلّم الآلة",
    "card3.title": "منظومة كشف التسلل بالذكاء الاصطناعي",
    "card3.desc":
      "توقيع الرسائل بـ HMAC-SHA256 على الأجهزة، ومعترض WebSocket في NestJS، ونموذج LightGBM يُخدَّم عبر FastAPI لكشف الحركة الخبيثة لحظيًا.",

    "research.eyebrow": "04 — الأبحاث والقيادة",
    "research.title": "تأمين إنترنت الأشياء بتعلّم الآلة",
    "r1.type": "القيادة",
    "r1.title": "قائد فريق مجموعة Kaysiber البحثية",
    "r1.desc":
      "مختبرات الأمن السيبراني والبنية التحتية للأنظمة في جامعة قيصري، التابعة لمركز تطبيقات وأبحاث الأمن السيبراني في الجامعة.",
    "r2.type": "رسالة ماجستير · قيد الإنجاز",
    "r2.title": "كشف التسلل الفوري لشبكات إنترنت الأشياء باستخدام تعلّم الآلة",
    "r2.desc": "المشرف: أ.د. Ali Gezer.",
    "r3.type": "مقال علمي · قيد التقديم",
    "r3.desc": "بالاشتراك مع أ.د. Ali Gezer. حزمة تجارب قابلة لإعادة الإنتاج على Google Cloud.",
    "r4.type": "عرض في مؤتمر",
    "r4.desc":
      "Optuna TPE + LightGBM على TON_IoT: <strong>دقة 99.87%</strong> مع <strong>خصائص أقل بنسبة 53%</strong>.",
    "r5.type": "بحث",
    "r5.title": "كشف الشذوذ في إنترنت الأشياء",
    "r5.desc": "نماذج Autoencoder وIsolation Forest على مجموعة بيانات IoT-23.",

    "skills.eyebrow": "05 — المهارات",
    "skills.title": "الأدوات التقنية",
    "skills.langs": "لغات البرمجة",
    "skills.mobile": "الجوال",
    "skills.backend": "الأنظمة الخلفية",
    "skills.data": "البيانات",
    "skills.infra": "البنية التحتية",
    "skills.security": "الأمن وتعلّم الآلة",
    "skills.iot": "إنترنت الأشياء",

    "edu.eyebrow": "06 — التعليم",
    "edu.title": "التعليم والشهادات",
    "edu1.title": "ماجستير الأمن السيبراني",
    "edu1.desc": "جامعة قيصري · أُنجزت المقررات، مرحلة الرسالة",
    "edu2.title": "بكالوريوس هندسة الحاسوب",
    "edu2.desc": "جامعة أرجييس",

    "contact.eyebrow": "07 — تواصل",
    "contact.title": "لنبنِ معًا شيئًا موثوقًا.",
    "contact.desc":
      "منفتح على وظائف هندسة البرمجيات والمشاريع الحرة والتعاون البحثي في مجالات الجوال والأنظمة الخلفية وأمن إنترنت الأشياء.",
    "contact.linkedin": "تواصل عبر LinkedIn",

    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.top": "العودة للأعلى ↑",
  },
};
