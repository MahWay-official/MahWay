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
    
    // تأثير بارالاكس للخلفية
    const hero = document.querySelector('.hero-bg-animation');
    if (hero) {
        hero.style.transform = `translateY(${scrollY * 0.5}px)`;
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
    const submitText = submitBtn.querySelector('span');
    const submitIcon = submitBtn.querySelector('i');
    const loading = submitBtn.querySelector('.btn-loading');
    
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
        showSuccessMessage('شكراً لك! تم استلام طلب الشحن 🚀<br>سنتواصل معك خلال 24 ساعة.');
        
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

// تأثيرات عند التمرير على العناصر
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// تطبيق تأثيرات على البطاقات
document.querySelectorAll('.service-card, .stat-item, .quick-service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(card);
});

// تأثيرات الكتابة في الحقول
document.querySelectorAll('input, textarea, select').forEach(field => {
    field.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
        this.style.transform = 'translateY(-2px)';
    });
    
    field.addEventListener('blur', function() {
        if (!this.value) {
            this.parentElement.classList.remove('focused');
        }
        this.style.transform = 'translateY(0)';
    });
});

// تأثيرات عند التحميل
window.addEventListener('load', function() {
    console.log('موقع MahWay المتميز جاهز للعمل! 🚀');
    
    // إضافة تأثيرات إضافية للعناصر
    document.querySelectorAll('.service-card').forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // تأثير تحميل الصفحة
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.8s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// تأثير Hover advanced للبطاقات
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
