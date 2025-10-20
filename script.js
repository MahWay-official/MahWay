// -------------------- تهيئة AOS --------------------
AOS.init({
    duration: 1200,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
});

// -------------------- Particles.js --------------------
document.addEventListener('DOMContentLoaded', function () {
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
                move: { enable: true, speed: 2 }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    resize: true
                }
            }
        });
    }
});

// -------------------- اللغة --------------------
let currentLanguage = 'ar';
const translations = {}; // هنا تقدر تضيف الترجمات لو حبيت بعدين

function switchLanguage(lang) {
    currentLanguage = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.lang-btn[data-lang="${lang}"]`).classList.add('active');

    if (lang === 'ar') {
        document.documentElement.dir = 'rtl';
        document.documentElement.lang = 'ar';
    } else {
        document.documentElement.dir = 'ltr';
        document.documentElement.lang = lang;
    }
}

// -------------------- التقييم --------------------
let currentRating = 0;
let hasRated = false;

function initRatingSystem() {
    const savedRating = localStorage.getItem('mahway_rating');
    if (savedRating) {
        hasRated = true;
        currentRating = parseInt(savedRating);
        updateStarsDisplay(currentRating);
        return;
    }

    document.querySelectorAll('.star').forEach(star => {
        star.addEventListener('click', e => {
            if (hasRated) return;
            currentRating = parseInt(e.currentTarget.getAttribute('data-rating'));
            updateStarsDisplay(currentRating);
            document.getElementById('submitRating').disabled = false;
        });
    });

    document.getElementById('submitRating').addEventListener('click', () => {
        if (currentRating === 0 || hasRated) return;
        localStorage.setItem('mahway_rating', currentRating);
        hasRated = true;
        document.getElementById('ratingSuccess').style.display = 'flex';
    });
}

function updateStarsDisplay(rating) {
    document.querySelectorAll('.star').forEach(star => {
        const r = parseInt(star.getAttribute('data-rating'));
        const icon = star.querySelector('i');
        icon.className = r <= rating ? 'fas fa-star' : 'far fa-star';
        if (r <= rating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

// -------------------- قائمة الموبايل --------------------
function initMobileMenu() {
    const mobileToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    if (!mobileToggle || !navLinks) return;

    // إنشاء الخلفية (Overlay)
    let overlay = document.querySelector('.nav-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'nav-overlay';
        document.body.appendChild(overlay);
    }

    // فتح/إغلاق القائمة
    mobileToggle.addEventListener('click', e => {
        e.stopPropagation();
        mobileToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
        body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // إغلاق عند النقر على الخلفية
    overlay.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        body.style.overflow = '';
    });

    // إغلاق عند الضغط على أي رابط
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            navLinks.classList.remove('active');
            overlay.classList.remove('active');
            body.style.overflow = '';
        });
    });

    // إصلاح التمرير لو الشاشة كبرت
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            body.style.overflow = '';
            navLinks.classList.remove('active');
            mobileToggle.classList.remove('active');
            overlay.classList.remove('active');
        }
    });
}

// -------------------- التمرير للنموذج --------------------
function scrollToForm() {
    const form = document.getElementById('shipping-form');
    if (form) {
        form.scrollIntoView({ behavior: 'smooth' });
    }
}

// -------------------- تشغيل عند التحميل --------------------
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initRatingSystem();
});
