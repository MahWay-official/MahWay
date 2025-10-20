// تهيئة AOS للأنيميشن
AOS.init({
    duration: 1200,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
});

// تهيئة Particles.js
document.addEventListener('DOMContentLoaded', function() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" },
                    resize: true
                }
            }
        });
    }
});

// متغيرات الترجمة الكاملة
const translations = {
    ar: {
        // التنقل
        "nav.home": "الرئيسية",
        "nav.services": "خدماتنا",
        "nav.shippingForm": "طلب شحن",
        "nav.contact": "اتصل بنا",
        "nav.quickOrder": "طلب سريع",
        
        // الهيرو
        "hero.tagline": "Import Export Shipping",
        "hero.description": "حلول شحن ذكية لتجارة الاستيراد والتصدير العالمية",
        "hero.orderNow": "اطلب شحنتك الآن",
        "hero.exploreServices": "استكشف خدماتنا",
        
        // الإحصائيات
        "stats.shipments": "شحنة ناجحة",
        "stats.countries": "دولة",
        "stats.support": "ساعة دعم",
        "stats.satisfaction": "% رضا العملاء",
        
        // الخدمات السريعة
        "quickServices.title": "خدماتنا السريعة",
        "service.fast": "شحن سريع ⚡",
        "service.air": "شحن جوي",
        "service.sea": "شحن بحري",
        "service.fast.desc": "توصيل فوري مع أفضل الأسعار",
        "service.air.desc": "أسرع وسائل النقل للبضائع العاجلة",
        "service.sea.desc": "الحل الأمثل للشحنات الكبيرة",
        "service.time.fast": "24-48 ساعة",
        "service.time.air": "2-5 أيام",
        "service.time.sea": "15-30 يوم",
        
        // نموذج الشحن
        "form.title": "طلب خدمة الشحن",
        "form.subtitle": "املأ البيانات وسنتواصل معك خلال دقائق",
        "form.details": "تفاصيل الشحنة",
        "form.fullName": "الاسم بالكامل *",
        "form.phone": "رقم الهاتف *",
        "form.weight": "الوزن (كجم) *",
        "form.productLink": "رابط المنتج (اختياري)",
        "form.shippingType": "نوع الشحن *",
        "form.shippingRoute": "مسار الشحن *",
        "form.notes": "ملاحظات إضافية",
        "form.chooseType": "اختر نوع الشحن",
        "form.fastOption": "شحن سريع ⚡",
        "form.normalOption": "شحن عادي",
        "form.chooseRoute": "اختر مسار الشحن",
        "form.egyptOption": "داخل مصر 🇪🇬",
        "form.turkeyOption": "داخل تركيا 🇹🇷",
        "form.internationalOption": "شحن دولي (من بلد لبلد) 🌍",
        "form.notesPlaceholder": "أي معلومات إضافية عن الشحنة...",
        "form.send": "إرسال طلب الشحن",
        
        // الخدمات
        "services.title": "خدماتنا المتكاملة",
        "service.express": "شحن اكسبريس",
        "service.international": "شحن دولي",
        "service.storage": "تخزين",
        "service.customs": "تخليص جمركي",
        "service.express.desc": "توصيل فوري مع أفضل وسائل النقل المتاحة",
        "service.international.desc": "توصيل عالمي مع تغطية شاملة للجمارك",
        "service.storage.desc": "خدمات تخزين آمنة مع إدارة المخزون",
        "service.customs.desc": "تخليص جمركي متكامل مع متابعة المستندات",
        "service.feature.fast": "⚡ 24-48 ساعة",
        "service.feature.tracking": "📱 تتبع مباشر",
        "service.feature.countries": "🌍 25 دولة",
        "service.feature.customs": "🛃 تخليص جمركي",
        "service.feature.secure": "🔒 تخزين آمن",
        "service.feature.inventory": "📊 إدارة مخزون",
        "service.feature.documents": "📋 مستندات",
        "service.feature.quick": "⚡ خدمة سريعة",
        
        // التقييم
        "ratings.title": "تقييم الخدمة",
        "ratings.subtitle": "كيف كانت تجربتك مع MahWay؟",
        "ratings.default": "اضغط على النجوم للتقييم",
        "ratings.submit": "إرسال التقييم",
        "ratings.thanks": "شكراً لك! تم تسجيل تقييمك بنجاح",
        "ratings.based": "بناءً على",
        "ratings.ratings": "تقييم",
        
        // اتصل بنا
        "contact.title": "اتصل بنا",
        "contact.company": "MahWay Shipping",
        "contact.info": "معلومات التواصل",
        "contact.phone": "الهاتف",
        "contact.email": "البريد الإلكتروني",
        "contact.register": "السجل التجاري",
        
        // الفوتر
        "footer.rights": "جميع الحقوق محفوظة"
    },
    en: {
        // Navigation
        "nav.home": "Home",
        "nav.services": "Services",
        "nav.shippingForm": "Shipping Request",
        "nav.contact": "Contact Us",
        "nav.quickOrder": "Quick Order",
        
        // Hero
        "hero.tagline": "Import Export Shipping",
        "hero.description": "Smart shipping solutions for global import and export trade",
        "hero.orderNow": "Order Your Shipment Now",
        "hero.exploreServices": "Explore Our Services",
        
        // Statistics
        "stats.shipments": "Successful Shipments",
        "stats.countries": "Countries",
        "stats.support": "Support Hours",
        "stats.satisfaction": "% Customer Satisfaction",
        
        // Quick Services
        "quickServices.title": "Our Quick Services",
        "service.fast": "Fast Shipping ⚡",
        "service.air": "Air Shipping",
        "service.sea": "Sea Shipping",
        "service.fast.desc": "Instant delivery with best prices",
        "service.air.desc": "Fastest transport for urgent goods",
        "service.sea.desc": "Ideal solution for large shipments",
        "service.time.fast": "24-48 Hours",
        "service.time.air": "2-5 Days",
        "service.time.sea": "15-30 Days",
        
        // Shipping Form
        "form.title": "Shipping Service Request",
        "form.subtitle": "Fill the data and we'll contact you within minutes",
        "form.details": "Shipment Details",
        "form.fullName": "Full Name *",
        "form.phone": "Phone Number *",
        "form.weight": "Weight (kg) *",
        "form.productLink": "Product Link (optional)",
        "form.shippingType": "Shipping Type *",
        "form.shippingRoute": "Shipping Route *",
        "form.notes": "Additional Notes",
        "form.chooseType": "Choose Shipping Type",
        "form.fastOption": "Fast Shipping ⚡",
        "form.normalOption": "Normal Shipping",
        "form.chooseRoute": "Choose Shipping Route",
        "form.egyptOption": "Within Egypt 🇪🇬",
        "form.turkeyOption": "Within Turkey 🇹🇷",
        "form.internationalOption": "International (Country to Country) 🌍",
        "form.notesPlaceholder": "Any additional information about the shipment...",
        "form.send": "Send Shipping Request",
        
        // Services
        "services.title": "Our Integrated Services",
        "service.express": "Express Shipping",
        "service.international": "International Shipping",
        "service.storage": "Storage",
        "service.customs": "Customs Clearance",
        "service.express.desc": "Instant delivery with best available transport",
        "service.international.desc": "Global delivery with full customs coverage",
        "service.storage.desc": "Secure storage services with inventory management",
        "service.customs.desc": "Integrated customs clearance with document follow-up",
        "service.feature.fast": "⚡ 24-48 Hours",
        "service.feature.tracking": "📱 Live Tracking",
        "service.feature.countries": "🌍 25 Countries",
        "service.feature.customs": "🛃 Customs Clearance",
        "service.feature.secure": "🔒 Secure Storage",
        "service.feature.inventory": "📊 Inventory Management",
        "service.feature.documents": "📋 Documents",
        "service.feature.quick": "⚡ Fast Service",
        
        // Ratings
        "ratings.title": "Service Rating",
        "ratings.subtitle": "How was your experience with MahWay?",
        "ratings.default": "Click on stars to rate",
        "ratings.submit": "Submit Rating",
        "ratings.thanks": "Thank you! Your rating has been submitted successfully",
        "ratings.based": "Based on",
        "ratings.ratings": "ratings",
        
        // Contact
        "contact.title": "Contact Us",
        "contact.company": "MahWay Shipping",
        "contact.info": "Contact Information",
        "contact.phone": "Phone",
        "contact.email": "Email",
        "contact.register": "Commercial Register",
        
        // Footer
        "footer.rights": "All rights reserved"
    },
    tr: {
        // Navigation
        "nav.home": "Ana Sayfa",
        "nav.services": "Hizmetler",
        "nav.shippingForm": "Nakliye Talebi",
        "nav.contact": "İletişim",
        "nav.quickOrder": "Hızlı Sipariş",
        
        // Hero
        "hero.tagline": "Import Export Shipping",
        "hero.description": "Küresel ithalat ve ihracat ticareti için akıllı nakliye çözümleri",
        "hero.orderNow": "Şimdi Nakliyenizi Sipariş Edin",
        "hero.exploreServices": "Hizmetlerimizi Keşfedin",
        
        // Statistics
        "stats.shipments": "Başarılı Sevkiyat",
        "stats.countries": "Ülke",
        "stats.support": "Destek Saati",
        "stats.satisfaction": "% Müşteri Memnuniyeti",
        
        // Quick Services
        "quickServices.title": "Hızlı Hizmetlerimiz",
        "service.fast": "Hızlı Nakliye ⚡",
        "service.air": "Hava Nakliyesi",
        "service.sea": "Deniz Nakliyesi",
        "service.fast.desc": "En iyi fiyatlarla anında teslimat",
        "service.air.desc": "Acil kargolar için en hızlı taşıma",
        "service.sea.desc": "Büyük sevkiyatlar için ideal çözüm",
        "service.time.fast": "24-48 Saat",
        "service.time.air": "2-5 Gün",
        "service.time.sea": "15-30 Gün",
        
        // Shipping Form
        "form.title": "Nakliye Hizmeti Talebi",
        "form.subtitle": "Verileri doldurun, sizi dakikalar içinde arayalım",
        "form.details": "Sevkiyat Detayları",
        "form.fullName": "Tam Ad *",
        "form.phone": "Telefon Numarası *",
        "form.weight": "Ağırlık (kg) *",
        "form.productLink": "Ürün Bağlantısı (isteğe bağlı)",
        "form.shippingType": "Nakliye Türü *",
        "form.shippingRoute": "Nakliye Rotası *",
        "form.notes": "Ek Notlar",
        "form.chooseType": "Nakliye Türünü Seçin",
        "form.fastOption": "Hızlı Nakliye ⚡",
        "form.normalOption": "Normal Nakliye",
        "form.chooseRoute": "Nakliye Rotasını Seçin",
        "form.egyptOption": "Mısır İçi 🇪🇬",
        "form.turkeyOption": "Türkiye İçi 🇹🇷",
        "form.internationalOption": "Uluslararası (Ülkeden Ülkeye) 🌍",
        "form.notesPlaceholder": "Sevkiyat hakkında herhangi bir ek bilgi...",
        "form.send": "Nakliye Talebini Gönder",
        
        // Services
        "services.title": "Entegre Hizmetlerimiz",
        "service.express": "Ekspres Nakliye",
        "service.international": "Uluslararası Nakliye",
        "service.storage": "Depolama",
        "service.customs": "Gümrük Takibi",
        "service.express.desc": "Mevcut en iyi taşıma ile anında teslimat",
        "service.international.desc": "Tam gümrük kapsamıyla küresel teslimat",
        "service.storage.desc": "Envanter yönetimi ile güvenli depolama hizmetleri",
        "service.customs.desc": "Belge takibi ile entegre gümrük takibi",
        "service.feature.fast": "⚡ 24-48 Saat",
        "service.feature.tracking": "📱 Canlı Takip",
        "service.feature.countries": "🌍 25 Ülke",
        "service.feature.customs": "🛃 Gümrük Takibi",
        "service.feature.secure": "🔒 Güvenli Depolama",
        "service.feature.inventory": "📊 Envanter Yönetimi",
        "service.feature.documents": "📋 Belgeler",
        "service.feature.quick": "⚡ Hızlı Hizmet",
        
        // Ratings
        "ratings.title": "Hizmet Değerlendirmesi",
        "ratings.subtitle": "MahWay deneyiminiz nasıldı?",
        "ratings.default": "Derecelendirmek için yıldızlara tıklayın",
        "ratings.submit": "Değerlendirmeyi Gönder",
        "ratings.thanks": "Teşekkürler! Derecelendirmeniz başarıyla gönderildi",
        "ratings.based": "Dayalı",
        "ratings.ratings": "değerlendirme",
        
        // Contact
        "contact.title": "Bize Ulaşın",
        "contact.company": "MahWay Shipping",
        "contact.info": "İletişim Bilgileri",
        "contact.phone": "Telefon",
        "contact.email": "E-posta",
        "contact.register": "Ticaret Sicil No",
        
        // Footer
        "footer.rights": "Tüm hakları saklıdır"
    }
};

