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
                number: { value: 80 },
                color: { value: '#ffffff' },
                shape: { type: 'circle' },
                opacity: { value: 0.3 },
                size: { value: 3 },
                move: { enable: true, speed: 1 }
            },
            interactivity: {
                events: { onhover: { enable: true, mode: 'repulse' } }
            }
        });
    }
});

// ========== Rating System ==========
function initRatingSystem() {
    const stars = document.querySelectorAll('.star');
    const ratingValue = document.getElementById('rating-value');
    const totalReviews = document.getElementById('total-reviews');
    const savedRating = localStorage.getItem('userRating');
    const savedReviews = localStorage.getItem('totalReviews') || 324344;

    if (savedRating) highlightStars(savedRating);
    totalReviews.textContent = savedReviews;

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const rating = star.getAttribute('data-value');
            highlightStars(rating);
            localStorage.setItem('userRating', rating);
            const newReviews = parseInt(savedReviews) + 1;
            totalReviews.textContent = newReviews.toLocaleString();
            localStorage.setItem('totalReviews', newReviews);
        });
    });

    function highlightStars(count) {
        stars.forEach((s, i) => s.classList.toggle('active', i < count));
        ratingValue.textContent = count;
    }
}

// ========== Mobile Menu ==========
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

// ========== Fix Touch Issues ==========
function fixTouchIssues() {
    document.addEventListener('touchstart', () => {}, { passive: true });
}

// ========== Counters ==========
function startCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const speed = 200;
        const updateCount = () => {
            const current = +counter.innerText.replace(/,/g, '');
            const increment = target / speed;
            if (current < target) {
                counter.innerText = Math.ceil(current + increment).toLocaleString();
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target.toLocaleString();
            }
        };
        updateCount();
    });
}

// ========== Success Message ==========
function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = message;
    successDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0,0,0,0.8);
        color: #fff;
        padding: 20px 30px;
        border-radius: 12px;
        text-align: center;
        font-size: 1.1rem;
        z-index: 9999;
        box-shadow: 0 0 20px rgba(0,0,0,0.3);
        animation: fadeInOut 4s ease forwards;
    `;
    
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
        successDiv.remove();
    }, 4000);
}

// أنيميشن الظهور والاختفاء
const style = document.createElement('style');
style.innerHTML = `
@keyframes fadeInOut {
    0% { opacity: 0; transform: translate(-50%, -60%); }
    10% { opacity: 1; transform: translate(-50%, -50%); }
    90% { opacity: 1; transform: translate(-50%, -50%); }
    100% { opacity: 0; transform: translate(-50%, -40%); }
}
`;
document.head.appendChild(style);

// ========== Google Translate (يتحمل بعد ثانية) ==========
window.addEventListener('load', function() {
    setTimeout(() => {
        const script = document.createElement('script');
        script.src = '//translate.google.com/translate_a/element.js?cb=initTranslate';
        document.body.appendChild(script);
    }, 1000);
});

function initTranslate() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'ar,en,tr',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}

// ========== Start Everything When Page is Ready ==========
window.addEventListener('DOMContentLoaded', () => {
    applyAllTranslations?.();
    initRatingSystem();
    initMobileMenu();
    fixTouchIssues();
    startCounters();
});
