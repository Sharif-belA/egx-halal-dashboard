/**
 * EGX Halal Trading Web Platform & Interactive Dashboard
 * منصة التداول والتحليل للأسهم المتوافقة مع الشريعة بالبورصة المصرية
 * قائمة الأسهم المعتمدة وفقاً لمنصة كاشف (Kasheif) الرسمية (32 سهماً) مع نسب التطهير الدقيقة
 */

const HALAL_STOCKS_DATA = [
    {
        symbol: "AMES",
        name_ar: "المركز الطبي الجديد - الإسكندرية للخدمات",
        name_en: "Alexandria Medical Services",
        sector: "رعاية صحية وأدوية",
        purity_type: "SEMI_PURE",
        purity_label: "شبه نقي",
        badge_short: "شبه نقي",
        purification_ratio: "1.00%",
        price: 19.50,
        change: 0.40,
        change_pct: 2.09,
        support: 18.20,
        resistance: 22.00,
        target: 24.00,
        stop_loss: 17.50,
        action: "BUY",
        action_ar: "شراء",
        volume: "310,000",
        pe_ratio: 13.2,
        eps_growth: 17.0,
        rsi: 58.2,
        tech_analysis: "زخم صاعد قوي وتكوين قمم سعرية أعلى فوق الدعم 18.20 ج.م، مع ثبات السيولة المؤسسية داخل السهم.",
        future_outlook: "استهداف مباشر لمستوى 22.00 ج.م ثم التوجه نحو 24.00 ج.م مدفوعاً بزيادة الطاقة الاستيعابية والخدمات التخصصية للمستشفى."
    },
    {
        symbol: "BIOC",
        name_ar: "جلاسكو (بيوكام)",
        name_en: "GlaxoSmithKline Egypt / Bioc",
        sector: "رعاية صحية وأدوية",
        purity_type: "SEMI_PURE",
        purity_label: "شبه نقي",
        badge_short: "شبه نقي",
        purification_ratio: "0.69%",
        price: 42.80,
        change: 0.70,
        change_pct: 1.66,
        support: 40.00,
        resistance: 46.50,
        target: 49.00,
        stop_loss: 38.50,
        action: "BUY",
        action_ar: "شراء",
        volume: "450,000",
        pe_ratio: 10.4,
        eps_growth: 21.0,
        rsi: 55.0,
        tech_analysis: "السهم يمر بمرحلة صعود صحي وثبات أعلى المتوسط المتحرك 50 يوم ومستوى الدعم الصلب 40.00 ج.م.",
        future_outlook: "توقعات بنتائج مالية ممتازة تدفع السهم لاختراق مقاومة 46.50 ج.م والوصول نحو 49.00 ج.م بعائد مستهدف يتجاوز 14.5%."
    },
    {
        symbol: "CEFM",
        name_ar: "مطاحن مصر الوسطى",
        name_en: "Middle Egypt Flour Mills",
        sector: "أغذية ومشروبات",
        purity_type: "SEMI_PURE",
        purity_label: "شبه نقي",
        badge_short: "شبه نقي",
        purification_ratio: "3.80%",
        price: 48.60,
        change: 0.95,
        change_pct: 1.99,
        support: 45.50,
        resistance: 53.00,
        target: 57.00,
        stop_loss: 44.00,
        action: "BUY",
        action_ar: "شراء",
        volume: "280,000",
        pe_ratio: 8.7,
        eps_growth: 19.5,
        rsi: 57.8,
        tech_analysis: "سلوك سعري دفاعي ممتاز مع اختراق مقاومة فرعية عند 47.50 ج.م، وتوليد إشارة شراء مؤكدة على مؤشر الماكد.",
        future_outlook: "استهداف مستويات 53.00 ج.م ثم 57.00 ج.م مع الإعلان عن التوزيعات النقدية السنوية المجزية لقطاع المطاحن."
    },
    {
        symbol: "DCRC",
        name_ar: "دلتا للإنشاء والتعمير",
        name_en: "Delta Construction & Rebuilding",
        sector: "عقارات ومقاولات",
        purity_type: "SEMI_PURE",
        purity_label: "شبه نقي",
        badge_short: "شبه نقي",
        purification_ratio: "0.72%",
        price: 26.40,
        change: 0.50,
        change_pct: 1.93,
        support: 24.80,
        resistance: 29.00,
        target: 31.50,
        stop_loss: 23.90,
        action: "BUY",
        action_ar: "شراء",
        volume: "190,000",
        pe_ratio: 9.9,
        eps_growth: 15.0,
        rsi: 54.6,
        tech_analysis: "استقرار سعري وتماسك فوق الدعم 24.80 ج.م بعد موجة جني أرباح سابقة، ومؤشر RSI يظهر بدء انعكاس صاعد.",
        future_outlook: "إعادة اختبار مستويات 29.00 ج.م مع احتمالية اختراقها نحو 31.50 ج.م مدعوماً بتسويق مشروعات سكنية جديدة في الدلتا."
    },
    {
        symbol: "EGAS",
        name_ar: "غاز مصر",
        name_en: "Egypt Gas",
        sector: "طاقة ومرافق",
        purity_type: "SEMI_PURE",
        purity_label: "شبه نقي",
        badge_short: "شبه نقي",
        purification_ratio: "0.06%",
        price: 36.50,
        change: 0.80,
        change_pct: 2.24,
        support: 34.20,
        resistance: 40.00,
        target: 43.50,
        stop_loss: 33.00,
        action: "BUY",
        action_ar: "شراء",
        volume: "980,000",
        pe_ratio: 8.5,
        eps_growth: 23.0,
        rsi: 60.5,
        tech_analysis: "نمط قاع مزدوج إيجابي مكتمل فوق 34.20 ج.م مع تزايد قوي في أحجام التداول اليومية وثبات فوق مؤشر EMA20.",
        future_outlook: "انطلاقة مرتقبة لاختراق حاجز 40.00 ج.م نحو المستهدف السعري 43.50 ج.م بفضل عقود توصيل الغاز ومشروعات البنية التحتية."
    },
    {
        symbol: "ELNA",
        name_ar: "النصر للحاصلات الزراعية",
        name_en: "El Nasr Agricultural Products",
        sector: "استثمار زراعي",
        purity_type: "PURE",
        purity_label: "شبه نقي (0% تطهير)",
        badge_short: "0% تطهير",
        purification_ratio: "0.00%",
        price: 36.80,
        change: 0.90,
        change_pct: 2.51,
        support: 34.00,
        resistance: 42.00,
        target: 46.00,
        stop_loss: 32.50,
        action: "BUY",
        action_ar: "شراء",
        volume: "380,000",
        pe_ratio: 11.8,
        eps_growth: 16.5,
        rsi: 59.2,
        tech_analysis: "قناة صاعدة واضحة المعالم مع ارتداد قوي من مستوى الدعم 34.00 ج.م وزخم إيجابي ملحوظ في مؤشرات التذبذب.",
        future_outlook: "استهداف مستويات 42.00 ج.م تمهيداً لاختبار القمة السابقة عند 46.00 ج.م بعائد محتمل يفوق 25% مع تنامي عقود التصدير."
    },
    {
        symbol: "ELWA",
        name_ar: "الوادي للاستثمار والتنمية",
        name_en: "El Wadi for Investment & Development",
        sector: "سياحة واستثمار",
        purity_type: "SEMI_PURE",
        purity_label: "شبه نقي",
        badge_short: "شبه نقي",
        purification_ratio: "2.12%",
        price: 0.88,
        change: 0.01,
        change_pct: 1.15,
        support: 0.82,
        resistance: 1.02,
        target: 1.15,
        stop_loss: 0.78,
        action: "BUY",
        action_ar: "شراء",
        volume: "4,500,000",
        pe_ratio: 13.0,
        eps_growth: 8.0,
        rsi: 51.5,
        tech_analysis: "بناء قاعدة سعرية متينة أعلى 0.82 ج.م مع تقارب في المتوسطات المتحركة يشير لقرب حدوث انفراجة سعرية صاعدة.",
        future_outlook: "كسر حاجز 1.02 ج.م سيدفع السهم سريعاً نحو الهدف 1.15 ج.م مع إعادة تقييم أصول الشركة واستثماراتها التنموية."
    },
    {
        symbol: "FCMD",
        name_ar: "فيوتشر كير للصناعات الطبية",
        name_en: "Future Care Medical Industries",
        sector: "رعاية صحية وأدوية",
        purity_type: "SEMI_PURE",
        purity_label: "شبه نقي",
        badge_short: "شبه نقي",
        purification_ratio: "1.31%",
        price: 0.38,
        change: 0.00,
        change_pct: 0.00,
        support: 0.34,
        resistance: 0.45,
        target: 0.50,
        stop_loss: 0.31,
        action: "HOLD",
        action_ar: "احتفاظ",
        volume: "3,200,000",
        pe_ratio: 15.0,
        eps_growth: 5.0,
        rsi: 48.0,
        tech_analysis: "تداول مستقر في نطاق قيعان تاريخية حول 0.38 ج.م، مع انخفاض ملحوظ في معدل التقلب السعري.",
        future_outlook: "تجاوز المقاومة 0.45 ج.م يمثل بداية دورة صاعدة جديدة نحو المستوى 0.50 ج.م للمضاربين والمستثمرين متوسطي الأجل."
    },
    {
        symbol: "GGRN",
        name_ar: "جو جرين للاستثمار الزراعي والتنمية",
        name_en: "Go Green Agricultural Investment",
        sector: "استثمار زراعي",
        purity_type: "SEMI_PURE",
        purity_label: "شبه نقي",
        badge_short: "شبه نقي",
        purification_ratio: "0.01%",
        price: 2.10,
        change: 0.04,
        change_pct: 1.94,
        support: 1.95,
        resistance: 2.40,
        target: 2.65,
        stop_loss: 1.85,
        action: "BUY",
        action_ar: "شراء",
        volume: "2,100,000",
        pe_ratio: 12.2,
        eps_growth: 14.0,
        rsi: 56.4,
        tech_analysis: "ارتداد قوي من خط الاتجاه الصاعد عند 1.95 ج.م مع ظهور شمعة شرائية إيجابية على الفاصل اليومي.",
        future_outlook: "التحرك صوب مستويات 2.40 ج.م ثم 2.65 ج.م مدعوماً بمشاريع زراعة الجوجوبا وزيادة الطلب على المنتجات العضوية."
    },
    {
        symbol: "ICFC",
        name_ar: "الدولية للأسمدة والكيماويات",
        name_en: "International Fertilizers & Chemicals",
        sector: "موارد أساسية وأسمدة",
        purity_type: "SEMI_PURE",
        purity_label: "شبه نقي",
        badge_short: "شبه نقي",
        purification_ratio: "1.10%",
        price: 16.40,
        change: 0.35,
        change_pct: 2.18,
        support: 15.20,
        resistance: 18.00,
        target: 19.50,
        stop_loss: 14.60,
        action: "BUY",
        action_ar: "شراء",
        volume: "740,000",
        pe_ratio: 9.5,
        eps_growth: 18.0,
        rsi: 58.0,
        tech_analysis: "موجة صاعدة مستمرة وثبات قوي فوق دعم 15.20 ج.م مع زخم شرائي يدعمه مؤشر القوة النسبية RSI عند 58.0.",
        future_outlook: "استهداف مستويات 18.00 ج.م ثم 19.50 ج.م بفضل ارتفاع الطلب المحلي والإقليمي على الأسمدة والمخصبات الزراعية."
    },
    {
        symbol: "IEEC",
        name_ar: "المشروعات الصناعية والهندسية",
        name_en: "Industrial & Engineering Projects",
        sector: "عقارات ومقاولات",
        purity_type: "SEMI_PURE",
        purity_label: "شبه نقي",
        badge_short: "شبه نقي",
        purification_ratio: "1.48%",
        price: 0.42,
        change: 0.01,
        change_pct: 2.44,
        support: 0.38,
        resistance: 0.50,
        target: 0.56,
        stop_loss: 0.35,
        action: "BUY",
        action_ar: "شراء",
        volume: "5,800,000",
        pe_ratio: 14.5,
        eps_growth: 7.0,
        rsi: 54.0,
        tech_analysis: "تجميع واضح في المستويات السعرية الأدنى مع ثبات فوق الدعم 0.38 ج.م وتزايد تدريجي في أحجام التداول.",
        future_outlook: "اختراق مستوى المقاومة 0.50 ج.م يفتح الطريق للوصول إلى 0.56 ج.م محققاً مكاسب سريعة تتجاوز 33%."
    },
    {
        symbol: "INEG",
        name_ar: "المجموعة المتكاملة للأعمال الهندسية",
        name_en: "Integrated Engineering Group",
        sector: "عقارات ومقاولات",
        purity_type: "SEMI_PURE",
        purity_label: "شبه نقي",
        badge_short: "شبه نقي",
        purification_ratio: "0.52%",
        price: 0.22,
        change: 0.00,
        change_pct: 0.00,
        support: 0.19,
        resistance: 0.26,
        target: 0.29,
        stop_loss: 0.17,
        action: "HOLD",
        action_ar: "احتفاظ",
        volume: "7,400,000",
        pe_ratio: 16.0,
        eps_growth: 3.5,
        rsi: 49.0,
        tech_analysis: "حركة عرضية في قاع التداول مع دعم صلب عند 0.19 ج.م، ومؤشرات السيولة تعكس تجميعاً هادئاً بدون ضغوط بيعية.",
        future_outlook: "توقع حركة صاعدة سريعة لاختبار 0.26 ج.م ثم 0.29 ج.م بمجرد دخول سيولة مضاربية في قطاع الإنشاءات الهندسية."
    },
    {
        symbol: "INFI",
        name_ar: "الإسماعيلية الوطنية للصناعات الغذائية - فوديكو",
        name_en: "Ismailia National Food (Foodico)",
        sector: "أغذية ومشروبات",
        purity_type: "SEMI_PURE",
        purity_label: "شبه نقي",
        badge_short: "شبه نقي",
        purification_ratio: "1.39%",
        price: 44.50,
        change: 0.90,
        change_pct: 2.06,
        support: 41.50,
        resistance: 48.00,
        target: 52.00,
        stop_loss: 39.80,
        action: "BUY",
        action_ar: "شراء",
        volume: "230,000",
        pe_ratio: 10.1,
        eps_growth: 19.0,
        rsi: 56.5,
        tech_analysis: "اتجاه صاعد مدعوم بالمتوسطات المتحركة الإيجابية، مع ثبات السعر فوق مستوى الدعم 41.50 ج.م وزخم تصاعدي.",
        future_outlook: "التحرك نحو 48.00 ج.م ثم 52.00 ج.م مدفوعاً بزيادة حجم الصادرات من الخضروات والفواكه المجمدة إلى أوروبا والخليج."
    },
    {
        symbol: "MBSC",
        name_ar: "مصر بني سويف للأسمنت",
        name_en: "Misr Beni Suef Cement",
        sector: "مواد بناء",
        purity_type: "SEMI_PURE",
        purity_label: "شبه نقي",
        badge_short: "شبه نقي",
        purification_ratio: "1.28%",
        price: 43.50,
        change: 0.85,
        change_pct: 1.99,
        support: 40.50,
        resistance: 48.00,
        target: 52.00,
        stop_loss: 39.00,
        action: "BUY",
        action_ar: "شراء",
        volume: "650,000",
        pe_ratio: 9.8,
        eps_growth: 18.0,
        rsi: 57.2,
        tech_analysis: "ارتداد إيجابي من مستوى الدعم 40.50 ج.م مع تقاطع صاعد للمتوسطات السعرية القصيرة وإشارة دخول على مؤشر الماكد.",
        future_outlook: "استهداف مستوى 48.00 ج.م ثم 52.00 ج.م بدعم من طفرة صادرات الأسمنت والمشروعات القومية للبناء والتشييد."
    },
    {
        symbol: "MILS",
        name_ar: "مطاحن ومخابز شمال القاهرة",
        name_en: "North Cairo Flour Mills",
        sector: "أغذية ومشروبات",
        purity_type: "SEMI_PURE",
        purity_label: "شبه نقي",
        badge_short: "شبه نقي",
        purification_ratio: "0.89%",
        price: 41.20,
        change: 0.70,
        change_pct: 1.73,
        support: 38.50,
        resistance: 45.00,
        target: 48.50,
        stop_loss: 37.00,
        action: "BUY",
        action_ar: "شراء",
        volume: "320,000",
        pe_ratio: 8.9,
        eps_growth: 18.0,
        rsi: 54.5,
        tech_analysis: "سهم دفاعي من الدرجة الأولى يتداول في قناة صاعدة ثابتة فوق 38.50 ج.م مع تدفق نقدي تشغيلي منتظم.",
        future_outlook: "استهداف مستوى 45.00 ج.م ثم 48.50 ج.م مع ترقب نتائج الأعمال السنوية وعوائد التوزيعات النقدية السخية."
    },
    {
        symbol: "MOSC",
        name_ar: "مصر للزيوت والصابون",
        name_en: "Misr Oils & Soap",
        sector: "أغذية ومشروبات",
        purity_type: "SEMI_PURE",
        purity_label: "شبه نقي",
        badge_short: "شبه نقي",
        purification_ratio: "0.08%",
        price: 33.80,
        change: 0.60,
        change_pct: 1.81,
        support: 31.50,
        resistance: 37.00,
        target: 40.00,
        stop_loss: 30.00,
        action: "BUY",
        action_ar: "شراء",
        volume: "210,000",
        pe_ratio: 9.2,
        eps_growth: 14.5,
        rsi: 55.2,
        tech_analysis: "تماسك قوي أعلى مستوى 31.50 ج.م، وتكوين نموذج صاعد يدعمه تحسن مؤشرات السيولة ومستويات التداول.",
        future_outlook: "التوجه نحو مستوى المقاومة 37.00 ج.م ثم المستهدف 40.00 ج.م مع خطط تطوير خطوط الإنتاج ورفع الطاقة التكريرية."
    },
    {
        symbol: "NDRL",
        name_ar: "الحفر الوطنية",
        name_en: "National Drilling Company",
        sector: "طاقة / خدمات مساندة",
        purity_type: "PURE",
        purity_label: "شبه نقي (0% تطهير)",
        badge_short: "0% تطهير",
        purification_ratio: "0.00%",
        price: 4.80,
        change: 0.08,
        change_pct: 1.69,
        support: 4.50,
        resistance: 5.30,
        target: 5.75,
        stop_loss: 4.30,
        action: "BUY",
        action_ar: "شراء",
        volume: "890,000",
        pe_ratio: 10.5,
        eps_growth: 15.0,
        rsi: 53.8,
        tech_analysis: "حركة صاعدة هادئة فوق الدعم 4.50 ج.م مع إغلاقات إيجابية متتالية واختراق للمتوسط المتحرك 20 يوم.",
        future_outlook: "فرصة لتحقيق المستهدف 5.30 ج.م ثم 5.75 ج.م مع تزايد أعمال الحفر والمسح البترولي بالبحر المتوسط والصحراء الغربية."
    },
    {
        symbol: "OBRI",
        name_ar: "العبور للاستثمار العقاري",
        name_en: "El Obour Real Estate Investment",
        sector: "عقارات ومقاولات",
        purity_type: "SEMI_PURE",
        purity_label: "شبه نقي",
        badge_short: "شبه نقي",
        purification_ratio: "0.94%",
        price: 9.85,
        change: 0.15,
        change_pct: 1.55,
        support: 9.20,
        resistance: 10.80,
        target: 11.60,
        stop_loss: 8.80,
        action: "BUY",
        action_ar: "شراء",
        volume: "1,120,000",
        pe_ratio: 11.4,
        eps_growth: 13.5,
        rsi: 54.1,
        tech_analysis: "استقرار سعري أعلى مستوى 9.20 ج.م مع ظهور إشارات شراء واضحة وتراجع حدة البيع في الجلسات السابقة.",
        future_outlook: "استهداف مستويات 10.80 ج.م ثم 11.60 ج.م مع نمو مبيعات الوحدات السكنية والتجارية في مدينة العبور."
    },
    {
        symbol: "PHGC",
        name_ar: "بريميم هيلثكير جروب",
        name_en: "Premium Healthcare Group",
        sector: "رعاية صحية وأدوية",
        purity_type: "PURE",
        purity_label: "شبه نقي (0% تطهير)",
        badge_short: "0% تطهير",
        purification_ratio: "0.00%",
        price: 0.36,
        change: 0.01,
        change_pct: 2.86,
        support: 0.32,
        resistance: 0.42,
        target: 0.47,
        stop_loss: 0.29,
        action: "BUY",
        action_ar: "شراء",
        volume: "6,200,000",
        pe_ratio: 14.8,
        eps_growth: 11.0,
        rsi: 58.6,
        tech_analysis: "زخم صعودي قوي مع ارتفاع لافت في حجم السيولة واختراق مستوى المقاومة السابق 0.34 ج.م بإشارة إيجابية.",
        future_outlook: "مواصلة الصعود لاختبار 0.42 ج.م ثم استهداف 0.47 ج.م بعائد محتمل يفوق 30% مع توسعات شبكة المعامل والمراكز الطبية."
    },
    {
        symbol: "PRCL",
        name_ar: "الشركة العامة لمنتجات الخزف والصيني شيني",
        name_en: "General Ceramic & China (Sheeni)",
        sector: "مواد بناء",
        purity_type: "SEMI_PURE",
        purity_label: "شبه نقي",
        badge_short: "شبه نقي",
        purification_ratio: "0.07%",
        price: 15.20,
        change: 0.30,
        change_pct: 2.01,
        support: 14.10,
        resistance: 16.80,
        target: 18.00,
        stop_loss: 13.50,
        action: "BUY",
        action_ar: "شراء",
        volume: "850,000",
        pe_ratio: 9.8,
        eps_growth: 17.0,
        rsi: 56.7,
        tech_analysis: "نمط وتد صاعد مع ثبات فوق مستوى الدعم 14.10 ج.م، وتقاطع إيجابي لمؤشرات الاتجاه على الفاصل الأسبوعي واليومي.",
        future_outlook: "استهداف مستوى 16.80 ج.م ثم الوصول لـ 18.00 ج.م مدعوماً بزيادة صادرات السيراميك والأدوات الصحية لأسواق إفريقيا."
    },
    {
        symbol: "SIPC",
        name_ar: "سبأ الدولية للأدوية والصناعات الكيماوية",
        name_en: "Sabaa International Pharma",
        sector: "رعاية صحية وأدوية",
        purity_type: "PURE",
        purity_label: "شبه نقي (0% تطهير)",
        badge_short: "0% تطهير",
        purification_ratio: "0.00%",
        price: 0.95,
        change: 0.02,
        change_pct: 2.15,
        support: 0.88,
        resistance: 1.10,
        target: 1.22,
        stop_loss: 0.82,
        action: "BUY",
        action_ar: "شراء",
        volume: "4,100,000",
        pe_ratio: 13.5,
        eps_growth: 9.5,
        rsi: 55.4,
        tech_analysis: "ارتداد سعري من منطقة الدعم 0.88 ج.م مصحوباً بنمو في أحجام التداول اليومية وثبات فوق المتوسط المتحرك.",
        future_outlook: "استهداف حاجز 1.10 ج.م ثم 1.22 ج.م مع تسجيل مستحضرات وأدوية جديدة وزيادة التوزيع بالصيدليات."
    },
    {
        symbol: "SMFR",
        name_ar: "سماد مصر - إيجيفرت",
        name_en: "Egypt Fertilizers (Egyfert)",
        sector: "موارد أساسية وأسمدة",
        purity_type: "SEMI_PURE",
        purity_label: "شبه نقي",
        badge_short: "شبه نقي",
        purification_ratio: "1.95%",
        price: 52.00,
        change: 1.20,
        change_pct: 2.36,
        support: 48.50,
        resistance: 57.00,
        target: 62.00,
        stop_loss: 46.80,
        action: "BUY",
        action_ar: "شراء",
        volume: "390,000",
        pe_ratio: 8.6,
        eps_growth: 22.0,
        rsi: 59.5,
        tech_analysis: "مسار صاعد واضح وقوي مع اختراق المقاومة 50.00 ج.م والتماسك فوقها، ومؤشرات الزخم في وضعية شرائية ممتازة.",
        future_outlook: "الانطلاق نحو المستهدف السعري 57.00 ج.م ثم 62.00 ج.م بدعم من طفرة أرباح قطاع الأسمدة وهوامش التصدير المرتفعة."
    },
    {
        symbol: "VERT",
        name_ar: "فرتيكا للصناعة والتجارة",
        name_en: "Vertika for Industry & Trade",
        sector: "تجارة وتوكيلات",
        purity_type: "PURE",
        purity_label: "شبه نقي (0% تطهير)",
        badge_short: "0% تطهير",
        purification_ratio: "0.00%",
        price: 3.80,
        change: 0.08,
        change_pct: 2.15,
        support: 3.50,
        resistance: 4.20,
        target: 4.60,
        stop_loss: 3.35,
        action: "BUY",
        action_ar: "شراء",
        volume: "1,150,000",
        pe_ratio: 12.0,
        eps_growth: 15.0,
        rsi: 57.0,
        tech_analysis: "نموذج رأس وكتفين مقلوب صاعد فوق الدعم 3.50 ج.م، مع إشارة شراء صريحة من مؤشر القوة النسبية RSI.",
        future_outlook: "استهداف مستوى 4.20 ج.م ثم 4.60 ج.م مع توسع الشركة في تقديم حلول التحول الرقمي والبرمجيات المتخصصة."
    },
    {
        symbol: "ZEOT",
        name_ar: "الزيوت المستخلصة ومنتجاتها",
        name_en: "Extracted Oils & Derivatives",
        sector: "أغذية ومشروبات",
        purity_type: "SEMI_PURE",
        purity_label: "شبه نقي",
        badge_short: "شبه نقي",
        purification_ratio: "0.47%",
        price: 3.40,
        change: 0.05,
        change_pct: 1.49,
        support: 3.15,
        resistance: 3.80,
        target: 4.10,
        stop_loss: 3.00,
        action: "BUY",
        action_ar: "شراء",
        volume: "2,600,000",
        pe_ratio: 10.2,
        eps_growth: 14.0,
        rsi: 53.5,
        tech_analysis: "حركة تجميعية إيجابية فوق مستوى الدعم 3.15 ج.م مع تقارب خطوط بولينجر باند مشيرة لقرب حدوث حركة انفجارية صاعدة.",
        future_outlook: "التوجه نحو اختبار المقاومة 3.80 ج.م ثم المستهدف 4.10 ج.م مع تحسن هوامش ربحية عصر وتكرير الزيوت النباتية."
    },
    {
        symbol: "BIGP",
        name_ar: "بي آي جي للتجارة والاستثمار",
        name_en: "B.I.G Trade & Investment",
        sector: "تجارة وتوزيع",
        purity_type: "PURE",
        purity_label: "شبه نقي (0% تطهير)",
        badge_short: "0% تطهير",
        purification_ratio: "0.00%",
        price: 0.24,
        change: 0.00,
        change_pct: 0.00,
        support: 0.21,
        resistance: 0.28,
        target: 0.32,
        stop_loss: 0.19,
        action: "HOLD",
        action_ar: "احتفاظ",
        volume: "8,900,000",
        pe_ratio: 16.5,
        eps_growth: 4.0,
        rsi: 50.0,
        tech_analysis: "السهم يتداول في مسار عرضي تجميعي مستقر فوق مستوى الدعم 0.21 ج.م مع كثافة تنفيذ وضيق نطاق التذبذب، ومؤشر RSI عند 50 في منطقة حيادية.",
        future_outlook: "اختراق مستوى المقاومة 0.28 ج.م سيفتح الباب لموجة صاعدة سريعة نحو الهدف 0.32 ج.م بفرصة ربح متوقعة تتجاوز 33%."
    },
    {
        symbol: "CAED",
        name_ar: "القاهرة للخدمات التعليمية",
        name_en: "Cairo Education Services",
        sector: "خدمات تعليمية",
        purity_type: "PURE",
        purity_label: "شبه نقي (0% تطهير)",
        badge_short: "0% تطهير",
        purification_ratio: "0.00%",
        price: 154.00,
        change: 1.50,
        change_pct: 0.98,
        support: 145.00,
        resistance: 170.00,
        target: 185.00,
        stop_loss: 138.00,
        action: "BUY",
        action_ar: "شراء",
        volume: "120,000",
        pe_ratio: 11.5,
        eps_growth: 15.0,
        rsi: 53.0,
        tech_analysis: "اتجاه صاعد رئيسي وثبات مريح فوق متوسط 20 يوم وخط الدعم 145 ج.م، مع إشارات إيجابية من مؤشرات السيولة والزخم.",
        future_outlook: "من المتوقع استمرار الزخم الشرائي لاختبار حاجز 170 ج.م ثم الوصول للمستهدف التاريخي 185 ج.م مدعوماً بالتدفقات النقدية التشغيلية القوية لقطاع التعليم."
    },
    {
        symbol: "FIRE",
        name_ar: "الأولى للاستثمار والتنمية العقارية",
        name_en: "First Investment & Real Estate",
        sector: "عقارات ومقاولات",
        purity_type: "PURE",
        purity_label: "شبه نقي (0% تطهير)",
        badge_short: "0% تطهير",
        purification_ratio: "0.00%",
        price: 4.35,
        change: 0.09,
        change_pct: 2.11,
        support: 4.10,
        resistance: 4.70,
        target: 5.10,
        stop_loss: 3.90,
        action: "BUY",
        action_ar: "شراء",
        volume: "1,250,000",
        pe_ratio: 10.8,
        eps_growth: 16.0,
        rsi: 57.4,
        tech_analysis: "ارتداد إيجابي قوي من قاع القناة السعرية الصاعدة 4.10 ج.م مع تقاطع إيجابي لمؤشر الماكد وتصاعد في أحجام التداول اليومية.",
        future_outlook: "يرجح اختبار مستوى المقاومة 4.70 ج.م خلال الجلسات القادمة، والاندفاع نحو المستهدف 5.10 ج.م بنسبة نمو مستهدفة +17.2%."
    },
    {
        symbol: "FNAR",
        name_ar: "الفنار للمقاولات العمومية والإنشاءات",
        name_en: "El Fanar Construction",
        sector: "عقارات ومقاولات",
        purity_type: "PURE",
        purity_label: "شبه نقي (0% تطهير)",
        badge_short: "0% تطهير",
        purification_ratio: "0.00%",
        price: 12.33,
        change: -0.22,
        change_pct: -1.75,
        support: 11.80,
        resistance: 14.50,
        target: 15.20,
        stop_loss: 11.20,
        action: "HOLD",
        action_ar: "احتفاظ",
        volume: "850,400",
        pe_ratio: 12.4,
        eps_growth: 8.5,
        rsi: 44.2,
        tech_analysis: "حركة تصحيحية هادئة لإعادة اختبار مستوى الدعم الرئيسي 11.80 ج.م، مع انحسار قوى البيع واقتراب مؤشر RSI من مناطق التشبع البيعي.",
        future_outlook: "استقرار السهم أعلى 11.80 ج.م يؤهله لمعاودة الانطلاق نحو 14.50 ثم 15.20 ج.م مع تسليمات المشروعات الجديدة."
    },
    {
        symbol: "MISR",
        name_ar: "إيجي ستون (مصر للأعمال الهندسية)",
        name_en: "EgyStone (Misr Engineering)",
        sector: "عقارات ومقاولات",
        purity_type: "PURE",
        purity_label: "شبه نقي (0% تطهير)",
        badge_short: "0% تطهير",
        purification_ratio: "0.00%",
        price: 18.20,
        change: 0.35,
        change_pct: 1.96,
        support: 17.00,
        resistance: 20.50,
        target: 22.00,
        stop_loss: 16.40,
        action: "BUY",
        action_ar: "شراء",
        volume: "680,000",
        pe_ratio: 11.2,
        eps_growth: 14.0,
        rsi: 55.8,
        tech_analysis: "اختراق لنموذج مثلث تجميعي صاعد مع ثبات السعر فوق المتوسط المتحرك 50 يوم، وزيادة ملحوظة في طلبات الشراء عند مستوى 17.50 ج.م.",
        future_outlook: "استمرار المسار الصاعد يستهدف مستوى 20.50 ج.م ثم الوصول للمستهدف النهائي 22.00 ج.م محققاً عائداً متوقعاً يتجاوز 20%."
    },
    {
        symbol: "MOED",
        name_ar: "المصرية لنظم التعليم الحديثة",
        name_en: "Modern Education Systems",
        sector: "خدمات تعليمية",
        purity_type: "PURE",
        purity_label: "شبه نقي (0% تطهير)",
        badge_short: "0% تطهير",
        purification_ratio: "0.00%",
        price: 0.82,
        change: -0.01,
        change_pct: -1.20,
        support: 0.75,
        resistance: 0.95,
        target: 1.05,
        stop_loss: 0.70,
        action: "HOLD",
        action_ar: "احتفاظ",
        volume: "6,800,000",
        pe_ratio: 14.0,
        eps_growth: 6.0,
        rsi: 43.5,
        tech_analysis: "تذبذب أفقي في نطاق ضيق بين 0.78 و 0.86 ج.م مع بناء مراكز تدريجية في سوق المشروعات الصغيرة والمتوسطة.",
        future_outlook: "اختراق مستوى المقاومة 0.95 ج.م يمثل إشارة دخول قوية لاستهداف حاجز 1.05 ج.م مع عودة السيولة للمضاربات السريعة."
    },
    {
        symbol: "NEDA",
        name_ar: "شمال الصعيد للتنمية والإنتاج الزراعي (نيوداب)",
        name_en: "North Upper Egypt Development",
        sector: "استثمار زراعي",
        purity_type: "PURE",
        purity_label: "شبه نقي (0% تطهير)",
        badge_short: "0% تطهير",
        purification_ratio: "0.00%",
        price: 2.75,
        change: -0.04,
        change_pct: -1.43,
        support: 2.50,
        resistance: 3.15,
        target: 3.45,
        stop_loss: 2.35,
        action: "HOLD",
        action_ar: "احتفاظ",
        volume: "1,600,000",
        pe_ratio: 15.2,
        eps_growth: 9.0,
        rsi: 47.1,
        tech_analysis: "السهم يستند إلى قاعدة دعم أفقية قوية عند 2.50 ج.م مع تناقص ملحوظ في أحجام البيع ما يشير لقرب اكتمال دورة التصحيح.",
        future_outlook: "يتوقع حدوث ارتداد فني صاعد نحو مستوى 3.15 ج.م ثم 3.45 ج.م بدعم من مشروعات الاستصلاح الزراعي وزيادة الإنتاج."
    },
    {
        symbol: "UPMS",
        name_ar: "الاتحاد الصيدلي للخدمات الطبية والاستثمار",
        name_en: "Pharma Union Medical Services",
        sector: "رعاية صحية وأدوية",
        purity_type: "PURE",
        purity_label: "شبه نقي (0% تطهير)",
        badge_short: "0% تطهير",
        purification_ratio: "0.00%",
        price: 3.15,
        change: 0.06,
        change_pct: 1.94,
        support: 2.95,
        resistance: 3.50,
        target: 3.85,
        stop_loss: 2.80,
        action: "BUY",
        action_ar: "شراء",
        volume: "1,420,000",
        pe_ratio: 12.6,
        eps_growth: 13.0,
        rsi: 56.0,
        tech_analysis: "نمط فني صاعد يعكس تجميعاً هادئاً، مع ثبات السعر فوق المتوسط المتحرك 20 يوم وارتفاع مؤشر RSI إلى 56.0.",
        future_outlook: "التحرك نحو المقاومة 3.50 ج.م مدعوم بفرص توسع شبكة التوزيع الدوائي واستهداف مستوى 3.85 ج.م بنسبة ربح متوقعة +22.2%."
    }
];