// اللغة الحالية
let currentLanguage = 'ar';

// تبديل اللغة
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const lang = this.dataset.lang;
        switchLanguage(lang);
    });
});

// تطبيق الترجمة
function switchLanguage(lang) {
    currentLanguage = lang;
    
    // تحديث الأزرار النشطة
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`.lang-btn[data-lang="${lang}"]`).classList.add('active');
    
    // تغيير اتجاه الصفحة
    if (lang === 'ar') {
        document.documentElement.dir = 'rtl';
        document.documentElement.lang = 'ar';
    } else {
        document.documentElement.dir = 'ltr';
        document.documentElement.lang = lang;
    }
    
    // تطبيق جميع الترجمات
    applyAllTranslations();
}

// تطبيق جميع الترجمات
function applyAllTranslations() {
    const langData = translations[currentLanguage];
    
    // ترجمة كل العناصر مع data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (langData[key]) {
            element.textContent = langData[key];
        }
    });
    
    // ترجمة الـ placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (langData[key]) {
            element.placeholder = langData[key];
        }
    });
    
    // ترجمة خيارات الـ select
    document.querySelectorAll('select option[data-i18n]').forEach(option => {
        const key = option.getAttribute('data-i18n');
        if (langData[key]) {
            option.textContent = langData[key];
        }
    });
}

