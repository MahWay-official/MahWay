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

// ✅ تأكد أن كائن الترجمة موجود هنا
const translations = {
    ar: {
        title: "شركة MahWay للشحن والتصدير",
        welcome: "مرحبًا بك في شركة MahWay",
        desc: "نحن متخصصون في الشحن والتصدير حول العالم.",
        rate_us: "قيّم تجربتك معنا",
        rating_value: "التقييم: 0 من 5"
    },
    en: {
        title: "MahWay Import Export Shipping",
        welcome: "Welcome to MahWay Company",
        desc: "We specialize in global import and export shipping.",
        rate_us: "Rate your experience with us",
        rating_value: "Rating: 0 out of 5"
    },
    tr: {
        title: "MahWay İthalat İhracat Taşımacılık",
        welcome: "MahWay Şirketine Hoş Geldiniz",
        desc: "Dünya genelinde ihracat ve ithalat konusunda uzmanız.",
        rate_us: "Deneyiminizi değerlendirin",
        rating_value: "Puan: 0 / 5"
    }
};

const langButtons = document.querySelectorAll('.lang-btn');

if (langButtons) {
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

// ========== التقييم بالنجوم ==========
document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll(".stars i");
    const ratingText = document.getElementById("rating-value");
    if (!stars.length || !ratingText) return;
    let currentRating = 0;

    stars.forEach(star => {
        star.addEventListener("click", () => {
            currentRating = parseInt(star.getAttribute("data-value"));
            stars.forEach(s => {
                s.classList.remove("active");
                if (parseInt(s.getAttribute("data-value")) <= currentRating) {
                    s.classList.add("active");
                }
            });

            if (currentLanguage === "ar") ratingText.textContent = `التقييم: ${currentRating} من 5`;
            else if (currentLanguage === "en") ratingText.textContent = `Rating: ${currentRating} out of 5`;
            else ratingText.textContent = `Puan: ${currentRating} / 5`;
        });
    });
});