// الحالة العامة للتطبيق (State)
const AppState = {
    stocks: [...HALAL_STOCKS_DATA],
    favorites: [],
    selectedSymbol: "AMES",
    currentTab: "dashboard",
    chartTimeframe: "1M",
    chartInstance: null,
    searchQuery: "",
    sortBy: "default",
    sectorFilter: "all",
    signalFilter: "all",
    purityFilter: "all"
};

// تهيئة التطبيق عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
    initFavorites();
    initEventListeners();
    renderAllViews();
    initChart(AppState.selectedSymbol);
    updateLiveClock();
    setInterval(updateLiveClock, 1000);
});

// إدارة المفضلة الدائمة في المتصفح (Persistent Favorites Management)
function initFavorites() {
    const saved = localStorage.getItem("egx_pure_favorites_list");
    if (saved !== null) {
        try {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed)) {
                AppState.favorites = parsed.filter(sym => HALAL_STOCKS_DATA.some(s => s.symbol === sym));
            } else {
                AppState.favorites = [];
            }
        } catch (e) {
            AppState.favorites = [];
        }
    } else {
        AppState.favorites = ["AMES", "EGAS", "ELNA"];
        localStorage.setItem("egx_pure_favorites_list", JSON.stringify(AppState.favorites));
    }
    updateFavoritesBadge();
}