// نظام التقييم المحسن
let currentRating = 0;
let hasRated = false;

// تهيئة نظام التقييم المحسن
function initRatingSystem() {
    // التحقق إذا كان المستخدم قد قيم مسبقاً
    const savedRating = localStorage.getItem('mahway_rating');
    if (savedRating) {
        hasRated = true;
        currentRating = parseInt(savedRating);
        updateStarsDisplay(currentRating);
        showRatingSuccess();
        return;
    }

    // إضافة event listeners للنجوم
    document.querySelectorAll('.star').forEach(star => {
        star.addEventListener('click', handleStarClick);
        star.addEventListener('touchstart', handleStarTouch, { passive: true });
        star.addEventListener('mouseenter', handleStarHover);
    });

    // إضافة event listener للزر
    const submitBtn = document.getElementById('submitRating');
    if (submitBtn) {
        submitBtn.addEventListener('click', submitRating);
    }

    // إضافة event listener لمساحة النجوم ككل
    const starsContainer = document.getElementById('starsContainer');
    if (starsContainer) {
        starsContainer.addEventListener('mouseleave', () => {
            if (!hasRated) {
                updateStarsDisplay(currentRating);
            }
        });
    }
}

// التعامل مع اللمس على النجوم (للجوال)
function handleStarTouch(e) {
    if (hasRated) return;
    
    const star = e.currentTarget;
    const rating = parseInt(star.getAttribute('data-rating'));
    currentRating = rating;
    
    updateStarsDisplay(rating);
    updateRatingMessage(rating);
    enableSubmitButton();
    
    // منع السلوك الافتراضي
    e.preventDefault();
}

