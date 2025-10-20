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
const translations = { ... نفس محتوى الترجمة اللي عندك بدون تغيير ... };

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
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`.lang-btn[data-lang="${lang}"]`).classList.add('active');
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    applyAllTranslations();
}

function applyAllTranslations() {
    const langData = translations[currentLanguage];
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (langData[key]) element.textContent = langData[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (langData[key]) element.placeholder = langData[key];
    });
    document.querySelectorAll('select option[data-i18n]').forEach(option => {
        const key = option.getAttribute('data-i18n');
        if (langData[key]) option.textContent = langData[key];
    });
}

// نظام التقييم
let currentRating = 0;
let hasRated = false;

function initRatingSystem() {
    const savedRating = localStorage.getItem('mahway_rating');
    if (savedRating) {
        hasRated = true;
        currentRating = parseInt(savedRating);
        updateStarsDisplay(currentRating);
        showRatingSuccess();
        return;
    }
    document.querySelectorAll('.star').forEach(star => {
        star.addEventListener('click', handleStarClick);
        star.addEventListener('mouseenter', handleStarHover);
    });
    document.getElementById('submitRating').addEventListener('click', submitRating);
}

function handleStarClick(e) {
    if (hasRated) return;
    const rating = parseInt(e.currentTarget.getAttribute('data-rating'));
    currentRating = rating;
    updateStarsDisplay(rating);
    updateRatingMessage(rating);
    enableSubmitButton();
}

function handleStarHover(e) {
    if (hasRated) return;
    const rating = parseInt(e.currentTarget.getAttribute('data-rating'));
    updateStarsDisplay(rating, true);
}

function updateStarsDisplay(rating, isHover = false) {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        const r = parseInt(star.getAttribute('data-rating'));
        const icon = star.querySelector('i');
        if (r <= rating) {
            icon.className = 'fas fa-star';
            star.classList.add('active');
        } else {
            icon.className = 'far fa-star';
            star.classList.remove('active');
        }
    });
    if (!isHover && rating === 0 && !hasRated) {
        stars.forEach(star => {
            const icon = star.querySelector('i');
            icon.className = 'far fa-star';
            star.classList.remove('active');
        });
    }
}

function updateRatingMessage(rating) {
    const messages = {
        ar: {1:"سيء جداً 😞",2:"ليس جيداً 🙁",3:"جيد 😊",4:"جيد جداً 😄",5:"ممتاز! 🤩"},
        en: {1:"Very Bad 😞",2:"Not Good 🙁",3:"Good 😊",4:"Very Good 😄",5:"Excellent! 🤩"},
        tr: {1:"Çok Kötü 😞",2:"İyi Değil 🙁",3:"İyi 😊",4:"Çok İyi 😄",5:"Mükemmel! 🤩"}
    };
    const msg = document.getElementById('ratingMessage');
    msg.textContent = (messages[currentLanguage] || messages.ar)[rating];
}

function enableSubmitButton() {
    const submitBtn = document.getElementById('submitRating');
    submitBtn.disabled = false;
    submitBtn.style.opacity = '1';
    submitBtn.style.pointerEvents = 'all';
}

function submitRating() {
    if (hasRated || currentRating === 0) return;
    localStorage.setItem('mahway_rating', currentRating.toString());
    localStorage.setItem('mahway_rating_date', new Date().toISOString());
    hasRated = true;
    showRatingSuccess();
    updateRatingStats();
}

function showRatingSuccess() {
    const starsContainer = document.getElementById('starsContainer');
    const submitBtn = document.getElementById('submitRating');
    const successDiv = document.getElementById('ratingSuccess');
    starsContainer.style.opacity = '0.5';
    starsContainer.style.pointerEvents = 'none';
    submitBtn.style.display = 'none';
    successDiv.style.display = 'flex';
    const msg = {
        ar: "شكراً لك! تم تسجيل تقييمك بنجاح",
        en: "Thank you! Your rating has been submitted successfully",
        tr: "Teşekkürler! Derecelendirmeniz başarıyla gönderildi"
    };
    successDiv.querySelector('span').textContent = msg[currentLanguage] || msg.ar;
}

function updateRatingStats() {
    const averageElement = document.getElementById('averageRating');
    const totalElement = document.getElementById('totalRatings');
    const currentAverage = parseFloat(averageElement.textContent);
    const currentTotal = parseInt(totalElement.textContent);
    const newTotal = currentTotal + 1;
    const newAverage = ((currentAverage * currentTotal) + currentRating) / newTotal;
    averageElement.textContent = newAverage.toFixed(1);
    totalElement.textContent = newTotal;
    updateAverageStars(newAverage);
}

function updateAverageStars(average) {
    const starsContainer = document.querySelector('.average-stars');
    starsContainer.innerHTML = '';
    const fullStars = Math.floor(average);
    const hasHalfStar = average % 1 >= 0.5;
    for (let i = 0; i < fullStars; i++) {
        const star = document.createElement('i');
        star.className = 'fas fa-star';
        starsContainer.appendChild(star);
    }
    if (hasHalfStar) {
        const halfStar = document.createElement('i');
        halfStar.className = 'fas fa-star-half-alt';
        starsContainer.appendChild(halfStar);
    }
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        const empty = document.createElement('i');
        empty.className = 'far fa-star';
        starsContainer.appendChild(empty);
    }
}