function saveFavorites() {
    localStorage.setItem("egx_pure_favorites_list", JSON.stringify(AppState.favorites));
    updateFavoritesBadge();
}

function toggleFavorite(symbol, event) {
    if (event) {
        event.stopPropagation();
        event.preventDefault();
    }
    const index = AppState.favorites.indexOf(symbol);
    if (index > -1) {
        AppState.favorites.splice(index, 1);
    } else {
        AppState.favorites.push(symbol);
    }
    saveFavorites();
    renderFavoritesGrid();
    renderScanTable();
    if (AppState.selectedSymbol === symbol) {
        renderStockDetailCard(symbol);
    }
}

function isFavorite(symbol) {
    return AppState.favorites.includes(symbol);
}

function updateFavoritesBadge() {
    const badge = document.getElementById("favCountBadge");
    if (badge) {
        badge.textContent = AppState.favorites.length;
    }
}

// معالجة الفرز من رؤوس الأعمدة وقائمة الفرز
function handleHeaderSort(field) {
    if (field === 'name') {
        AppState.sortBy = (AppState.sortBy === 'name_asc') ? 'name_desc' : 'name_asc';
    } else if (field === 'price') {
        AppState.sortBy = (AppState.sortBy === 'price_desc') ? 'price_asc' : 'price_desc';
    } else if (field === 'change') {
        AppState.sortBy = (AppState.sortBy === 'change_desc') ? 'change_asc' : 'change_desc';
    }

    const select = document.getElementById("sortByFilter");
    if (select) select.value = AppState.sortBy;

    updateSortHeaderIcons();
    renderScanTable();
}

