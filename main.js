// Smooth scrolling for navigation links
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

// Add scroll effect to project cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards for animation
document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observe skills cards for animation
document.querySelectorAll('.skill-category').forEach(card => {
    observer.observe(card);
});


// Show success message when redirected back from form submit
(() => {
    try {
        const url = new URL(window.location.href);
        if (url.searchParams.get('sent') === '1') {
            const success = document.getElementById('quote-success');
            if (success) {
                success.hidden = false;
                success.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    } catch (_) {}
})();