// ✅ نظام قائمة الجوال (مُعدّل بالكامل)
function initMobileMenu() {
    const mobileToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    if (!mobileToggle || !navLinks) return;

    let overlay = document.querySelector('.nav-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'nav-overlay';
        document.body.appendChild(overlay);
    }

    mobileToggle.addEventListener('click', e => {
        e.stopPropagation();
        mobileToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
        body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    overlay.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        body.style.overflow = '';
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            navLinks.classList.remove('active');
            overlay.classList.remove('active');
            body.style.overflow = '';
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            body.style.overflow = '';
            navLinks.classList.remove('active');
            mobileToggle.classList.remove('active');
            overlay.classList.remove('active');
        }
    });
}

// إصلاح مشاكل اللمس
function fixTouchIssues() {
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(event) {
        const now = new Date().getTime();
        if (now - lastTouchEnd <= 300) event.preventDefault();
        lastTouchEnd = now;
    }, false);

    function setVH() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setVH();
    window.addEventListener('resize', setVH);
    window.addEventListener('orientationchange', setVH);
}

// الهيدر عند التمرير
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

// الانتقال
function scrollToForm() { document.getElementById('shipping-form').scrollIntoView({ behavior: 'smooth' }); }
function scrollToServices() { document.getElementById('services').scrollIntoView({ behavior: 'smooth' }); }

// عداد الإحصائيات
function startCounters() {
    const counters = document.querySelectorAll('.stat-number');
    let started = false;
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !started) {
                started = true;
                counters.forEach(counter => {
                    const target = +counter.getAttribute('data-count');
                    const duration = 2500;
                    const step = target / (duration / 16);
                    let current = 0;
                    const update = () => {
                        current += step;
                        if (current < target) {
                            counter.textContent = Math.ceil(current);
                            requestAnimationFrame(update);
                        } else counter.textContent = target;
                    };
                    update();
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
    const btn = this.querySelector('.submit-btn');
    btn.classList.add('loading');
    setTimeout(() => {
        const data = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            weight: document.getElementById('weight').value,
            productLink: document.getElementById('product-link').value,
            shippingType: document.getElementById('shipping-type').value,
            shippingRoute: document.getElementById('shipping-route').value,
            notes: document.getElementById('notes').value
        };
        console.log('بيانات طلب الشحن:', data);
        showSuccessMessage(currentLanguage === 'ar' ?
            'شكراً لك! تم استلام طلب الشحن 🚀<br>سنتواصل معك خلال 24 ساعة.' :
            currentLanguage === 'en' ?
            'Thank you! Shipping request received 🚀<br>We will contact you within 24 hours.' :
            'Teşekkürler! Nakliye talebiniz alındı 🚀<br>24 saat içinde sizinle iletişime geçeceğiz.'
        );
        this.reset();
        btn.classList.remove('loading');
    }, 3000);
});

function showSuccessMessage(message) {
    const div = document.createElement('div');
    div.className = 'success-message';
    div.innerHTML = message;
    div.style.cssText = `
        position: fixed; top:50%; left:50%;
        transform: translate(-50%, -50%) scale(0);
        background: linear-gradient(135deg,#10b981,#059669);
        color:#fff; padding:2rem 3rem; border-radius:20px;
        box-shadow:0 25px 50px rgba(0,0,0,0.3);
        z-index:10000; text-align:center; font-size:1.3rem;
        font-weight:700; animation: popIn 0.6s ease forwards;
    `;
    document.body.appendChild(div);
    setTimeout(() => {
        div.style.animation = 'popOut 0.6s ease forwards';
        setTimeout(() => div.remove(), 600);
    }, 3000);
}

const style = document.createElement('style');
style.textContent = `
@keyframes popIn {0%{transform:translate(-50%,-50%) scale(0);opacity:0;}
70%{transform:translate(-50%,-50%) scale(1.1);opacity:1;}
100%{transform:translate(-50%,-50%) scale(1);opacity:1;}}
@keyframes popOut {0%{transform:translate(-50%,-50%) scale(1);opacity:1;}
30%{transform:translate(-50%,-50%) scale(1.1);opacity:1;}
100%{transform:translate(-50%,-50%) scale(0);opacity:0;}}`;
document.head.appendChild(style);

// إصلاح viewport للـ iOS
function fixViewportForIOS() {
    const vp = document.querySelector('meta[name="viewport"]');
    if (vp && /iPhone|iPad|iPod/.test(navigator.userAgent))
        vp.setAttribute('content','width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no');
}

// تشغيل عند التحميل
document.addEventListener('DOMContentLoaded', function() {
    switchLanguage('ar');
    startCounters();
    initRatingSystem();
    initMobileMenu();
    fixTouchIssues();
    fixViewportForIOS();
    document.querySelectorAll('.service-card,.quick-service-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            if (window.innerWidth > 768) {
                const r = card.getBoundingClientRect();
                const x = e.clientX - r.left, y = e.clientY - r.top;
                const aY = (x - r.width/2)/25, aX = (r.height/2 - y)/25;
                card.style.transform = `perspective(1000px) rotateX(${aX}deg) rotateY(${aY}deg) scale(1.05)`;
            }
        });
        card.addEventListener('mouseleave', () => card.style.transform='');
    });
});