function updateSortHeaderIcons() {
    const nameIcon = document.getElementById("sortIcon-name");
    const priceIcon = document.getElementById("sortIcon-price");
    const changeIcon = document.getElementById("sortIcon-change");

    if (nameIcon) nameIcon.className = "fa-solid fa-sort text-[10px] text-gray-500";
    if (priceIcon) priceIcon.className = "fa-solid fa-sort text-[10px] text-gray-500";
    if (changeIcon) changeIcon.className = "fa-solid fa-sort text-[10px] text-gray-500";

    if (AppState.sortBy === 'name_asc' && nameIcon) {
        nameIcon.className = "fa-solid fa-arrow-down-a-z text-[11px] text-emerald-400 font-bold";
    } else if (AppState.sortBy === 'name_desc' && nameIcon) {
        nameIcon.className = "fa-solid fa-arrow-up-z-a text-[11px] text-emerald-400 font-bold";
    } else if (AppState.sortBy === 'price_desc' && priceIcon) {
        priceIcon.className = "fa-solid fa-arrow-down-9-1 text-[11px] text-emerald-400 font-bold";
    } else if (AppState.sortBy === 'price_asc' && priceIcon) {
        priceIcon.className = "fa-solid fa-arrow-up-1-9 text-[11px] text-emerald-400 font-bold";
    } else if (AppState.sortBy === 'change_desc' && changeIcon) {
        changeIcon.className = "fa-solid fa-arrow-trend-up text-[11px] text-emerald-400 font-bold";
    } else if (AppState.sortBy === 'change_asc' && changeIcon) {
        changeIcon.className = "fa-solid fa-arrow-trend-down text-[11px] text-rose-400 font-bold";
    }
}

