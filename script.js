// Smooth scroll للروابط
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// تأثير عند التمرير
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#ffffff';
        header.style.backdropFilter = 'none';
    }
});

// الانتقال لقسم الاتصال
function scrollToContact() {
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
    });
}

// نموذج الاتصال
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };
    
    // هنا يمكنك إضافة كود لإرسال البيانات للبريد الإلكتروني
    console.log('تم إرسال النموذج:', formData);
    
    // رسالة نجاح
    alert('شكراً لك! تم استلام رسالتك وسنتواصل معك قريباً.');
    
    // إعادة تعيين النموذج
    this.reset();
});

// تحميل الصفحة
window.addEventListener('load', function() {
    console.log('موقع MahWay جاهز للعمل!');
});
