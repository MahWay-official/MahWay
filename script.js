// script.js
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

// متغيرات الترجمة
const translations = {
    ar: {
        "nav.home": "الرئيسية",
        "nav.services": "خدماتنا",
        "nav.shippingForm": "طلب شحن",
        "nav.contact": "اتصل بنا",
        "nav.quickOrder": "طلب سريع",
        "hero.tagline": "Import Export Shipping",
        "hero.description": "حلول شحن ذكية لتجارة الاستيراد والتصدير العالمية",
        "hero.orderNow": "اطلب شحنتك الآن",
        "hero.exploreServices": "استكشف خدماتنا",
        "stats.shipments": "شحنة ناجحة",
        "stats.countries": "دولة",
        "stats.support": "ساعة دعم",
        "stats.satisfaction": "% رضا العملاء",
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
        "form.send": "إرسال طلب الشحن",
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
        "ratings.title": "تقييم الخدمة",
        "ratings.subtitle": "كيف كانت تجربتك مع MahWay؟",
        "ratings.default": "اضغط على النجوم للتقييم",
        "ratings.submit": "إرسال التقييم",
        "ratings.thanks": "شكراً لك! تم تسجيل تقييمك بنجاح",
        "ratings.based": "بناءً على",
        "ratings.ratings": "تقييم",
        "contact.title": "اتصل بنا",
        "contact.company": "MahWay Shipping",
        "contact.phone": "الهاتف",
        "contact.email": "البريد الإلكتروني",
        "contact.register": "السجل التجاري",
        "footer.rights": "جميع الحقوق محفوظة"
    },
    en: {
        "nav.home": "Home",
        "nav.services": "Services",
        "nav.shippingForm": "Shipping Request",
        "nav.contact": "Contact Us",
        "nav.quickOrder": "Quick Order",
        "hero.tagline": "Import Export Shipping",
        "hero.description": "Smart shipping solutions for global import and export trade",
        "hero.orderNow": "Order Your Shipment Now",
        "hero.exploreServices": "Explore Our Services",
        "stats.shipments": "Successful Shipments",
        "stats.countries": "Countries",
        "stats.support": "Support Hours",
        "stats.satisfaction": "% Customer Satisfaction",
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
        "form.send": "Send Shipping Request",
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
        "ratings.title": "Service Rating",
        "ratings.subtitle": "How was your experience with MahWay?",
        "ratings.default": "Click on stars to rate",
        "ratings.submit": "Submit Rating",
        "ratings.thanks": "Thank you! Your rating has been submitted successfully",
        "ratings.based": "Based on",
        "ratings.ratings": "ratings",
        "contact.title": "Contact Us",
        "contact.company": "MahWay Shipping",
        "contact.phone": "Phone",
        "contact.email": "Email",
        "contact.register": "Commercial Register",
        "footer.rights": "All rights reserved"
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
}

// تهيئة نظام التقييم
function initRatingSystem() {
    const stars = document.querySelectorAll('.star');
    const submitBtn = document.getElementById('submitRating');
    const ratingMessage = document.getElementById('ratingMessage');
    
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            updateStars(rating);
            submitBtn.disabled = false;
            updateRatingMessage(rating);
        });
    });
    
    submitBtn.addEventListener('click', submitRating);
}

function updateStars(rating) {
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        const icon = star.querySelector('i');
        if (index < rating) {
            icon.className = 'fas fa-star';
            star.classList.add('active');
        } else {
            icon.className = 'far fa-star';
            star.classList.remove('active');
        }
    });
}

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
        }
    };
    
    const messageElement = document.getElementById('ratingMessage');
    const langMessages = messages[currentLanguage] || messages.ar;
    messageElement.textContent = langMessages[rating];
}

function submitRating() {
    const stars = document.querySelectorAll('.star');
    let rating = 0;
    
    stars.forEach(star => {
        if (star.classList.contains('active')) {
            rating++;
        }
    });
    
    if (rating > 0) {
        document.getElementById('ratingSuccess').style.display = 'flex';
        document.getElementById('submitRating').style.display = 'none';
        
        // تحديث الإحصائيات
        const totalRatings = document.getElementById('totalRatings');
        const currentTotal = parseInt(totalRatings.textContent);
        totalRatings.textContent = currentTotal + 1;
    }
}

// نظام قائمة الجوال
function initMobileMenu() {
    const mobileToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (!mobileToggle) return;
    
    mobileToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // إغلاق القائمة عند النقر على رابط
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            mobileToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

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
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-count');
        const duration = 2000;
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
}

// تهيئة عند التحميل
document.addEventListener('DOMContentLoaded', function() {
    switchLanguage('ar');
    startCounters();
    initRatingSystem();
    initMobileMenu();
});