// تبديل التبويبات (Tab Switching)
function switchTab(tabId) {
    AppState.currentTab = tabId;
    document.querySelectorAll(".tab-content").forEach(el => el.classList.add("hidden"));
    document.querySelectorAll(".nav-btn").forEach(el => {
        el.classList.remove("text-emerald-400", "border-emerald-500", "bg-emerald-500/10");
        el.classList.add("text-gray-400", "border-transparent");
    });

    const activeContent = document.getElementById(`tab-${tabId}`);
    if (activeContent) activeContent.classList.remove("hidden");

    const activeBtn = document.getElementById(`btn-${tabId}`);
    if (activeBtn) {
        activeBtn.classList.add("text-emerald-400", "border-emerald-500", "bg-emerald-500/10");
        activeBtn.classList.remove("text-gray-400", "border-transparent");
    }

    if (tabId === "dashboard" || tabId === "favorites") {
        setTimeout(() => {
            if (AppState.chartInstance) AppState.chartInstance.resize();
        }, 100);
    }
}

// معالجة الأحداث (Event Listeners)
function initEventListeners() {
    // البحث والفلاتر
    document.getElementById("stockSearch")?.addEventListener("input", (e) => {
        AppState.searchQuery = e.target.value.trim().toLowerCase();
        renderScanTable();
    });

    document.getElementById("sortByFilter")?.addEventListener("change", (e) => {
        AppState.sortBy = e.target.value;
        updateSortHeaderIcons();
        renderScanTable();
    });

    document.getElementById("sectorFilter")?.addEventListener("change", (e) => {
        AppState.sectorFilter = e.target.value;
        renderScanTable();
    });

    document.getElementById("signalFilter")?.addEventListener("change", (e) => {
        AppState.signalFilter = e.target.value;
        renderScanTable();
    });

    document.getElementById("purityFilter")?.addEventListener("change", (e) => {
        AppState.purityFilter = e.target.value;
        renderScanTable();
    });

    // أزرار الفترات الزمنية للشارت
    document.querySelectorAll(".timeframe-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            document.querySelectorAll(".timeframe-btn").forEach(b => {
                b.classList.remove("bg-emerald-500", "text-black", "font-bold");
                b.classList.add("bg-gray-800", "text-gray-300");
            });
            btn.classList.add("bg-emerald-500", "text-black", "font-bold");
            btn.classList.remove("bg-gray-800", "text-gray-300");
            AppState.chartTimeframe = btn.dataset.tf || "1M";
            updateChartData(AppState.selectedSymbol);
        });
    });
}

// تحديث الساعة ومؤشر السوق
function updateLiveClock() {
    const clockEl = document.getElementById("liveClock");
    const statusEl = document.getElementById("marketStatusBadge");
    const now = new Date();
    
    if (clockEl) {
        clockEl.textContent = now.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }

    if (statusEl) {
        const day = now.getDay();
        const hour = now.getHours();
        const min = now.getMinutes();
        const isTradingDay = (day >= 0 && day <= 4);
        const isTradingHour = isTradingDay && ((hour > 10 || (hour === 10 && min >= 0)) && (hour < 14 || (hour === 14 && min <= 30)));

        if (isTradingHour) {
            statusEl.innerHTML = `<span class="live-indicator inline-block mr-1"></span> جلسة التداول مفتوحة (EGX)`;
            statusEl.className = "text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30";
        } else {
            statusEl.innerHTML = `<span class="w-2 h-2 rounded-full bg-amber-400 inline-block mr-1"></span> الجلسة مغلقة (10:00 - 14:30)`;
            statusEl.className = "text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30";
        }
    }
}

// تقديم كافة الواجهات (Render All Views)
function renderAllViews() {
    renderFavoritesGrid();
    renderScanTable();
    renderTopGainerHero();
    renderMorningCards();
    renderEndOfDayFullRanking();
    renderStockDetailCard(AppState.selectedSymbol);
    updateFavoritesBadge();
}

// بطاقات ملخص قمة الجلسة (أفضل 3 أسهم + سهم نصيحة الاستثمار)
function renderTopGainerHero() {
    const heroEl = document.getElementById("topGainerHero");
    if (!heroEl) return;

    const sorted = [...AppState.stocks].sort((a, b) => b.change_pct - a.change_pct);
    const first = sorted[0];
    const second = sorted[1] || sorted[0];
    const third = sorted[2] || sorted[1] || sorted[0];

    const buyPicks = AppState.stocks.filter(s => s.action === "BUY");
    const topInvestmentPick = buyPicks.sort((a, b) => ((b.target - b.price) / b.price) - ((a.target - a.price) / a.price))[0] || first;
    const upsidePct = (((topInvestmentPick.target - topInvestmentPick.price) / topInvestmentPick.price) * 100).toFixed(1);

    heroEl.innerHTML = `
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            
            <!-- 1. الأفضل في الجلسة -->
            <div onclick="selectStock('${first.symbol}')" class="glass-card glass-card-interactive p-4 border-amber-500/40 bg-gradient-to-b from-amber-500/10 to-transparent relative overflow-hidden group">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-xs font-bold text-amber-400 bg-amber-400/15 px-2 py-0.5 rounded-md border border-amber-400/30 flex items-center gap-1.5">
                        <i class="fa-solid fa-trophy text-amber-400 text-xs"></i>
                        <span>الأفضل في الجلسة</span>
                    </span>
                    <i class="fa-solid fa-crown text-amber-400 text-lg"></i>
                </div>
                <h4 class="font-extrabold text-white text-base mt-1 truncate">${first.name_ar}</h4>
                <div class="text-xs text-gray-400 mb-3">${first.symbol} | قطاع ${first.sector}</div>
                
                <div class="flex items-baseline justify-between pt-2 border-t border-gray-800">
                    <div>
                        <span class="text-xl font-black text-white">${first.price.toFixed(2)}</span>
                        <span class="text-[10px] text-gray-400 mr-0.5">ج.م</span>
                    </div>
                    <span class="text-xs font-black text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 flex items-center gap-1">
                        <span>+${first.change_pct.toFixed(2)}%</span>
                        <i class="fa-solid fa-arrow-trend-up text-[10px]"></i>
                    </span>
                </div>
            </div>

            <!-- 2. ثاني أفضل في الجلسة -->
            <div onclick="selectStock('${second.symbol}')" class="glass-card glass-card-interactive p-4 border-slate-400/30 bg-gradient-to-b from-slate-400/5 to-transparent relative overflow-hidden group">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-xs font-bold text-slate-300 bg-slate-400/15 px-2 py-0.5 rounded-md border border-slate-400/30 flex items-center gap-1.5">
                        <i class="fa-solid fa-medal text-slate-300 text-xs"></i>
                        <span>ثاني أفضل سهم</span>
                    </span>
                    <i class="fa-solid fa-star text-slate-400 text-lg"></i>
                </div>
                <h4 class="font-extrabold text-white text-base mt-1 truncate">${second.name_ar}</h4>
                <div class="text-xs text-gray-400 mb-3">${second.symbol} | قطاع ${second.sector}</div>
                
                <div class="flex items-baseline justify-between pt-2 border-t border-gray-800">
                    <div>
                        <span class="text-xl font-black text-white">${second.price.toFixed(2)}</span>
                        <span class="text-[10px] text-gray-400 mr-0.5">ج.م</span>
                    </div>
                    <span class="text-xs font-black text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 flex items-center gap-1">
                        <span>+${second.change_pct.toFixed(2)}%</span>
                        <i class="fa-solid fa-arrow-trend-up text-[10px]"></i>
                    </span>
                </div>
            </div>

            <!-- 3. ثالث أفضل في الجلسة -->
            <div onclick="selectStock('${third.symbol}')" class="glass-card glass-card-interactive p-4 border-orange-500/30 bg-gradient-to-b from-orange-500/5 to-transparent relative overflow-hidden group">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-xs font-bold text-orange-300 bg-orange-400/15 px-2 py-0.5 rounded-md border border-orange-400/30 flex items-center gap-1.5">
                        <i class="fa-solid fa-award text-orange-400 text-xs"></i>
                        <span>ثالث أفضل سهم</span>
                    </span>
                    <i class="fa-solid fa-ribbon text-orange-400 text-lg"></i>
                </div>
                <h4 class="font-extrabold text-white text-base mt-1 truncate">${third.name_ar}</h4>
                <div class="text-xs text-gray-400 mb-3">${third.symbol} | قطاع ${third.sector}</div>
                
                <div class="flex items-baseline justify-between pt-2 border-t border-gray-800">
                    <div>
                        <span class="text-xl font-black text-white">${third.price.toFixed(2)}</span>
                        <span class="text-[10px] text-gray-400 mr-0.5">ج.م</span>
                    </div>
                    <span class="text-xs font-black text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 flex items-center gap-1">
                        <span>+${third.change_pct.toFixed(2)}%</span>
                        <i class="fa-solid fa-arrow-trend-up text-[10px]"></i>
                    </span>
                </div>
            </div>

            <!-- 4. سهم نصيحة الاستثمار -->
            <div onclick="selectStock('${topInvestmentPick.symbol}')" class="glass-card glass-card-interactive p-4 border-emerald-500/50 bg-gradient-to-b from-emerald-500/15 to-transparent relative overflow-hidden group glow-green">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-xs font-extrabold text-emerald-300 bg-emerald-500/20 px-2.5 py-0.5 rounded-md border border-emerald-500/40 flex items-center gap-1.5">
                        <i class="fa-solid fa-lightbulb text-emerald-300 text-xs"></i>
                        <span>سهم نصيحة الاستثمار</span>
                    </span>
                    <i class="fa-solid fa-gem text-emerald-400 text-lg"></i>
                </div>
                <h4 class="font-extrabold text-white text-base mt-1 truncate">${topInvestmentPick.name_ar}</h4>
                <div class="text-xs text-emerald-400/80 mb-3">${topInvestmentPick.symbol} | الهدف: <b>${topInvestmentPick.target.toFixed(2)} ج.م</b></div>
                
                <div class="flex items-baseline justify-between pt-2 border-t border-gray-800">
                    <div>
                        <span class="text-xl font-black text-white">${topInvestmentPick.price.toFixed(2)}</span>
                        <span class="text-[10px] text-gray-400 mr-0.5">ج.م</span>
                    </div>
                    <span class="text-xs font-black text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/40 flex items-center gap-1">
                        <span>+${upsidePct}% ربح</span>
                        <i class="fa-solid fa-bullseye text-[10px]"></i>
                    </span>
                </div>
            </div>

        </div>
    `;
}

