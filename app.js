/**
 * EGX Halal Trading Web Platform & Interactive Dashboard
 * منصة التداول والتحليل الذكي للأسهم النقية بالبورصة المصرية
 */

// قائمة الأسهم النقية المعتمدة (تطهير 0.00%)
const HALAL_STOCKS_DATA = [
    {
        symbol: "TMGH",
        name_ar: "مجموعة طلعت مصطفى القابضة",
        name_en: "Talaat Moustafa Group",
        sector: "عقارات",
        price: 96.97,
        change: 2.45,
        change_pct: 2.60,
        support: 92.50,
        resistance: 102.00,
        target: 108.50,
        stop_loss: 89.00,
        action: "BUY",
        action_ar: "شراء",
        volume: "3,450,200",
        pe_ratio: 11.2,
        eps_growth: 24.5,
        rsi: 58.4,
        description: "أداء مالي استثنائي مع مبيعات قياسية في مشروع بنان ومشروع ساوث ميد ومؤشرات فنية في اتجاه صاعد قوي."
    },
    {
        symbol: "JUFO",
        name_ar: "جهينة للصناعات الغذائية",
        name_en: "Juhayna Food Industries",
        sector: "أغذية ومشروبات",
        price: 27.36,
        change: 0.44,
        change_pct: 1.64,
        support: 25.80,
        resistance: 29.50,
        target: 31.00,
        stop_loss: 24.90,
        action: "BUY",
        action_ar: "شراء",
        volume: "1,820,100",
        pe_ratio: 9.8,
        eps_growth: 18.2,
        rsi: 52.1,
        description: "نمو مستقر في الحصة السوقية وصادرات متزايدة تدعم هوامش الربحية التشغيلية مع ثبات فوق مستوى الدعم."
    },
    {
        symbol: "FNAR",
        name_ar: "الفنار للمقاولات العمومية",
        name_en: "El Fanar Construction",
        sector: "عقاري ومقاولات",
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
        description: "حركة تصحيحية عرضية بالقرب من مناطق الدعم الرئيسية، يُنصح بالانتظار حتى ارتداد مؤكد."
    },
    {
        symbol: "ETEL",
        name_ar: "المصرية للاتصالات",
        name_en: "Telecom Egypt",
        sector: "اتصالات وتكنولوجيا",
        price: 116.37,
        change: 0.30,
        change_pct: 0.26,
        support: 110.00,
        resistance: 124.00,
        target: 130.00,
        stop_loss: 106.00,
        action: "HOLD",
        action_ar: "احتفاظ",
        volume: "1,240,000",
        pe_ratio: 7.9,
        eps_growth: 16.0,
        rsi: 49.5,
        description: "إيرادات قوية من الكابلات البحرية وحصة فودافون مصر مع توزيعات أرباح منتظمة وثبات سعري ممتاز."
    },
    {
        symbol: "ORWE",
        name_ar: "النساجون الشرقيون للسجاد",
        name_en: "Oriental Weavers",
        sector: "صناعة ومنسوجات",
        price: 24.80,
        change: 0.55,
        change_pct: 2.27,
        support: 23.20,
        resistance: 26.50,
        target: 28.00,
        stop_loss: 22.40,
        action: "BUY",
        action_ar: "شراء",
        volume: "980,300",
        pe_ratio: 8.4,
        eps_growth: 21.0,
        rsi: 61.2,
        description: "استفادة مباشرة من نمو الصادرات الدولارية وزيادة الطلب العالمي على منتجات السجاد مع عوائد توزيعات مجزية."
    },
    {
        symbol: "EFID",
        name_ar: "إيديتا للصناعات الغذائية",
        name_en: "Edita Food Industries",
        sector: "أغذية ومشروبات",
        price: 38.50,
        change: 0.80,
        change_pct: 2.12,
        support: 36.00,
        resistance: 41.50,
        target: 44.00,
        stop_loss: 34.80,
        action: "BUY",
        action_ar: "شراء",
        volume: "640,200",
        pe_ratio: 13.5,
        eps_growth: 19.4,
        rsi: 57.0,
        description: "توسعات إقليمية ناجحة وقوة تسعيرية ممتازة تحافظ على استقرار وتنامي الأرباح التشغيلية."
    },
    {
        symbol: "SKPC",
        name_ar: "سيدي كرير للبتروكيماويات",
        name_en: "Sidi Kerir Petrochemicals",
        sector: "بتروكيماويات وموارد",
        price: 32.10,
        change: -0.40,
        change_pct: -1.23,
        support: 30.50,
        resistance: 35.00,
        target: 37.50,
        stop_loss: 29.50,
        action: "HOLD",
        action_ar: "احتفاظ",
        volume: "1,450,000",
        pe_ratio: 6.8,
        eps_growth: 12.0,
        rsi: 46.8,
        description: "تقييم مغرٍ ومضاعف ربحية منخفض جداً ولكن السعر يمر بفترة ترقب لاستقرار إمدادات الغاز الطبيعي."
    },
    {
        symbol: "AMOC",
        name_ar: "الإسكندرية للزيوت المعدنية",
        name_en: "Alexandria Mineral Oils",
        sector: "بتروكيماويات وطاقة",
        price: 10.45,
        change: 0.15,
        change_pct: 1.46,
        support: 9.80,
        resistance: 11.50,
        target: 12.20,
        stop_loss: 9.40,
        action: "BUY",
        action_ar: "شراء",
        volume: "4,200,000",
        pe_ratio: 7.2,
        eps_growth: 15.3,
        rsi: 55.6,
        description: "سيولة تداول عالية وزخم شرائي يدعم اختبار مستوى المقاومة 11.50 ج.م مع هوامش تكرير مرتفعة."
    },
    {
        symbol: "EGAL",
        name_ar: "مصر للألومنيوم",
        name_en: "Egypt Aluminium",
        sector: "موارد أساسية ومعادن",
        price: 105.20,
        change: 3.10,
        change_pct: 3.04,
        support: 98.00,
        resistance: 112.00,
        target: 120.00,
        stop_loss: 94.00,
        action: "BUY",
        action_ar: "شراء",
        volume: "730,000",
        pe_ratio: 5.9,
        eps_growth: 32.0,
        rsi: 66.8,
        description: "استفادة قصوى من ارتفاع أسعار الألومنيوم العالمية ببورصة لندن للمعادن مع صادرات قياسية تعزز التدفقات."
    },
    {
        symbol: "ISPH",
        name_ar: "ابن سينا فارما",
        name_en: "Ibnsina Pharma",
        sector: "رعاية صحية وأدوية",
        price: 4.85,
        change: 0.07,
        change_pct: 1.46,
        support: 4.50,
        resistance: 5.30,
        target: 5.70,
        stop_loss: 4.30,
        action: "BUY",
        action_ar: "شراء",
        volume: "5,100,000",
        pe_ratio: 10.1,
        eps_growth: 17.5,
        rsi: 54.2,
        description: "تحسن واضح في هوامش التوزيع بعد تحريك أسعار الدواء وتراجع تكاليف التمويل تدريجياً."
    },
    {
        symbol: "OLFI",
        name_ar: "عبور لاند للصناعات الغذائية",
        name_en: "Obour Land Food Industries",
        sector: "أغذية ومشروبات",
        price: 15.60,
        change: -0.10,
        change_pct: -0.64,
        support: 14.80,
        resistance: 16.80,
        target: 17.80,
        stop_loss: 14.20,
        action: "HOLD",
        action_ar: "احتفاظ",
        volume: "420,000",
        pe_ratio: 8.9,
        eps_growth: 14.0,
        rsi: 48.0,
        description: "استقرار سعري وتماسك بالقرب من المتوسطات المتحركة الرئيسية مع تدفقات نقدية تشغيلية ممتازة."
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
        description: "قطاع دفاعي قوي ومستقر بإيرادات مضمونة وخالٍ تماماً من الديون والفوائد الربوية."
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
        description: "سهم مضاربي خفيف يتداول في نطاق ضيق بين 0.75 و 0.90 ج.م مع أحجام تداول متوسطة."
    },
    {
        symbol: "AMPI",
        name_ar: "نوفيدا للاستثمار والتكنولوجيا",
        name_en: "Novida Investment & Technology",
        sector: "اتصالات وتكنولوجيا",
        price: 2.65,
        change: 0.05,
        change_pct: 1.92,
        support: 2.45,
        resistance: 3.10,
        target: 3.40,
        stop_loss: 2.30,
        action: "BUY",
        action_ar: "شراء",
        volume: "1,150,000",
        pe_ratio: 12.0,
        eps_growth: 11.0,
        rsi: 56.8,
        description: "فرصة تجميعية عند مستويات 2.60 ج.م لاستهداف اختراق حاجز 3 جنيهات خلال المدى المتوسط."
    },
    {
        symbol: "NEDA",
        name_ar: "شمال الصعيد للتنمية الزراعية (نيوداب)",
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
        description: "تداولات عرضية ضمن القناة السعرية ومؤشرات الزخم في وضعية تجميع تمهيداً لموجة صاعدة جديدة."
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
        description: "زخم صاعد إيجابي مع زيادة في أحجام الشراء وارتفاع الطلب على الحاصلات التصديرية."
    },
    {
        symbol: "BIGP",
        name_ar: "بي اي جي للتجارة والاستثمار",
        name_en: "BIG Trading & Investment",
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
        description: "حركة أفقية مستقرة مع كثافة تداول عالية على القروش في النطاق السعري الضيق."
    },
    {
        symbol: "CIRA",
        name_ar: "سيرا للتعليم (القاهرة للاستثمار)",
        name_en: "CIRA Education",
        sector: "خدمات تعليمية",
        price: 14.90,
        change: 0.25,
        change_pct: 1.71,
        support: 14.10,
        resistance: 16.20,
        target: 17.50,
        stop_loss: 13.50,
        action: "BUY",
        action_ar: "شراء",
        volume: "710,000",
        pe_ratio: 12.8,
        eps_growth: 20.2,
        rsi: 55.4,
        description: "نمو مستمر في أعداد الطلاب بالجامعات والمدارس التابعة مع توسعات جديدة تعزز الأرباح المستقبلية."
    }
];