// التعامل مع النقر على النجوم
function handleStarClick(e) {
    if (hasRated) return;
    
    const star = e.currentTarget;
    const rating = parseInt(star.getAttribute('data-rating'));
    currentRating = rating;
    
    updateStarsDisplay(rating);
    updateRatingMessage(rating);
    enableSubmitButton();
}

// التعامل مع hover على النجوم
function handleStarHover(e) {
    if (hasRated) return;
    
    const star = e.currentTarget;
    const rating = parseInt(star.getAttribute('data-rating'));
    
    updateStarsDisplay(rating, true);
}

// تحديث عرض النجوم - الإصدار المحسن
function updateStarsDisplay(rating, isHover = false) {
    const stars = document.querySelectorAll('.star');
    
    stars.forEach((star, index) => {
        const starRating = parseInt(star.getAttribute('data-rating'));
        const icon = star.querySelector('i');
        
        if (starRating <= rating) {
            icon.className = 'fas fa-star';
            star.classList.add('active');
            star.style.color = '#ffc107';
        } else {
            icon.className = 'far fa-star';
            star.classList.remove('active');
            star.style.color = '#ddd';
        }
    });
    
    // إعادة التعيين إذا لم يكن hover ولم يكن هناك تقييم
    if (!isHover && rating === 0 && !hasRated) {
        stars.forEach(star => {
            const icon = star.querySelector('i');
            icon.className = 'far fa-star';
            star.classList.remove('active');
            star.style.color = '#ddd';
        });
    }
}

