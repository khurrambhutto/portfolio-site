// Portfolio Site JavaScript - Optimized for efficiency and Firefox compatibility

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const initSmoothScrolling = () => {
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
    };

    // Intersection Observer for card animations
    const initCardAnimations = () => {
        // Check if browser supports IntersectionObserver
        if (!('IntersectionObserver' in window)) {
            // Fallback: show all cards immediately
            document.querySelectorAll('.card').forEach(card => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            });
            return;
        }

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

        // Apply animation styles and observe cards
        const animatedCards = document.querySelectorAll('.card');
        animatedCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    };

    // Handle form success message
    const handleFormSuccess = () => {
        try {
            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.get('sent') === '1') {
                const success = document.getElementById('quote-success');
                if (success) {
                    success.hidden = false;
                    success.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        } catch (error) {
            console.log('Error handling form success:', error);
        }
    };

    // Initialize all functionality
    initSmoothScrolling();
    initCardAnimations();
    handleFormSuccess();
});
