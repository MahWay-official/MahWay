// تهيئة AOS للأنيميشن
AOS.init({
    duration: 1200,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
});

// متغيرات الترجمة الكاملة
const translations = {
    ar: {
        // التنقل
        home: "الرئيسية",
        services: "خدماتنا",
        shippingForm: "طلب شحن",
        contact: "اتصل بنا",
        
        // الهيرو
        tagline: "Import Export Shipping",
        heroDescription: "حلول شحن ذكية لتجارة الاستيراد والتصدير العالمية",
        orderNow: "اطلب شحنتك الآن",
        exploreServices: "استكشف خدماتنا",
        
        // الإحصائيات
        successfulShipments: "شحنة ناجحة",
        countries: "دولة",
        supportHours: "ساعة دعم",
        customerSatisfaction: "% رضا العملاء",
        
        // الخدمات السريعة
        quickServices: "خدماتنا السريعة",
        fastShipping: "شحن سريع ⚡",
        airShipping: "شحن جوي",
        seaShipping: "شحن بحري",
        fastShippingDesc: "توصيل فوري مع أفضل الأسعار",
        airShippingDesc: "أسرع وسائل النقل للبضائع العاجلة",
        seaShippingDesc: "الحل الأمثل للشحنات الكبيرة",
        hours24: "24-48 ساعة",
        days2_5: "2-5 أيام",
        days15_30: "15-30 يوم",
        
        // نموذج الشحن
        shippingRequest: "طلب خدمة الشحن",
        formSubtitle: "املأ البيانات وسنتواصل معك خلال دقائق",
        shipmentDetails: "تفاصيل الشحنة",
        fullName: "الاسم بالكامل *",
        phoneNumber: "رقم الهاتف *",
        weight: "الوزن (كجم) *",
        productLink: "رابط المنتج (اختياري)",
        shippingType: "نوع الشحن *",
        shippingRoute: "مسار الشحن *",
        additionalNotes: "ملاحظات إضافية",
        chooseShippingType: "اختر نوع الشحن",
        fastShippingOption: "شحن سريع ⚡",
        normalShipping: "شحن عادي",
        chooseRoute: "اختر مسار الشحن",
        withinEgypt: "داخل مصر 🇪🇬",
        withinTurkey: "داخل تركيا 🇹🇷",
        international: "شحن دولي (من بلد لبلد) 🌍",
        notesPlaceholder: "أي معلومات إضافية عن الشحنة...",
        sendRequest: "إرسال طلب الشحن",
        
        // الخدمات
        ourServices: "خدماتنا المتكاملة",
        expressShipping: "شحن اكسبريس",
        internationalShipping: "شحن دولي",
        storage: "تخزين",
        customsClearance: "تخليص جمركي",
        expressDesc: "توصيل فوري مع أفضل وسائل النقل المتاحة",
        internationalDesc: "توصيل عالمي مع تغطية شاملة للجمارك",
        storageDesc: "خدمات تخزين آمنة مع إدارة المخزون",
        customsDesc: "تخليص جمركي متكامل مع متابعة المستندات",
        tracking: "تتبع مباشر",
        customs: "تخليص جمركي",
        secureStorage: "تخزين آمن",
        inventory: "إدارة مخزون",
        documents: "مستندات",
        fastService: "خدمة سريعة",
        
        // اتصل بنا
        contactUs: "اتصل بنا",
        contactInfo: "معلومات التواصل",
        phone: "الهاتف",
        email: "البريد الإلكتروني",
        commercialRegister: "السجل التجاري",
        
        // الفوتر
        allRights: "جميع الحقوق محفوظة"
    },
    en: {
        // Navigation
        home: "Home",
        services: "Services",
        shippingForm: "Shipping Request",
        contact: "Contact Us",
        
        // Hero
        tagline: "Import Export Shipping",
        heroDescription: "Smart shipping solutions for global import and export trade",
        orderNow: "Order Your Shipment Now",
        exploreServices: "Explore Our Services",
        
        // Statistics
        successfulShipments: "Successful Shipments",
        countries: "Countries",
        supportHours: "Support Hours",
        customerSatisfaction: "% Customer Satisfaction",
        
        // Quick Services
        quickServices: "Our Quick Services",
        fastShipping: "Fast Shipping ⚡",
        airShipping: "Air Shipping",
        seaShipping: "Sea Shipping",
        fastShippingDesc: "Instant delivery with best prices",
        airShippingDesc: "Fastest transport for urgent goods",
        seaShippingDesc: "Ideal solution for large shipments",
        hours24: "24-48 Hours",
        days2_5: "2-5 Days",
        days15_30: "15-30 Days",
        
        // Shipping Form
        shippingRequest: "Shipping Service Request",
        formSubtitle: "Fill the data and we'll contact you within minutes",
        shipmentDetails: "Shipment Details",
        fullName: "Full Name *",
        phoneNumber: "Phone Number *",
        weight: "Weight (kg) *",
        productLink: "Product Link (optional)",
        shippingType: "Shipping Type *",
        shippingRoute: "Shipping Route *",
        additionalNotes: "Additional Notes",
        chooseShippingType: "Choose Shipping Type",
        fastShippingOption: "Fast Shipping ⚡",
        normalShipping: "Normal Shipping",
        chooseRoute: "Choose Shipping Route",
        withinEgypt: "Within Egypt 🇪🇬",
        withinTurkey: "Within Turkey 🇹🇷",
        international: "International (Country to Country) 🌍",
        notesPlaceholder: "Any additional information about the shipment...",
        sendRequest: "Send Shipping Request",
        
        // Services
        ourServices: "Our Integrated Services",
        expressShipping: "Express Shipping",
        internationalShipping: "International Shipping",
        storage: "Storage",
        customsClearance: "Customs Clearance",
        expressDesc: "Instant delivery with best available transport",
        internationalDesc: "Global delivery with full customs coverage",
        storageDesc: "Secure storage services with inventory management",
        customsDesc: "Integrated customs clearance with document follow-up",
        tracking: "Live Tracking",
        customs: "Customs Clearance",
        secureStorage: "Secure Storage",
        inventory: "Inventory Management",
        documents: "Documents",
        fastService: "Fast Service",
        
        // Contact
        contactUs: "Contact Us",
        contactInfo: "Contact Information",
        phone: "Phone",
        email: "Email",
        commercialRegister: "Commercial Register",
        
        // Footer
        allRights: "All rights reserved"
    },
    tr: {
        // Navigation
        home: "Ana Sayfa",
        services: "Hizmetler",
        shippingForm: "Nakliye Talebi",
        contact: "İletişim",
        
        // Hero
        tagline: "Import Export Shipping",
        heroDescription: "Küresel ithalat ve ihracat ticareti için akıllı nakliye çözümleri",
        orderNow: "Şimdi Nakliyenizi Sipariş Edin",
        exploreServices: "Hizmetlerimizi Keşfedin",
        
        // Statistics
        successfulShipments: "Başarılı Sevkiyat",
        countries: "Ülke",
        supportHours: "Destek Saati",
        customerSatisfaction: "% Müşteri Memnuniyeti",
        
        // Quick Services
        quickServices: "Hızlı Hizmetlerimiz",
        fastShipping: "Hızlı Nakliye ⚡",
        airShipping: "Hava Nakliyesi",
        seaShipping: "Deniz Nakliyesi",
        fastShippingDesc: "En iyi fiyatlarla anında teslimat",
        airShippingDesc: "Acil kargolar için en hızlı taşıma",
        seaShippingDesc: "Büyük sevkiyatlar için ideal çözüm",
        hours24: "24-48 Saat",
        days2_5: "2-5 Gün",
        days15_30: "15-30 Gün",
        
        // Shipping Form
        shippingRequest: "Nakliye Hizmeti Talebi",
        formSubtitle: "Verileri doldurun, sizi dakikalar içinde arayalım",
        shipmentDetails: "Sevkiyat Detayları",
        fullName: "Tam Ad *",
        phoneNumber: "Telefon Numarası *",
        weight: "Ağırlık (kg) *",
        productLink: "Ürün Bağlantısı (isteğe bağlı)",
        shippingType: "Nakliye Türü *",
        shippingRoute: "Nakliye Rotası *",
        additionalNotes: "Ek Notlar",
        chooseShippingType: "Nakliye Türünü Seçin",
        fastShippingOption: "Hızlı Nakliye ⚡",
        normalShipping: "Normal Nakliye",
        chooseRoute: "Nakliye Rotasını Seçin",
        withinEgypt: "Mısır İçi 🇪🇬",
        withinTurkey: "Türkiye İçi 🇹🇷",
        international: "Uluslararası (Ülkeden Ülkeye) 🌍",
        notesPlaceholder: "Sevkiyat hakkında herhangi bir ek bilgi...",
        sendRequest: "Nakliye Talebini Gönder",
        
        // Services
        ourServices: "Entegre Hizmetlerimiz",
        expressShipping: "Ekspres Nakliye",
        internationalShipping: "Uluslararası Nakliye",
        storage: "Depolama",
        customsClearance: "Gümrük Takibi",
        expressDesc: "Mevcut en iyi taşıma ile anında teslimat",
        internationalDesc: "Tam gümrük kapsamıyla küresel teslimat",
        storageDesc: "Envanter yönetimi ile güvenli depolama hizmetleri",
        customsDesc: "Belge takibi ile entegre gümrük takibi",
        tracking: "Canlı Takip",
        customs: "Gümrük Takibi",
        secureStorage: "Güvenli Depolama",
        inventory: "Envanter Yönetimi",
        documents: "Belgeler",
        fastService: "Hızlı Hizmet",
        
        // Contact
        contactUs: "Bize Ulaşın",
        contactInfo: "İletişim Bilgileri",
        phone: "Telefon",
        email: "E-posta",
        commercialRegister: "Ticaret Sicil No",
        
        // Footer
        allRights: "Tüm hakları saklıdır"
    }
};

