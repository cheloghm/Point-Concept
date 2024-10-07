// Smooth scroll to sections
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 60, // Adjust for fixed navbar height
                behavior: 'smooth'
            });
        }

        // Add active class to the current link
        document.querySelectorAll('a.nav-link').forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});

// Update active link on scroll
window.addEventListener('scroll', function() {
    let sections = document.querySelectorAll('section');
    let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach(section => {
        if (section.offsetTop - 70 <= scrollPos && (section.offsetTop + section.offsetHeight - 70 > scrollPos)) {
            document.querySelectorAll('a.nav-link').forEach(nav => nav.classList.remove('active'));
            let activeLink = document.querySelector(`a.nav-link[href="#${section.id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
});

// Initialize LightGallery for Portfolio Modals
document.addEventListener("DOMContentLoaded", function() {
    const portfolioModals = document.querySelectorAll('.modal');

    portfolioModals.forEach(modal => {
        modal.addEventListener('shown.bs.modal', function () {
            const gallery = modal.querySelector('.modal-body .row');
            if (gallery) {
                lightGallery(gallery, {
                    selector: 'img',
                    download: false,
                    thumbnail: true,
                    animateThumb: false,
                    showThumbByDefault: false
                });
            }
        });

        modal.addEventListener('hidden.bs.modal', function () {
            const gallery = modal.querySelector('.modal-body .row');
            if (gallery) {
                lightGallery(gallery, 'destroy');
            }
        });
    });
});