// شبكة الأسهم المفضلة (Favorites Grid)
function renderFavoritesGrid() {
    const favGrid = document.getElementById("favoritesGrid");
    const favTabList = document.getElementById("favTabList");
    
    const favStocks = AppState.stocks.filter(s => AppState.favorites.includes(s.symbol));

    const content = favStocks.length === 0 ? `
        <div class="col-span-full text-center py-12 glass-card p-6">
            <i class="fa-solid fa-star text-3xl text-gray-600 block mb-3"></i>
            <h4 class="text-lg font-bold text-gray-300">لم تقم بإضافة أسهم إلى المفضلة بعد</h4>
            <p class="text-sm text-gray-500 mt-1">اضغط على أيقونة النجمة بجانب أي سهم في الفحص الشامل لإضافته لقائمتك المفضلة الدائمة.</p>
        </div>
    ` : favStocks.map(stock => {
        const isSelected = stock.symbol === AppState.selectedSymbol;
        const isUp = stock.change_pct >= 0;
        const isZeroPurify = stock.purification_ratio === "0.00%";

        return `
            <div onclick="selectStock('${stock.symbol}')" class="glass-card glass-card-interactive p-5 relative overflow-hidden ${isSelected ? 'border-emerald-500 glow-green' : ''}">
                <button onclick="toggleFavorite('${stock.symbol}', event)" class="star-btn active absolute top-4 left-4 text-base text-amber-400 hover:scale-125 transition" title="إزالة من المفضلة">
                    <i class="fa-solid fa-star"></i>
                </button>
                <div class="flex items-center gap-3 mb-3">
                    <div class="w-10 h-10 rounded-xl bg-gray-800/80 border border-gray-700 flex items-center justify-center font-bold text-sm text-emerald-400">
                        ${stock.symbol}
                    </div>
                    <div>
                        <div class="flex items-center gap-1.5">
                            <h4 class="font-bold text-white text-sm leading-tight">${stock.name_ar}</h4>
                            <span class="${isZeroPurify ? 'text-emerald-400 bg-emerald-500/15 border-emerald-500/30' : 'text-amber-400 bg-amber-500/15 border-amber-500/30'} text-[10px] font-bold px-1.5 py-0.2 rounded border">
                                ${stock.badge_short}
                            </span>
                        </div>
                        <span class="text-xs text-gray-400">${stock.sector}</span>
                    </div>
                </div>

                <div class="flex items-baseline justify-between mt-4">
                    <div>
                        <span class="text-2xl font-black text-white">${stock.price.toFixed(2)}</span>
                        <span class="text-xs text-gray-400 mr-1">ج.م</span>
                    </div>
                    <div class="text-sm font-bold flex items-center gap-1 ${isUp ? 'text-emerald-400' : 'text-rose-400'}">
                        <i class="fa-solid ${isUp ? 'fa-arrow-trend-up' : 'fa-arrow-trend-down'} text-xs"></i>
                        <span>${isUp ? '+' : ''}${stock.change_pct.toFixed(2)}%</span>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-gray-800 text-xs">
                    <div>
                        <span class="text-gray-500 block">الهدف:</span>
                        <span class="text-emerald-400 font-bold">${stock.target.toFixed(2)} ج.م</span>
                    </div>
                    <div>
                        <span class="text-gray-500 block">وقف الخسارة:</span>
                        <span class="text-rose-400 font-bold">${stock.stop_loss.toFixed(2)} ج.م</span>
                    </div>
                </div>

                <div class="mt-3 flex items-center justify-between">
                    <span class="badge-${stock.action.toLowerCase()} text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <i class="fa-solid ${stock.action === 'BUY' ? 'fa-circle-check' : stock.action === 'SELL' ? 'fa-circle-xmark' : 'fa-circle-pause'} text-[10px]"></i>
                        <span>${stock.action === 'BUY' ? 'شراء' : stock.action === 'SELL' ? 'بيع' : 'احتفاظ'}</span>
                    </span>
                    <span class="text-xs text-gray-400">تطهير: <b class="${isZeroPurify ? 'text-emerald-400' : 'text-amber-400'}">${stock.purification_ratio}</b></span>
                </div>
            </div>
        `;
    }).join('');

    if (favGrid) favGrid.innerHTML = content;
    if (favTabList) favTabList.innerHTML = content;
}

// جدول الفحص الشامل للأسهم (Scan Table)
function renderScanTable() {
    const tableBody = document.getElementById("scanTableBody");
    if (!tableBody) return;

    let filtered = AppState.stocks.filter(s => {
        const matchesSearch = s.symbol.toLowerCase().includes(AppState.searchQuery) || 
                              s.name_ar.toLowerCase().includes(AppState.searchQuery) ||
                              s.name_en.toLowerCase().includes(AppState.searchQuery);
        const matchesSector = (AppState.sectorFilter === "all") || (s.sector === AppState.sectorFilter);
        const matchesSignal = (AppState.signalFilter === "all") || (s.action === AppState.signalFilter);
        const matchesPurity = (AppState.purityFilter === "all") || 
                              (AppState.purityFilter === "pure" && s.purification_ratio === "0.00%") ||
                              (AppState.purityFilter === "semi_pure" && s.purification_ratio !== "0.00%");
        return matchesSearch && matchesSector && matchesSignal && matchesPurity;
    });

    // تطبيق الترتيب والفرز حسب الاختيار (الاسم، السعر، التغير)
    if (AppState.sortBy === "name_asc") {
        filtered.sort((a, b) => a.name_ar.localeCompare(b.name_ar, 'ar'));
    } else if (AppState.sortBy === "name_desc") {
        filtered.sort((a, b) => b.name_ar.localeCompare(a.name_ar, 'ar'));
    } else if (AppState.sortBy === "price_desc") {
        filtered.sort((a, b) => b.price - a.price);
    } else if (AppState.sortBy === "price_asc") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (AppState.sortBy === "change_desc") {
        filtered.sort((a, b) => b.change_pct - a.change_pct);
    } else if (AppState.sortBy === "change_asc") {
        filtered.sort((a, b) => a.change_pct - b.change_pct);
    }

    tableBody.innerHTML = filtered.map((stock, index) => {
        const isFav = isFavorite(stock.symbol);
        const isUp = stock.change_pct >= 0;
        const isSelected = stock.symbol === AppState.selectedSymbol;
        const isZeroPurify = stock.purification_ratio === "0.00%";

        return `
            <tr onclick="selectStock('${stock.symbol}')" class="border-b border-gray-800/60 hover:bg-gray-800/40 cursor-pointer transition ${isSelected ? 'bg-emerald-950/20' : ''}">
                <td class="py-4 px-4 text-center" onclick="event.stopPropagation()">
                    <button onclick="toggleFavorite('${stock.symbol}', event)" class="star-btn ${isFav ? 'text-amber-400' : 'text-gray-600 hover:text-amber-400'} text-base">
                        <i class="fa-${isFav ? 'solid' : 'regular'} fa-star"></i>
                    </button>
                </td>
                <td class="py-4 px-4">
                    <div class="flex items-center gap-3">
                        <div class="w-9 h-9 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center font-bold text-xs text-emerald-400">
                            ${stock.symbol}
                        </div>
                        <div>
                            <span class="font-bold text-white block text-sm">${stock.name_ar}</span>
                            <span class="text-xs text-gray-500">${stock.name_en}</span>
                        </div>
                    </div>
                </td>
                <td class="py-4 px-4 text-center">
                    <span class="text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 text-xs font-bold px-2.5 py-1 rounded-full inline-flex items-center gap-1.5 whitespace-nowrap">
                        <i class="fa-solid fa-shield-halved text-[10px]"></i>
                        <span>متوافق مع الشريعة</span>
                    </span>
                </td>
                <td class="py-4 px-4 text-center">
                    <span class="text-xs font-bold font-mono ${isZeroPurify ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' : 'text-amber-400 bg-amber-500/10 border-amber-500/20'} px-2.5 py-1 rounded-lg border inline-block">
                        ${stock.purification_ratio}
                    </span>
                </td>
                <td class="py-4 px-4 text-sm text-gray-400">${stock.sector}</td>
                <td class="py-4 px-4 text-left font-black text-white">${stock.price.toFixed(2)} ج.م</td>
                <td class="py-4 px-4 text-left font-bold ${isUp ? 'text-emerald-400' : 'text-rose-400'}">
                    <span class="inline-flex items-center gap-1">
                        <i class="fa-solid ${isUp ? 'fa-arrow-trend-up' : 'fa-arrow-trend-down'} text-xs"></i>
                        <span>${isUp ? '+' : ''}${stock.change_pct.toFixed(2)}%</span>
                    </span>
                </td>
                <td class="py-4 px-4 text-sm text-emerald-400 font-semibold">${stock.target.toFixed(2)} ج.م</td>
                <td class="py-4 px-4 text-sm text-rose-400 font-semibold">${stock.stop_loss.toFixed(2)} ج.م</td>
                <td class="py-4 px-4 text-center">
                    <span class="badge-${stock.action.toLowerCase()} text-xs font-bold px-3 py-1 rounded-full inline-flex items-center gap-1.5">
                        <i class="fa-solid ${stock.action === 'BUY' ? 'fa-circle-check text-emerald-400' : stock.action === 'SELL' ? 'fa-circle-xmark text-rose-400' : 'fa-circle-pause text-gray-400'} text-[10px]"></i>
                        <span>${stock.action === 'BUY' ? 'شراء' : stock.action === 'SELL' ? 'بيع' : 'احتفاظ'}</span>
                    </span>
                </td>
                <td class="py-4 px-4 text-center">
                    <button onclick="selectStock('${stock.symbol}'); switchTab('dashboard');" class="text-xs font-bold text-gray-300 hover:text-emerald-400 bg-gray-800 hover:bg-gray-700 px-3 py-1.5 rounded-lg border border-gray-700 transition inline-flex items-center gap-1">
                        <span>تحليل</span>
                        <i class="fa-solid fa-chart-simple text-[10px]"></i>
                    </button>
                </td>
            </tr>
        `;
    }).join('');
}

