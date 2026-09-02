/**
 * EGX Halal Trading Web Platform & Interactive Dashboard
 * منصة التداول والتحليل للأسهم النقية 100% بالبورصة المصرية
 * قائمة الأسهم النقية المعتمدة حصراً (32 سهماً)
 */

const HALAL_STOCKS_DATA = [
    {
        symbol: "BIGP",
        name_ar: "بي آي جي للتجارة والاستثمار",
        name_en: "B.I.G Trade & Investment",
        sector: "تجارة وتوزيع",
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
        description: "سهم نقي 100% (تطهير 0%). تداولات أفقية مستقرة مع كثافة تنفيذ في النطاق السعري الضيق."
    },
    {
        symbol: "CAED",
        name_ar: "القاهرة للخدمات التعليمية",
        name_en: "Cairo Education Services",
        sector: "خدمات تعليمية",
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
        description: "سهم نقي 100% (تطهير 0%). قطاع تعليمي دفاعي بإيرادات مضمونة وبدون أي قروض أو معاملات ربوية."
    },
    {
        symbol: "FIRE",
        name_ar: "الأولى للاستثمار والتنمية العقارية",
        name_en: "First Investment & Real Estate",
        sector: "عقارات",
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
        description: "سهم نقي 100% (تطهير 0%). نشاط تطوير عقاري وسكني وتماسك سعري ممتاز بالقرب من مناطق الدعم."
    },
    {
        symbol: "FNAR",
        name_ar: "الفنار للمقاولات العمومية والإنشاءات",
        name_en: "El Fanar Construction",
        sector: "عقارات ومقاولات",
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
        description: "سهم نقي 100% (تطهير 0%). حركة تصحيحية مؤقتة مع التماسك فوق مستوى الدعم 11.80 ج.م."
    },
    {
        symbol: "MISR",
        name_ar: "إيجي ستون (مصر للأعمال الهندسية)",
        name_en: "EgyStone (Misr Engineering)",
        sector: "عقارات ومقاولات",
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
        description: "سهم نقي 100% (تطهير 0%). أعمال إنشائية ورخام وهندسة مع عقود توريد متزايدة."
    },
    {
        symbol: "MOED",
        name_ar: "المصرية لنظم التعليم الحديثة",
        name_en: "Modern Education Systems",
        sector: "خدمات تعليمية",
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
        description: "سهم نقي 100% (تطهير 0%). تداولات عرضية ضمن نطاق الدعم مع كثافة تنفيذ في سوق المشروعات الصغيرة."
    },
    {
        symbol: "NEDA",
        name_ar: "شمال الصعيد للتنمية والإنتاج الزراعي (نيوداب)",
        name_en: "North Upper Egypt Development",
        sector: "استثمار زراعي",
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
        description: "سهم نقي 100% (تطهير 0%). تداولات عرضية ومؤشرات الزخم في وضعية تجميع تمهيداً لموجة صاعدة."
    },
    {
        symbol: "UPMS",
        name_ar: "الاتحاد الصيدلي للخدمات الطبية والاستثمار",
        name_en: "Pharma Union Medical Services",
        sector: "رعاية صحية وأدوية",
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
        description: "سهم نقي 100% (تطهير 0%). خدمات رعاية وتوزيع صيدلاني بنشاط تشغيلي خالص."
    },
    {
        symbol: "AMES",
        name_ar: "الإسكندرية للخدمات الطبية (المركز الطبي الجديد)",
        name_en: "Alexandria Medical Services",
        sector: "رعاية صحية وأدوية",
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
        description: "سهم نقي 100% (تطهير 0%). خدمات مستشفيات ومراكز طبية تخصصية بإيرادات نقدية مباشرة."
    },
    {
        symbol: "BIOC",
        name_ar: "جلاكسو سميثكلاين / بيوكام",
        name_en: "GlaxoSmithKline Egypt / Bioc",
        sector: "رعاية صحية وأدوية",
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
        description: "سهم نقي 100% (تطهير 0%). ريادة في تصنيع الأدوية الحيوية ومستحضرات العلاج الأساسية."
    },
    {
        symbol: "CEFM",
        name_ar: "مطاحن مصر الوسطى",
        name_en: "Middle Egypt Flour Mills",
        sector: "أغذية ومطاحن",
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
        description: "سهم نقي 100% (تطهير 0%). طحن دقيق وإنتاج أغذية وتوزيعات أرباح نقدية سنوية مجزية."
    },
    {
        symbol: "DCRC",
        name_ar: "الدلتا للإنشاء والتعمير",
        name_en: "Delta Construction & Rebuilding",
        sector: "عقارات ومقاولات",
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
        description: "سهم نقي 100% (تطهير 0%). مشروعات سكنية وتجارية بمحافظات الدلتا ومحفظة أراضٍ جيدة."
    },
    {
        symbol: "EGAS",
        name_ar: "غاز مصر",
        name_en: "Egypt Gas",
        sector: "طاقة ومرافق",
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
        description: "سهم نقي 100% (تطهير 0%). مشروعات توصيل شبكات الغاز الطبيعي داخل مصر وخارجها بأرباح قوية."
    },
    {
        symbol: "ELNA",
        name_ar: "النصر للحاصلات الزراعية",
        name_en: "El Nasr Agricultural Products",
        sector: "استثمار زراعي",
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
        description: "سهم نقي 100% (تطهير 0%). طلب متزايد على الصادرات الزراعية مع تحسن معدلات الربحية."
    },
    {
        symbol: "ELWA",
        name_ar: "الوادي العالمية للاستثمار والتنمية",
        name_en: "El Wadi for International Investment",
        sector: "استثمار وتنمية",
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
        description: "سهم نقي 100% (تطهير 0%). استصلاح أراضٍ ومشروعات تنمية عمرانية وزراعية."
    },
    {
        symbol: "FCMD",
        name_ar: "فيوتشر كير للصناعات الطبية",
        name_en: "Future Care Medical Industries",
        sector: "رعاية صحية وأدوية",
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
        description: "سهم نقي 100% (تطهير 0%). مستلزمات طبية وتجهيزات مستشفيات وتداول في نطاق ضيق."
    },
    {
        symbol: "GGRN",
        name_ar: "جو جرين للاستثمار الزراعي والتنمية",
        name_en: "Go Green Agricultural Investment",
        sector: "استثمار زراعي",
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
        description: "سهم نقي 100% (تطهير 0%). زراعة نباتات الجوجوبا والمحاصيل التصديرية ذات العائد المرتفع."
    },
    {
        symbol: "ICFC",
        name_ar: "الدولية للأسمدة والكيماويات",
        name_en: "International Fertilizers & Chemicals",
        sector: "أسمدة وكيماويات",
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
        description: "سهم نقي 100% (تطهير 0%). تجارة وتوزيع المخصبات والأسمدة الزراعية مع نمو المبيعات."
    },
    {
        symbol: "IEEC",
        name_ar: "المشروعات الصناعية والهندسية",
        name_en: "Industrial & Engineering Projects",
        sector: "عقارات ومقاولات",
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
        description: "سهم نقي 100% (تطهير 0%). مقاولات مشروعات مياه وصرف صحي وشبكات بنية تحتية."
    },
    {
        symbol: "INEG",
        name_ar: "المجموعة المتكاملة للأعمال الهندسية",
        name_en: "Integrated Engineering Group",
        sector: "عقارات ومقاولات",
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
        description: "سهم نقي 100% (تطهير 0%). أعمال إنشاءات هياكل معدنية وتركيبات ميكانيكية."
    },
    {
        symbol: "INFI",
        name_ar: "الإسماعيلية الوطنية للصناعات الغذائية (فوديكو)",
        name_en: "Ismailia National Food (Foodico)",
        sector: "أغذية ومشروبات",
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
        description: "سهم نقي 100% (تطهير 0%). تصنيع وتجميد وتصدير الحاصلات الغذائية والخضروات."
    },
    {
        symbol: "MBSC",
        name_ar: "إم بي للهندسة",
        name_en: "M.B Engineering",
        sector: "صناعة وتكنولوجيا",
        price: 2.35,
        change: 0.05,
        change_pct: 2.17,
        support: 2.18,
        resistance: 2.65,
        target: 2.90,
        stop_loss: 2.05,
        action: "BUY",
        action_ar: "شراء",
        volume: "1,850,000",
        pe_ratio: 11.0,
        eps_growth: 16.0,
        rsi: 57.2,
        description: "سهم نقي 100% (تطهير 0%). تصنيع وتوزيع اللوحات والمعدات الكهربائية ومحطات الشحن."
    },
    {
        symbol: "MILS",
        name_ar: "مطاحن ومخابز شمال القاهرة",
        name_en: "North Cairo Flour Mills",
        sector: "أغذية ومطاحن",
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
        description: "سهم نقي 100% (تطهير 0%). قطاع تمويني دفاعي قوي وتوزيعات أرباح منتظمة وثبات سعري."
    },
    {
        symbol: "MOSC",
        name_ar: "مصر للزيوت والصابون",
        name_en: "Misr Oils & Soap",
        sector: "أغذية ومشروبات",
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
        description: "سهم نقي 100% (تطهير 0%). إنتاج الزيوت النباتية والمنظفات والأعلاف."
    },
    {
        symbol: "NDRL",
        name_ar: "الوطنية لحفر وخدمات البترول",
        name_en: "National Drilling Company",
        sector: "خدمات بترولية",
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
        description: "سهم نقي 100% (تطهير 0%). خدمات حفر وصيانة الآبار والمنشآت البترولية."
    },
    {
        symbol: "OBRI",
        name_ar: "العبور للاستثمار العقاري",
        name_en: "El Obour Real Estate Investment",
        sector: "عقارات",
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
        description: "سهم نقي 100% (تطهير 0%). مشروعات عمرانية وسكنية بمدينة العبور والمدن الجديدة."
    },
    {
        symbol: "PHGC",
        name_ar: "بريميم هيلثكير جروب",
        name_en: "Premium Healthcare Group",
        sector: "رعاية صحية وأدوية",
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
        description: "سهم نقي 100% (تطهير 0%). معامل تحاليل وخدمات تشخيصية وطبية متكاملة."
    },
    {
        symbol: "PRCL",
        name_ar: "العامة لمنتجات الخزف والصيني (شيني)",
        name_en: "General Ceramic & China (Sheeni)",
        sector: "مواد بناء وصناعة",
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
        description: "سهم نقي 100% (تطهير 0%). تصنيع السيراميك والأدوات الصحية ومبيعات محلية وتصديرية."
    },
    {
        symbol: "SIPC",
        name_ar: "سبأ الدولية للأدوية والصناعات الكيماوية",
        name_en: "Sabaa International Pharma",
        sector: "رعاية صحية وأدوية",
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
        description: "سهم نقي 100% (تطهير 0%). إنتاج المستحضرات الدوائية والبيطرية والمكملات."
    },
    {
        symbol: "SMFR",
        name_ar: "سماد مصر (إيجيفرت)",
        name_en: "Egypt Fertilizers (Egyfert)",
        sector: "أسمدة وتجارة",
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
        description: "سهم نقي 100% (تطهير 0%). إنتاج وتوزيع الأسمدة والمخصبات الزراعية المتخصصة."
    },
    {
        symbol: "VERT",
        name_ar: "فرتيكا للصناعة والتجارة",
        name_en: "Vertika for Industry & Trade",
        sector: "تكنولوجيا وبرمجيات",
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
        description: "سهم نقي 100% (تطهير 0%). حلول برمجيات ونظم تكنولوجيا معلومات متقدمة."
    },
    {
        symbol: "ZEOT",
        name_ar: "الزيوت المستخلصة ومنتجاتها",
        name_en: "Extracted Oils & Derivatives",
        sector: "أغذية ومشروبات",
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
        description: "سهم نقي 100% (تطهير 0%). استخلاص وتكرير الزيوت النباتية وإنتاج الصابون والأعلاف."
    }
];

