// Navigation scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
});

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Scroll animations
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to elements
document.querySelectorAll('.section-inner, .project, .exp-item, .skill-card, .about-card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Typing effect for hero tagline
const tagline = document.querySelector('.hero-subtitle');
if (tagline) {
    const text = tagline.textContent;
    tagline.textContent = '';
    let i = 0;
    
    setTimeout(() => {
        const type = () => {
            if (i < text.length) {
                tagline.textContent += text.charAt(i);
                i++;
                setTimeout(type, 40);
            }
        };
        type();
    }, 500);
}

// Console easter egg
console.log('%c👋 Hey there!', 'font-size: 24px; font-weight: bold;');
console.log('%cLooking for a software engineer? Let\'s talk!', 'font-size: 14px; color: #6366f1;');
console.log('%cEmail: shresthasubhan@gmail.com', 'font-size: 12px; color: #888;');