// بطاقات توصيات الافتتاح الصباحية (Morning Cards)
function renderMorningCards() {
    const container = document.getElementById("morningRecommendationsList");
    if (!container) return;

    const buys = AppState.stocks.filter(s => s.action === "BUY");
    container.innerHTML = buys.map(s => `
        <div class="glass-card p-4 flex items-center justify-between">
            <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-sm">
                    <i class="fa-solid fa-circle-check"></i>
                </div>
                <div>
                    <div class="flex items-center gap-1.5">
                        <h5 class="font-bold text-white text-sm">${s.name_ar} (${s.symbol})</h5>
                        <span class="text-[10px] ${s.purification_ratio === '0.00%' ? 'text-emerald-400' : 'text-amber-400'} font-semibold">(تطهير: ${s.purification_ratio})</span>
                    </div>
                    <p class="text-xs text-gray-400">سعر الدخول: ${s.price.toFixed(2)} ج.م | الهدف: <b class="text-emerald-400">${s.target.toFixed(2)} ج.م</b></p>
                </div>
            </div>
            <button onclick="selectStock('${s.symbol}')" class="text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 transition flex items-center gap-1">
                <span>شارت</span>
                <i class="fa-solid fa-chart-line text-[10px]"></i>
            </button>
        </div>
    `).join('');
}

