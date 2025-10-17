// تهيئة AOS للأنيميشن
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// متغيرات الترجمة
const translations = {
    ar: {
        home: "الرئيسية",
        services: "خدماتنا", 
        shippingForm: "طلب شحن",
        contact: "اتصل بنا",
        // ... إضافة كل النصوص الأخرى
    },
    en: {
        home: "Home",
        services: "Services",
        shippingForm: "Shipping Request", 
        contact: "Contact Us"
    },
    tr: {
        home: "Ana Sayfa",
        services: "Hizmetler",
        shippingForm: "Nakliye Talebi",
        contact: "İletişim"
    }
};

// تبديل اللغة
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const lang = this.dataset.lang;
        
        // تحديد الزر النشط
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // تغيير اتجاه الصفحة
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
        
        // تطبيق الترجمة
        applyTranslations(lang);
    });
});

// تطبيق الترجمة
function applyTranslations(lang) {
    // هنا يمكنك إضافة كود لتغيير كل النصوص حسب اللغة
    console.log('تم تغيير اللغة إلى:', lang);
}

// تأثير التمرير للهيدر
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header-animation');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.backdropFilter = 'blur(20px)';
        header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// الانتقال للنموذج
function scrollToForm() {
    document.getElementById('shipping-form').scrollIntoView({
        behavior: 'smooth'
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

// تشغيل العداد عند الظهور
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounters();
            observer.unobserve(entry.target);
        }
    });
});

observer.observe(document.querySelector('.stats'));

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
        
        console.log('بيانات الطلب:', formData);
        
        // رسالة نجاح
        alert('شكراً لك! تم استلام طلب الشحن وسنتواصل معك خلال 24 ساعة.');
        
        // إعادة تعيين النموذج
        this.reset();
        submitBtn.classList.remove('loading');
    }, 2000);
});

// تأثيرات عند التحميل
window.addEventListener('load', function() {
    console.log('موقع MahWay المودرن جاهز للعمل! 🚀');
    
    // إضافة تأثيرات إضافية للعناصر
    document.querySelectorAll('.service-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

// تأثيرات الكتابة في الحقول
document.querySelectorAll('input, textarea, select').forEach(field => {
    field.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    field.addEventListener('blur', function() {
        if (!this.value) {
            this.parentElement.classList.remove('focused');
        }
    });
});