// تحديث رسالة التقييم
function updateRatingMessage(rating) {
    const messages = {
        ar: {
            1: "سيء جداً 😞",
            2: "ليس جيداً 🙁",
            3: "جيد 😊",
            4: "جيد جداً 😄",
            5: "ممتاز! 🤩"
        },
        en: {
            1: "Very Bad 😞",
            2: "Not Good 🙁",
            3: "Good 😊",
            4: "Very Good 😄",
            5: "Excellent! 🤩"
        },
        tr: {
            1: "Çok Kötü 😞",
            2: "İyi Değil 🙁",
            3: "İyi 😊",
            4: "Çok İyi 😄",
            5: "Mükemmel! 🤩"
        }
    };
    
    const messageElement = document.getElementById('ratingMessage');
    if (messageElement) {
        const langMessages = messages[currentLanguage] || messages.ar;
        messageElement.textContent = langMessages[rating] || langMessages[0];
    }
}

// تمكين زر الإرسال
function enableSubmitButton() {
    const submitBtn = document.getElementById('submitRating');
    if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
        submitBtn.style.cursor = 'pointer';
        submitBtn.style.pointerEvents = 'all';
    }
}

// إرسال التقييم
function submitRating() {
    if (hasRated || currentRating === 0) return;
    
    // حفظ التقييم في localStorage
    localStorage.setItem('mahway_rating', currentRating.toString());
    localStorage.setItem('mahway_rating_date', new Date().toISOString());
    
    hasRated = true;
    showRatingSuccess();
    updateRatingStats();
    
    // إرسال البيانات للخادم (يمكنك إضافة كود AJAX هنا)
    console.log('تم إرسال التقييم:', currentRating);
}

// عرض رسالة النجاح
function showRatingSuccess() {
    const starsContainer = document.getElementById('starsContainer');
    const submitBtn = document.getElementById('submitRating');
    const successDiv = document.getElementById('ratingSuccess');
    
    if (starsContainer) {
        starsContainer.style.opacity = '0.5';
        starsContainer.style.pointerEvents = 'none';
    }
    
    if (submitBtn) {
        submitBtn.style.display = 'none';
    }
    
    if (successDiv) {
        successDiv.style.display = 'flex';
        
        // تحديث رسالة النجاح حسب اللغة
        const successMessages = {
            ar: "شكراً لك! تم تسجيل تقييمك بنجاح",
            en: "Thank you! Your rating has been submitted successfully",
            tr: "Teşekkürler! Derecelendirmeniz başarıyla gönderildi"
        };
        
        successDiv.querySelector('span').textContent = successMessages[currentLanguage] || successMessages.ar;
    }
}