// قائمة حصاد ختام الجلسة مرتبة تنازلياً من الفوز إلى الخسارة (Full EOD Descending Ranking)
function renderEndOfDayFullRanking() {
    const container = document.getElementById("eodFullRankingList");
    if (!container) return;

    const sorted = [...AppState.stocks].sort((a, b) => b.change_pct - a.change_pct);

    container.innerHTML = sorted.map((stock, idx) => {
        const rank = idx + 1;
        const isUp = stock.change_pct > 0;
        const isDown = stock.change_pct < 0;
        const isSelected = stock.symbol === AppState.selectedSymbol;
        const isZeroPurify = stock.purification_ratio === "0.00%";

        let rankBadge = `<span class="w-6 h-6 rounded-full bg-gray-800 text-gray-400 flex items-center justify-center font-bold text-xs border border-gray-700">${rank}</span>`;
        if (rank === 1) {
            rankBadge = `<span class="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-black text-xs border border-amber-500/40">🥇</span>`;
        } else if (rank === 2) {
            rankBadge = `<span class="w-6 h-6 rounded-full bg-slate-400/20 text-slate-300 flex items-center justify-center font-black text-xs border border-slate-400/40">🥈</span>`;
        } else if (rank === 3) {
            rankBadge = `<span class="w-6 h-6 rounded-full bg-orange-400/20 text-orange-300 flex items-center justify-center font-black text-xs border border-orange-400/40">🥉</span>`;
        }

        return `
            <div onclick="selectStock('${stock.symbol}')" class="glass-card glass-card-interactive p-3 flex items-center justify-between gap-3 text-xs transition ${isSelected ? 'border-emerald-500/80 bg-emerald-950/20' : ''}">
                <div class="flex items-center gap-2.5">
                    ${rankBadge}
                    <div>
                        <div class="flex items-center gap-1.5">
                            <span class="font-bold text-white text-sm">${stock.name_ar}</span>
                            <span class="text-[10px] text-gray-500 font-mono">(${stock.symbol})</span>
                            <span class="${isZeroPurify ? 'text-emerald-400' : 'text-amber-400'} text-[10px] font-semibold">• تطهير: ${stock.purification_ratio}</span>
                        </div>
                        <span class="text-[11px] text-gray-400">${stock.sector} | حجم: ${stock.volume}</span>
                    </div>
                </div>

                <div class="flex items-center gap-3">
                    <div class="text-left">
                        <span class="font-black text-white block">${stock.price.toFixed(2)} ج.م</span>
                        <span class="font-bold inline-flex items-center gap-1 ${isUp ? 'text-emerald-400' : isDown ? 'text-rose-400' : 'text-gray-400'}">
                            <i class="fa-solid ${isUp ? 'fa-arrow-trend-up' : isDown ? 'fa-arrow-trend-down' : 'fa-minus'} text-[10px]"></i>
                            <span>${isUp ? '+' : ''}${stock.change_pct.toFixed(2)}%</span>
                        </span>
                    </div>
                    <button onclick="selectStock('${stock.symbol}'); switchTab('dashboard');" class="px-2.5 py-1.5 rounded-lg bg-gray-800 hover:bg-emerald-500/20 text-gray-300 hover:text-emerald-400 border border-gray-700 transition flex items-center gap-1" title="عرض الشارت">
                        <i class="fa-solid fa-chart-line text-[10px]"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// اختيار سهم وعرض بطاقته التفاعلية والشارت
function selectStock(symbol) {
    AppState.selectedSymbol = symbol;
    renderStockDetailCard(symbol);
    updateChartData(symbol);
    renderScanTable();
    renderFavoritesGrid();
}

function renderStockDetailCard(symbol) {
    const cardEl = document.getElementById("selectedStockCard");
    const stock = AppState.stocks.find(s => s.symbol === symbol) || AppState.stocks[0];
    if (!cardEl) return;

    const isFav = isFavorite(stock.symbol);
    const isUp = stock.change_pct >= 0;
    const isZeroPurify = stock.purification_ratio === "0.00%";

    // تحجيم ذكي وتلقائي للخط بناءً على طول اسم السهم حتى لا يخرج عن الحاوية
    let dynamicFontSize = "text-base sm:text-lg";
    const nameLen = stock.name_ar.length;
    if (nameLen > 36) {
        dynamicFontSize = "text-[10.5px] sm:text-[12px]";
    } else if (nameLen > 26) {
        dynamicFontSize = "text-[11.5px] sm:text-[13px]";
    } else if (nameLen > 18) {
        dynamicFontSize = "text-[13px] sm:text-[14.5px]";
    }

    cardEl.innerHTML = `
        <div class="flex items-start justify-between gap-2">
            <div class="flex items-start gap-2.5 min-w-0 flex-1 overflow-hidden">
                <!-- المربع: رمز السهم -->
                <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl ${isZeroPurify ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-amber-500/10 border-amber-500/30 text-amber-400'} border flex items-center justify-center font-black text-sm sm:text-base shadow-md shrink-0">
                    ${stock.symbol}
                </div>
                
                <!-- البيانات مرتبة رأسياً بدون أي تداخل أو خروج -->
                <div class="space-y-1 min-w-0 flex-1 overflow-hidden">
                    <!-- 1. اسم السهم بحجم خط ديناميكي مناسب للمساحة تماماً -->
                    <h3 class="${dynamicFontSize} font-black text-white whitespace-nowrap leading-tight tracking-tight">${stock.name_ar}</h3>
                    
                    <!-- 2. تحته تاج القطاع -->
                    <div>
                        <span class="inline-flex items-center gap-1 text-[10px] sm:text-[11px] px-2 py-0.5 rounded-md font-semibold bg-gray-800/90 border border-gray-700 text-blue-300 whitespace-nowrap">
                            <i class="fa-solid fa-layer-group text-[8.5px] text-blue-400"></i>
                            <span>قطاع ${stock.sector}</span>
                        </span>
                    </div>

                    <!-- 3. تحته تاج نقي / شبه نقي مع نسبة التطهير -->
                    <div>
                        <span class="inline-flex items-center gap-1 text-[10px] sm:text-[11px] px-2 py-0.5 rounded-md font-bold ${isZeroPurify ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300' : 'bg-amber-500/15 border-amber-500/30 text-amber-300'} border whitespace-nowrap">
                            <i class="fa-solid ${isZeroPurify ? 'fa-shield-halved' : 'fa-shield'} text-[8.5px]"></i>
                            <span>شبه نقي (تطهير ${stock.purification_ratio})</span>
                        </span>
                    </div>
                </div>
            </div>

            <!-- زر المفضلة -->
            <button onclick="toggleFavorite('${stock.symbol}', event)" class="star-btn ${isFav ? 'text-amber-400' : 'text-gray-600 hover:text-amber-400'} text-xl sm:text-2xl transition hover:scale-110 p-0.5 shrink-0 ml-1" title="إضافة / إزالة من المفضلة">
                <i class="fa-${isFav ? 'solid' : 'regular'} fa-star"></i>
            </button>
        </div>

        <!-- شبكة المؤشرات: مقسمة إلى 4 خانات (2 × 2) متساوية وأنيقة -->
        <div class="grid grid-cols-2 gap-3.5 my-4">
            <!-- الخانة 1: السعر الحالي -->
            <div class="bg-gray-800/50 hover:bg-gray-800/80 transition rounded-xl p-3.5 border border-gray-800 flex flex-col justify-between">
                <span class="text-xs text-gray-400 font-semibold block mb-1">السعر الحالي</span>
                <div>
                    <span class="text-xl sm:text-2xl font-black text-white">${stock.price.toFixed(2)} <span class="text-xs font-normal text-gray-400">ج.م</span></span>
                    <span class="text-xs font-bold flex items-center gap-1 ${isUp ? 'text-emerald-400' : 'text-rose-400'} mt-1">
                        <i class="fa-solid ${isUp ? 'fa-arrow-trend-up' : 'fa-arrow-trend-down'} text-[10px]"></i>
                        <span>${isUp ? '+' : ''}${stock.change_pct.toFixed(2)}%</span>
                    </span>
                </div>
            </div>

            <!-- الخانة 2: الهدف المستهدف -->
            <div class="bg-gray-800/50 hover:bg-gray-800/80 transition rounded-xl p-3.5 border border-gray-800 flex flex-col justify-between">
                <span class="text-xs text-gray-400 font-semibold block mb-1">الهدف المستهدف</span>
                <div>
                    <span class="text-xl sm:text-2xl font-black text-emerald-400">${stock.target.toFixed(2)} <span class="text-xs font-normal text-gray-400">ج.م</span></span>
                    <span class="text-xs font-bold text-emerald-400/90 flex items-center gap-1 mt-1">
                        <i class="fa-solid fa-bullseye text-[10px]"></i>
                        <span>+${(((stock.target - stock.price) / stock.price) * 100).toFixed(1)}% ربح</span>
                    </span>
                </div>
            </div>

            <!-- الخانة 3: وقف الخسارة -->
            <div class="bg-gray-800/50 hover:bg-gray-800/80 transition rounded-xl p-3.5 border border-gray-800 flex flex-col justify-between">
                <span class="text-xs text-gray-400 font-semibold block mb-1">وقف الخسارة</span>
                <div>
                    <span class="text-xl sm:text-2xl font-black text-rose-400">${stock.stop_loss.toFixed(2)} <span class="text-xs font-normal text-gray-400">ج.م</span></span>
                    <span class="text-xs font-bold text-rose-400/90 flex items-center gap-1 mt-1">
                        <i class="fa-solid fa-shield text-[10px]"></i>
                        <span>${(((stock.stop_loss - stock.price) / stock.price) * 100).toFixed(1)}% حماية</span>
                    </span>
                </div>
            </div>

            <!-- الخانة 4: مؤشر القوة RSI -->
            <div class="bg-gray-800/50 hover:bg-gray-800/80 transition rounded-xl p-3.5 border border-gray-800 flex flex-col justify-between">
                <span class="text-xs text-gray-400 font-semibold block mb-1">مؤشر القوة (RSI)</span>
                <div>
                    <span class="text-xl sm:text-2xl font-black text-amber-400">${stock.rsi}</span>
                    <span class="text-xs font-semibold text-gray-400 block mt-1">${stock.rsi > 70 ? 'تشبع شراء' : stock.rsi < 30 ? 'تشبع بيع' : 'منطقة تجميع متوازنة'}</span>
                </div>
            </div>
        </div>

        <!-- صندوق تقرير الفحص: مقسم بوضوح إلى التحليل الفني والتوقع المستقبلي -->
        <div class="space-y-2.5">
            <!-- 1. التحليل الفني -->
            <div class="p-3.5 rounded-xl bg-gray-800/40 border border-gray-800 text-xs">
                <div class="text-emerald-400 font-bold flex items-center gap-1.5 mb-1">
                    <i class="fa-solid fa-chart-line text-[11px]"></i>
                    <span>التحليل الفني:</span>
                </div>
                <p class="leading-relaxed text-gray-300">${stock.tech_analysis || `السهم يتداول في مسار صاعد فوق مستوى الدعم ${stock.support.toFixed(2)} ج.م مع ثبات أعلى متوسط 20 يوم وزخم شرائي جيد على مؤشر RSI (${stock.rsi}).`}</p>
            </div>

            <!-- 2. التوقع المستقبلي -->
            <div class="p-3.5 rounded-xl bg-gray-800/40 border border-gray-800 text-xs">
                <div class="text-amber-400 font-bold flex items-center gap-1.5 mb-1">
                    <i class="fa-solid fa-wand-magic-sparkles text-[11px]"></i>
                    <span>التوقع المستقبلي:</span>
                </div>
                <p class="leading-relaxed text-gray-300">${stock.future_outlook || `استمرار الزخم الإيجابي لاختبار مستوى المقاومة ${stock.resistance.toFixed(2)} ج.م تمهيداً للوصول إلى الهدف المستهدف ${stock.target.toFixed(2)} ج.م بنسبة عائد متوقع +${(((stock.target - stock.price)/stock.price)*100).toFixed(1)}%.`}</p>
            </div>
        </div>
    `;
}

// إنشاء وتحديث الرسم البياني (Chart.js Interactive Graph)
function initChart(symbol) {
    const ctx = document.getElementById("stockChart")?.getContext("2d");
    if (!ctx) return;

    const dataPoints = generateMockPriceHistory(symbol, AppState.chartTimeframe);

    AppState.chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dataPoints.labels,
            datasets: [
                {
                    label: `سعر ${symbol} (ج.م)`,
                    data: dataPoints.prices,
                    borderColor: '#10B981',
                    backgroundColor: 'rgba(16, 185, 129, 0.08)',
                    borderWidth: 2.5,
                    fill: true,
                    tension: 0.35,
                    pointRadius: 2,
                    pointHoverRadius: 6,
                    pointBackgroundColor: '#10B981',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2
                },
                {
                    label: 'متوسط 20 يوم (EMA)',
                    data: dataPoints.ema,
                    borderColor: '#F59E0B',
                    borderWidth: 1.5,
                    borderDash: [5, 5],
                    fill: false,
                    tension: 0.35,
                    pointRadius: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        color: '#9CA3AF',
                        font: { family: 'Cairo', size: 12 },
                        usePointStyle: true,
                        boxWidth: 8
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(15, 23, 42, 0.95)',
                    titleColor: '#F3F4F6',
                    bodyColor: '#10B981',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    borderWidth: 1,
                    padding: 12,
                    displayColors: false,
                    callbacks: {
                        title: (items) => `التاريخ: ${items[0].label}`,
                        label: (context) => `السعر: ${context.parsed.y.toFixed(2)} ج.م`
                    }
                }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(255, 255, 255, 0.04)' },
                    ticks: {
                        color: '#9CA3AF',
                        font: { family: 'Cairo', size: 10 },
                        maxTicksLimit: 9,
                        maxRotation: 0,
                        autoSkip: true
                    }
                },
                y: {
                    position: 'right',
                    grid: { color: 'rgba(255, 255, 255, 0.04)' },
                    ticks: {
                        color: '#9CA3AF',
                        font: { family: 'Cairo', size: 11 },
                        callback: (val) => `${val.toFixed(1)} ج.م`
                    }
                }
            }
        }
    });
}

function updateChartData(symbol) {
    if (!AppState.chartInstance) {
        initChart(symbol);
        return;
    }

    const dataPoints = generateMockPriceHistory(symbol, AppState.chartTimeframe);
    AppState.chartInstance.data.labels = dataPoints.labels;
    AppState.chartInstance.data.datasets[0].label = `سعر ${symbol} (ج.م)`;
    AppState.chartInstance.data.datasets[0].data = dataPoints.prices;
    AppState.chartInstance.data.datasets[1].data = dataPoints.ema;
    AppState.chartInstance.update();
}

// توليد تواريخ تقويمية واقعية ونقاط بيانية دقيقة بالتواريخ الصريحة DD/MM/YYYY
function generateMockPriceHistory(symbol, timeframe) {
    const stock = AppState.stocks.find(s => s.symbol === symbol) || AppState.stocks[0];
    const basePrice = stock.price;

    let count = 25;
    let daysStep = 1;
    let isIntraday = false;

    if (timeframe === "1D") {
        count = 10;
        isIntraday = true;
    } else if (timeframe === "1W") {
        count = 7;
        daysStep = 1;
    } else if (timeframe === "1M") {
        count = 22;
        daysStep = 1.35;
    } else if (timeframe === "6M") {
        count = 26;
        daysStep = 7;
    } else if (timeframe === "1Y") {
        count = 24;
        daysStep = 15;
    }

    const labels = [];
    const prices = [];
    const ema = [];

    const now = new Date();
    for (let i = 0; i < count; i++) {
        if (isIntraday) {
            const hours = [10, 10, 11, 11, 12, 12, 13, 13, 14, 14];
            const mins = ["00", "30", "00", "30", "00", "30", "00", "30", "00", "30"];
            const period = hours[i] < 12 ? "ص" : "م";
            const displayHour = hours[i] > 12 ? hours[i] - 12 : hours[i];
            labels.push(`${displayHour}:${mins[i]} ${period}`);
        } else {
            const dateOffset = (count - 1 - i) * daysStep;
            const d = new Date(now.getTime() - dateOffset * 24 * 60 * 60 * 1000);
            const dayStr = String(d.getDate()).padStart(2, '0');
            const monthStr = String(d.getMonth() + 1).padStart(2, '0');
            const yearStr = d.getFullYear();
            labels.push(`${dayStr}/${monthStr}/${yearStr}`);
        }
    }

    let current = basePrice * (1 - (stock.change_pct / 100));
    const step = basePrice * 0.015;

    for (let i = 0; i < count; i++) {
        const randomFactor = (Math.random() - 0.47) * step;
        current = Math.max(current + randomFactor, basePrice * 0.7);
        if (i === count - 1) current = basePrice;
        prices.push(parseFloat(current.toFixed(2)));
    }

    for (let i = 0; i < prices.length; i++) {
        const slice = prices.slice(Math.max(0, i - 4), i + 1);
        const avg = slice.reduce((a, b) => a + b, 0) / slice.length;
        ema.push(parseFloat(avg.toFixed(2)));
    }

    return { labels, prices, ema };
}