// الحالة العامة للتطبيق (State)
const AppState = {
    stocks: [...HALAL_STOCKS_DATA],
    favorites: JSON.parse(localStorage.getItem("egx_halal_favorites") || '["TMGH", "JUFO", "EGAL"]'),
    selectedSymbol: "TMGH",
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
    if (!Array.isArray(AppState.favorites)) {
        AppState.favorites = ["TMGH", "JUFO", "EGAL"];
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
                        <h4 class="font-bold text-white text-sm leading-tight">${stock.name_ar}</h4>
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
                    <span class="text-xs text-gray-400">RSI: <b>${stock.rsi}</b></span>
                </div>
            </div>
        `;
    }).join('');

    if (favGrid) favGrid.innerHTML = content;
    if (favTabList) favTabList.innerHTML = content;
}

// جدول الفحص الشامل (Scan Table)
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
                    <h5 class="font-bold text-white text-sm">${s.name_ar} (${s.symbol})</h5>
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
                        <span class="badge-pure text-xs px-2 py-0.5 rounded-md font-semibold flex items-center gap-1">
                            <i class="fa-solid fa-shield-halved text-[10px]"></i>
                            <span>نقي 100%</span>
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
                <span>ملخص التحليل الفني والمالي:</span>
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
                        label: (context) => `السعر: ${context.parsed.y.toFixed(2)} ج.م`
                    }
                }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(255, 255, 255, 0.04)' },
                    ticks: { color: '#6B7280', font: { family: 'Cairo', size: 11 } }
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

// توليد نقاط بيانية واقعية للرسم البياني
function generateMockPriceHistory(symbol, timeframe) {
    const stock = AppState.stocks.find(s => s.symbol === symbol) || AppState.stocks[0];
    const basePrice = stock.price;
    let count = 30;
    
    if (timeframe === "1D") count = 24;
    else if (timeframe === "1W") count = 7;
    else if (timeframe === "1M") count = 30;
    else if (timeframe === "6M") count = 45;
    else if (timeframe === "1Y") count = 52;

    const labels = [];
    const prices = [];
    const ema = [];

    let current = basePrice * (1 - (stock.change_pct / 100));
    const step = basePrice * 0.015;

    for (let i = 0; i < count; i++) {
        if (timeframe === "1D") labels.push(`${10 + Math.floor(i / 6)}:${(i % 6) * 10 || '00'}`);
        else if (timeframe === "1W") labels.push(`يوم ${i + 1}`);
        else if (timeframe === "1M") labels.push(`${i + 1} أغسطس`);
        else if (timeframe === "6M") labels.push(`أسبوع ${i + 1}`);
        else labels.push(`شهر ${Math.floor(i / 4) + 1}`);

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