// تحديث إحصائيات التقييم (محاكاة)
function updateRatingStats() {
    // في الواقع الفعلي، هتبقى البيانات من الخادم
    const averageElement = document.getElementById('averageRating');
    const totalElement = document.getElementById('totalRatings');
    
    // محاكاة تحديث الإحصائيات
    const currentAverage = parseFloat(averageElement.textContent);
    const currentTotal = parseInt(totalElement.textContent);
    
    // حساب المتوسط الجديد
    const newTotal = currentTotal + 1;
    const newAverage = ((currentAverage * currentTotal) + currentRating) / newTotal;
    
    // تحديث الواجهة
    averageElement.textContent = newAverage.toFixed(1);
    totalElement.textContent = newTotal;
    
    // تحديث النجوم في الإحصائيات
    updateAverageStars(newAverage);
}

// تحديث النجوم في قسم الإحصائيات
function updateAverageStars(average) {
    const starsContainer = document.querySelector('.average-stars');
    if (!starsContainer) return;
    
    starsContainer.innerHTML = '';
    
    const fullStars = Math.floor(average);
    const hasHalfStar = average % 1 >= 0.5;
    
    // إضافة النجوم الكاملة
    for (let i = 0; i < fullStars; i++) {
        const star = document.createElement('i');
        star.className = 'fas fa-star';
        starsContainer.appendChild(star);
    }
    
    // إضافة نصف نجمة إذا لزم الأمر
    if (hasHalfStar) {
        const halfStar = document.createElement('i');
        halfStar.className = 'fas fa-star-half-alt';
        starsContainer.appendChild(halfStar);
    }
    
    // إضافة النجوم الفارغة
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        const emptyStar = document.createElement('i');
        emptyStar.className = 'far fa-star';
        starsContainer.appendChild(emptyStar);
    }
}

// نظام قائمة الجوال المحسن
function initMobileMenu() {
    const mobileToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    
    if (!mobileToggle || !navLinks) return;
    
    // إنشاء overlay
    let overlay = document.querySelector('.nav-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'nav-overlay';
        document.body.appendChild(overlay);
    }
    
    // فتح/إغلاق القائمة
    mobileToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
        
        if (navLinks.classList.contains('active')) {
            body.style.overflow = 'hidden';
            body.classList.add('menu-open');
        } else {
            body.style.overflow = '';
            body.classList.remove('menu-open');
        }
    });
    
    // إغلاق القائمة عند النقر على overlay
    overlay.addEventListener('click', function() {
        mobileToggle.classList.remove('active');
        navLinks.classList.remove('active');
        this.classList.remove('active');
        body.style.overflow = '';
        body.classList.remove('menu-open');
    });
    
    // إغلاق القائمة عند النقر على رابط
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            mobileToggle.classList.remove('active');
            navLinks.classList.remove('active');
            overlay.classList.remove('active');
            body.style.overflow = '';
            body.classList.remove('menu-open');
        });
    });
    
    // إغلاق القائمة عند تغيير حجم النافذة
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            mobileToggle.classList.remove('active');
            navLinks.classList.remove('active');
            overlay.classList.remove('active');
            body.style.overflow = '';
            body.classList.remove('menu-open');
        }
    });
    
    // إغلاق القائمة عند الضغط على زر الهروب
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            mobileToggle.classList.remove('active');
            navLinks.classList.remove('active');
            overlay.classList.remove('active');
            body.style.overflow = '';
            body.classList.remove('menu-open');
        }
    });
}

// إصلاح مشاكل اللمس في الجوال - محسن
function fixTouchIssues() {
    // منع الزوم المزدوج
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function (event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
    
    // تحسين أداء التمرير
    document.addEventListener('touchmove', function (event) {
        if (event.scale !== 1) {
            event.preventDefault();
        }
    }, { passive: false });
    
    // إصلاح ارتفاع 100vh في الجوال
    function setVH() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    setVH();
    window.addEventListener('resize', setVH);
    window.addEventListener('orientationchange', setVH);
}

// تأثير التمرير للهيدر
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header-animation');
    const scrollY = window.scrollY;
    
    if (scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.backdropFilter = 'blur(20px)';
        header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
        header.style.padding = '0.5rem 0';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = 'none';
        header.style.padding = '1rem 0';
    }
});