// اللغة الحالية
let currentLanguage = 'ar';

// تبديل اللغة
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const lang = this.dataset.lang;
        
        // تحديد الزر النشط
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // تغيير اللغة
        switchLanguage(lang);
    });
});

// تطبيق الترجمة
function switchLanguage(lang) {
    currentLanguage = lang;
    
    // تغيير اتجاه الصفحة
    if (lang === 'ar') {
        document.documentElement.dir = 'rtl';
        document.documentElement.lang = 'ar';
    } else if (lang === 'en') {
        document.documentElement.dir = 'ltr';
        document.documentElement.lang = 'en';
    } else if (lang === 'tr') {
        document.documentElement.dir = 'ltr';
        document.documentElement.lang = 'tr';
    }
    
    // تطبيق جميع الترجمات
    applyAllTranslations();
}

// تطبيق جميع الترجمات
function applyAllTranslations() {
    const langData = translations[currentLanguage];
    
    // التنقل
    updateElementText('[data-i18n="nav.home"]', langData.home);
    updateElementText('[data-i18n="nav.services"]', langData.services);
    updateElementText('[data-i18n="nav.shippingForm"]', langData.shippingForm);
    updateElementText('[data-i18n="nav.contact"]', langData.contact);
    
    // الهيرو
    updateElementText('[data-i18n="hero.tagline"]', langData.tagline);
    updateElementText('[data-i18n="hero.description"]', langData.heroDescription);
    updateElementText('[data-i18n="hero.orderNow"]', langData.orderNow);
    updateElementText('[data-i18n="hero.exploreServices"]', langData.exploreServices);
    
    // الإحصائيات
    updateElementText('[data-i18n="stats.shipments"]', langData.successfulShipments);
    updateElementText('[data-i18n="stats.countries"]', langData.countries);
    updateElementText('[data-i18n="stats.support"]', langData.supportHours);
    updateElementText('[data-i18n="stats.satisfaction"]', langData.customerSatisfaction);
    
    // الخدمات السريعة
    updateElementText('[data-i18n="quickServices.title"]', langData.quickServices);
    updateElementText('[data-i18n="service.fast"]', langData.fastShipping);
    updateElementText('[data-i18n="service.air"]', langData.airShipping);
    updateElementText('[data-i18n="service.sea"]', langData.seaShipping);
    updateElementText('[data-i18n="service.fast.desc"]', langData.fastShippingDesc);
    updateElementText('[data-i18n="service.air.desc"]', langData.airShippingDesc);
    updateElementText('[data-i18n="service.sea.desc"]', langData.seaShippingDesc);
    
    // نموذج الشحن
    updateElementText('[data-i18n="form.title"]', langData.shippingRequest);
    updateElementText('[data-i18n="form.subtitle"]', langData.formSubtitle);
    updateElementText('[data-i18n="form.details"]', langData.shipmentDetails);
    updateElementText('[data-i18n="form.fullName"]', langData.fullName);
    updateElementText('[data-i18n="form.phone"]', langData.phoneNumber);
    updateElementText('[data-i18n="form.weight"]', langData.weight);
    updateElementText('[data-i18n="form.productLink"]', langData.productLink);
    updateElementText('[data-i18n="form.shippingType"]', langData.shippingType);
    updateElementText('[data-i18n="form.shippingRoute"]', langData.shippingRoute);
    updateElementText('[data-i18n="form.notes"]', langData.additionalNotes);
    updateElementText('[data-i18n="form.send"]', langData.sendRequest);
    
    // تحديث placeholders و options
    updatePlaceholder('name', langData.fullName);
    updatePlaceholder('phone', langData.phoneNumber);
    updatePlaceholder('weight', langData.weight);
    updatePlaceholder('product-link', langData.productLink);
    updatePlaceholder('notes', langData.notesPlaceholder);
    
    updateSelectOptions('shipping-type', [
        { value: '', text: langData.chooseShippingType },
        { value: 'fast', text: langData.fastShippingOption },
        { value: 'normal', text: langData.normalShipping }
    ]);
    
    updateSelectOptions('shipping-route', [
        { value: '', text: langData.chooseRoute },
        { value: 'egypt', text: langData.withinEgypt },
        { value: 'turkey', text: langData.withinTurkey },
        { value: 'international', text: langData.international }
    ]);
    
    // الخدمات
    updateElementText('[data-i18n="services.title"]', langData.ourServices);
    updateElementText('[data-i18n="service.express"]', langData.expressShipping);
    updateElementText('[data-i18n="service.international"]', langData.internationalShipping);
    updateElementText('[data-i18n="service.storage"]', langData.storage);
    updateElementText('[data-i18n="service.customs"]', langData.customsClearance);
    updateElementText('[data-i18n="service.express.desc"]', langData.expressDesc);
    updateElementText('[data-i18n="service.international.desc"]', langData.internationalDesc);
    updateElementText('[data-i18n="service.storage.desc"]', langData.storageDesc);
    updateElementText('[data-i18n="service.customs.desc"]', langData.customsDesc);
    
    // اتصل بنا
    updateElementText('[data-i18n="contact.title"]', langData.contactUs);
    updateElementText('[data-i18n="contact.info"]', langData.contactInfo);
    updateElementText('[data-i18n="contact.phone"]', langData.phone);
    updateElementText('[data-i18n="contact.email"]', langData.email);
    updateElementText('[data-i18n="contact.register"]', langData.commercialRegister);
    
    // الفوتر
    updateElementText('[data-i18n="footer.rights"]', langData.allRights);
}

// دالة مساعدة لتحديث النص
function updateElementText(selector, text) {
    const element = document.querySelector(selector);
    if (element) {
        element.textContent = text;
    }
}

// دالة لتحديث الـ placeholder
function updatePlaceholder(fieldId, text) {
    const field = document.getElementById(fieldId);
    if (field) {
        field.placeholder = text;
    }
}

// دالة لتحديث خيارات الـ select
function updateSelectOptions(selectId, options) {
    const select = document.getElementById(selectId);
    if (select) {
        select.innerHTML = '';
        options.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option.value;
            optionElement.textContent = option.text;
            select.appendChild(optionElement);
        });
    }
}

// تهيئة الترجمة عند التحميل
document.addEventListener('DOMContentLoaded', function() {
    switchLanguage('ar');
});

// بقية الكود كما هو...
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

// تشغيل العداد عند التحميل
document.addEventListener('DOMContentLoaded', startCounters);

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