// الحالة العامة للتطبيق (State)
const AppState = {
    stocks: [...HALAL_STOCKS_DATA],
    favorites: JSON.parse(localStorage.getItem("egx_halal_favorites") || '["CAED", "EGAS", "ELNA", "FNAR", "BIGP"]'),
    selectedSymbol: "CAED",
    currentTab: "dashboard",
    chartTimeframe: "1M",
    chartInstance: null,
    searchQuery: "",
    sectorFilter: "all",
    signalFilter: "all"
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

// إدارة المفضلة (Favorites Management)
function initFavorites() {
    if (!Array.isArray(AppState.favorites) || AppState.favorites.length === 0) {
        AppState.favorites = ["CAED", "EGAS", "ELNA", "FNAR", "BIGP"];
    }
    // تصفية أي سهم قديم غير موجود في قائمة الـ 32 النقية
    AppState.favorites = AppState.favorites.filter(sym => HALAL_STOCKS_DATA.some(s => s.symbol === sym));
    if (AppState.favorites.length === 0) {
        AppState.favorites = ["CAED", "EGAS", "ELNA", "FNAR", "BIGP"];
    }
    saveFavorites();
}

function saveFavorites() {
    localStorage.setItem("egx_halal_favorites", JSON.stringify(AppState.favorites));
    updateFavoritesBadge();
}

function toggleFavorite(symbol, event) {
    if (event) event.stopPropagation();
    const index = AppState.favorites.indexOf(symbol);
    if (index > -1) {
        AppState.favorites.splice(index, 1);
    } else {
        AppState.favorites.push(symbol);
    }
    saveFavorites();
    renderAllViews();
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

    document.getElementById("sectorFilter")?.addEventListener("change", (e) => {
        AppState.sectorFilter = e.target.value;
        renderScanTable();
    });

    document.getElementById("signalFilter")?.addEventListener("change", (e) => {
        AppState.signalFilter = e.target.value;
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
        const day = now.getDay(); // 0: Sun, 1: Mon, ... 4: Thu, 5: Fri, 6: Sat
        const hour = now.getHours();
        const min = now.getMinutes();
        const isTradingDay = (day >= 0 && day <= 4); // Sun to Thu
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

    // فرز الأسهم تنازلياً حسب نسبة الصعود
    const sorted = [...AppState.stocks].sort((a, b) => b.change_pct - a.change_pct);
    const first = sorted[0];
    const second = sorted[1] || sorted[0];
    const third = sorted[2] || sorted[1] || sorted[0];

    // سهم نصيحة الاستثمار (أفضل فرصة شراء بأعلى عائد مستهدف وأفضل مؤشرات)
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
                            <span class="text-emerald-400 bg-emerald-500/15 border-emerald-500/30 text-[10px] font-bold px-1.5 py-0.2 rounded border">
                                نقي 100%
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
                    <span class="text-xs text-gray-400">تطهير: <b>0.00%</b></span>
                </div>
            </div>
        `;
    }).join('');

    if (favGrid) favGrid.innerHTML = content;
    if (favTabList) favTabList.innerHTML = content;
}

// جدول الفحص الشامل للأسهم النقية 100% (Scan Table)
function renderScanTable() {
    const tableBody = document.getElementById("scanTableBody");
    if (!tableBody) return;

    let filtered = AppState.stocks.filter(s => {
        const matchesSearch = s.symbol.toLowerCase().includes(AppState.searchQuery) || 
                              s.name_ar.toLowerCase().includes(AppState.searchQuery) ||
                              s.name_en.toLowerCase().includes(AppState.searchQuery);
        const matchesSector = (AppState.sectorFilter === "all") || (s.sector === AppState.sectorFilter);
        const matchesSignal = (AppState.signalFilter === "all") || (s.action === AppState.signalFilter);
        return matchesSearch && matchesSector && matchesSignal;
    });

    tableBody.innerHTML = filtered.map((stock, index) => {
        const isFav = isFavorite(stock.symbol);
        const isUp = stock.change_pct >= 0;
        const isSelected = stock.symbol === AppState.selectedSymbol;

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
                    <span class="text-emerald-300 bg-emerald-500/15 border-emerald-500/30 text-xs font-bold px-2.5 py-1 rounded-full border inline-flex items-center gap-1">
                        <i class="fa-solid fa-shield-halved text-[10px]"></i>
                        <span>نقي 100% (تطهير 0%)</span>
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
                        <span class="text-[10px] text-emerald-400 font-semibold">(نقي 100%)</span>
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

    // فرز جميع الأسهم تنازلياً بحسب نسبة التغير السعري اليومي (من الأعلى ربحاً إلى الأكثر تراجعاً)
    const sorted = [...AppState.stocks].sort((a, b) => b.change_pct - a.change_pct);

    container.innerHTML = sorted.map((stock, idx) => {
        const rank = idx + 1;
        const isUp = stock.change_pct > 0;
        const isDown = stock.change_pct < 0;
        const isSelected = stock.symbol === AppState.selectedSymbol;

        // وسام الترتيب
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
                            <span class="text-emerald-400 text-[10px] font-semibold">• نقي 100%</span>
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

    cardEl.innerHTML = `
        <div class="flex items-start justify-between">
            <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-base shadow-md">
                    ${stock.symbol}
                </div>
                <div>
                    <div class="flex items-center gap-2">
                        <h3 class="text-lg font-bold text-white">${stock.name_ar}</h3>
                        <span class="badge-pure text-emerald-300 text-xs px-2 py-0.5 rounded-md font-semibold flex items-center gap-1">
                            <i class="fa-solid fa-shield-halved text-[10px]"></i>
                            <span>نقي 100% (تطهير 0.00%)</span>
                        </span>
                    </div>
                    <p class="text-xs text-gray-400">${stock.name_en} | قطاع ${stock.sector}</p>
                </div>
            </div>
            <button onclick="toggleFavorite('${stock.symbol}', event)" class="star-btn ${isFav ? 'text-amber-400' : 'text-gray-600 hover:text-amber-400'} text-xl transition">
                <i class="fa-${isFav ? 'solid' : 'regular'} fa-star"></i>
            </button>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4">
            <div class="bg-gray-800/40 rounded-xl p-3 border border-gray-800">
                <span class="text-xs text-gray-500 block">السعر الحالي</span>
                <span class="text-xl font-black text-white">${stock.price.toFixed(2)} <span class="text-xs font-normal text-gray-400">ج.م</span></span>
                <span class="text-xs font-bold flex items-center gap-1 ${isUp ? 'text-emerald-400' : 'text-rose-400'} block">
                    <i class="fa-solid ${isUp ? 'fa-arrow-trend-up' : 'fa-arrow-trend-down'} text-[10px]"></i>
                    <span>${isUp ? '+' : ''}${stock.change_pct.toFixed(2)}%</span>
                </span>
            </div>
            <div class="bg-gray-800/40 rounded-xl p-3 border border-gray-800">
                <span class="text-xs text-gray-500 block">الهدف المستهدف</span>
                <span class="text-xl font-black text-emerald-400">${stock.target.toFixed(2)} <span class="text-xs font-normal text-gray-400">ج.م</span></span>
                <span class="text-xs text-emerald-500 block">+${(((stock.target - stock.price) / stock.price) * 100).toFixed(1)}% ربح</span>
            </div>
            <div class="bg-gray-800/40 rounded-xl p-3 border border-gray-800">
                <span class="text-xs text-gray-500 block">وقف الخسارة</span>
                <span class="text-xl font-black text-rose-400">${stock.stop_loss.toFixed(2)} <span class="text-xs font-normal text-gray-400">ج.م</span></span>
                <span class="text-xs text-rose-500 block">${(((stock.stop_loss - stock.price) / stock.price) * 100).toFixed(1)}% حماية</span>
            </div>
            <div class="bg-gray-800/40 rounded-xl p-3 border border-gray-800">
                <span class="text-xs text-gray-500 block">مؤشر القوة RSI</span>
                <span class="text-xl font-black text-amber-400">${stock.rsi}</span>
                <span class="text-xs text-gray-400 block">${stock.rsi > 70 ? 'تشبع شراء' : stock.rsi < 30 ? 'تشبع بيع' : 'منطقة متوازنة'}</span>
            </div>
        </div>

        <div class="p-3.5 rounded-xl bg-gray-800/30 border border-gray-800 text-xs leading-relaxed text-gray-300">
            <span class="text-emerald-400 font-bold flex items-center gap-1.5 mb-1">
                <i class="fa-solid fa-circle-info"></i>
                <span>تقرير الفحص والتحليل الفني:</span>
            </span>
            ${stock.description}
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
        count = 22; // أيام تداول الشهر
        daysStep = 1.35;
    } else if (timeframe === "6M") {
        count = 26;
        daysStep = 7; // كل أسبوع تاريخ محدد
    } else if (timeframe === "1Y") {
        count = 24;
        daysStep = 15; // كل نصف شهر تاريخ محدد
    }

    const labels = [];
    const prices = [];
    const ema = [];

    const now = new Date();
    // بناء التواريخ الحقيقية رجوعاً من اليوم بتنسيق (DD/MM/YYYY) أو بتوقيت الجلسة اللحظي
    for (let i = 0; i < count; i++) {
        if (isIntraday) {
            // أوقات جلسة البورصة المصرية من 10:00 ص إلى 02:30 م
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
            
            // تاريخ صريح ومباشر: DD/MM/YYYY
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

    // حساب متوسط متحرك بسيط (SMA / EMA)
    for (let i = 0; i < prices.length; i++) {
        const slice = prices.slice(Math.max(0, i - 4), i + 1);
        const avg = slice.reduce((a, b) => a + b, 0) / slice.length;
        ema.push(parseFloat(avg.toFixed(2)));
    }

    return { labels, prices, ema };
}