// الانتقال للنموذج
function scrollToForm() {
    document.getElementById('shipping-form').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// الانتقال للخدمات
function scrollToServices() {
    document.getElementById('services').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// عدّاد الإحصائيات
function startCounters() {
    const counters = document.querySelectorAll('.stat-number');
    let started = false;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !started) {
                started = true;
                
                counters.forEach(counter => {
                    const target = +counter.getAttribute('data-count');
                    const duration = 2500;
                    const step = target / (duration / 16);
                    let current = 0;
                    
                    const updateCounter = () => {
                        current += step;
                        if (current < target) {
                            counter.textContent = Math.ceil(current);
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.textContent = target;
                        }
                    };
                    
                    updateCounter();
                });
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(document.querySelector('.stats'));
}

// نموذج الشحن
document.getElementById('shippingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('.submit-btn');
    submitBtn.classList.add('loading');
    
    // محاكاة إرسال البيانات
    setTimeout(() => {
        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            weight: document.getElementById('weight').value,
            productLink: document.getElementById('product-link').value,
            shippingType: document.getElementById('shipping-type').value,
            shippingRoute: document.getElementById('shipping-route').value,
            notes: document.getElementById('notes').value
        };
        
        console.log('بيانات طلب الشحن:', formData);
        
        // رسالة نجاح متحركة
        showSuccessMessage(currentLanguage === 'ar' ? 
            'شكراً لك! تم استلام طلب الشحن 🚀<br>سنتواصل معك خلال 24 ساعة.' :
            currentLanguage === 'en' ?
            'Thank you! Shipping request received 🚀<br>We will contact you within 24 hours.' :
            'Teşekkürler! Nakliye talebiniz alındı 🚀<br>24 saat içinde sizinle iletişime geçeceğiz.'
        );
        
        // إعادة تعيين النموذج
        this.reset();
        submitBtn.classList.remove('loading');
    }, 3000);
});

// عرض رسالة النجاح
function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = message;
    successDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        background: linear-gradient(135deg, #10b981, #059669);
        color: white;
        padding: 2rem 3rem;
        border-radius: 20px;
        box-shadow: 0 25px 50px rgba(0,0,0,0.3);
        z-index: 10000;
        text-align: center;
        font-size: 1.3rem;
        font-weight: 700;
        animation: popIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
    `;
    
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
        successDiv.style.animation = 'popOut 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards';
        setTimeout(() => {
            document.body.removeChild(successDiv);
        }, 600);
    }, 3000);
}

// إضافة أنيميشن للرسالة
const style = document.createElement('style');
style.textContent = `
    @keyframes popIn {
        0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
        70% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    }
    @keyframes popOut {
        0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        30% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
    }
`;
document.head.appendChild(style);

// إصلاح viewport للـ iOS
function fixViewportForIOS() {
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport && /iPhone|iPad|iPod/.test(navigator.userAgent)) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover');
    }
}

// تهيئة الترجمة عند التحميل
document.addEventListener('DOMContentLoaded', function() {
    switchLanguage('ar');
    startCounters();
    initRatingSystem();
    initMobileMenu();
    fixTouchIssues();
    fixViewportForIOS();
    
    // تأثيرات Hover للبطاقات (لأجهزة الكمبيوتر فقط)
    if (window.innerWidth > 768) {
        document.querySelectorAll('.service-card, .quick-service-card').forEach(card => {
            card.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const angleY = (x - centerX) / 25;
                const angleX = (centerY - y) / 25;
                
                this.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.05)`;
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            });
        });
    }
});

// منع تكبير الصفحة على iOS
let lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

document.addEventListener('touchmove', function (event) {
    if (event.scale !== 1) {
        event.preventDefault();
    }
}, { passive: false });
