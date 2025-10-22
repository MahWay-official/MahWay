// ========== AOS Animation ==========
document.addEventListener('DOMContentLoaded', () => {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 120,
            easing: 'ease-out-cubic'
        });
    }
});

// ========== Particles.js ==========
window.addEventListener('load', () => {
    if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 0.4, random: true },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.2, width: 1 },
                move: { enable: true, speed: 2, random: true }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" }
                }
            }
        });
    }
});

// ========== اللغة ==========
let currentLanguage = 'ar';
const langButtons = document.querySelectorAll('.lang-btn');
const translationsExist = typeof translations !== 'undefined';

if (langButtons && translationsExist) {
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.dataset.lang;
            switchLanguage(lang);
        });
    });
}

function switchLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`.lang-btn[data-lang="${lang}"]`)?.classList.add('active');
    
    applyAllTranslations();
}

function applyAllTranslations() {
    const langData = translations[currentLanguage];
    if (!langData) return;
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (langData[key]) el.textContent = langData[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (langData[key]) el.placeholder = langData[key];
    });
    document.querySelectorAll('option[data-i18n]').forEach(opt => {
        const key = opt.dataset.i18n;
        if (langData[key]) opt.textContent = langData[key];
    });
}

// ========== نموذج الشحن ==========
const shippingForm = document.getElementById('shippingForm');
if (shippingForm) {
    shippingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const submitBtn = this.querySelector('.submit-btn');
        submitBtn.classList.add('loading');

        const formData = {
            name: document.getElementById('name').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            weight: document.getElementById('weight').value.trim(),
            productLink: document.getElementById('product-link').value.trim(),
            shippingType: document.getElementById('shipping-type').value,
            shippingRoute: document.getElementById('shipping-route').value,
            notes: document.getElementById('notes').value.trim()
        };

        // إرسال البيانات عبر EmailJS
        emailjs.send('service_xxxxxx', 'template_xxxxxx', formData)
            .then(() => {
                showSuccessMessage(
                    currentLanguage === 'ar' ? 'تم استلام طلب الشحن بنجاح 🚀' :
                    currentLanguage === 'tr' ? 'Nakliye talebiniz alındı 🚀' :
                    'Shipping request received 🚀'
                );
                this.reset();
            })
            .catch(() => {
                showSuccessMessage(
                    currentLanguage === 'ar' ? 'حدث خطأ، حاول مرة أخرى 😞' :
                    currentLanguage === 'tr' ? 'Bir hata oluştu 😞' :
                    'An error occurred, please try again 😞'
                );
            })
            .finally(() => submitBtn.classList.remove('loading'));
    });
}

// ========== رسالة النجاح ==========
function showSuccessMessage(message) {
    const msgDiv = document.createElement('div');
    msgDiv.className = 'success-popup';
    msgDiv.innerHTML = `<div class="popup-content">${message}</div>`;
    document.body.appendChild(msgDiv);
    setTimeout(() => msgDiv.classList.add('show'), 100);
    setTimeout(() => msgDiv.classList.remove('show'), 3000);
    setTimeout(() => msgDiv.remove(), 3500);
}

// ========== قائمة الجوال ==========
function initMobileMenu() {
    const toggle = document.getElementById('mobileMenuToggle');
    const links = document.querySelector('.nav-links');
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);

    toggle?.addEventListener('click', () => {
        toggle.classList.toggle('active');
        links?.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = links?.classList.contains('active') ? 'hidden' : '';
    });
    overlay.addEventListener('click', () => {
        toggle?.classList.remove('active');
        links?.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
}
initMobileMenu();

// ========== تحسين تجربة الجوال ==========
(function fixMobile() {
    let lastTouch = 0;
    document.addEventListener('touchend', e => {
        const now = Date.now();
        if (now - lastTouch <= 300) e.preventDefault();
        lastTouch = now;
    }, false);
    
    const setVH = () => {
        document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    };
    setVH();
    window.addEventListener('resize', setVH);
})();

// ========== تأثير تمرير الهيدر ==========
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header-animation');
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 80);
});

// ========== عداد الإحصائيات ==========
function startCounters() {
    const counters = document.querySelectorAll('.stat-number');
    if (!counters.length) return;

    let started = false;
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && !started) {
            started = true;
            counters.forEach(counter => {
                const target = +counter.dataset.count;
                const duration = 2500;
                const step = target / (duration / 16);
                let current = 0;
                const update = () => {
                    current += step;
                    if (current < target) {
                        counter.textContent = Math.ceil(current);
                        requestAnimationFrame(update);
                    } else {
                        counter.textContent = target;
                    }
                };
                update();
            });
        }
    }, { threshold: 0.6 });
    observer.observe(document.querySelector('.stats'));
}
startCounters();
