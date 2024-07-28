// Smooth scroll to sections
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Add active class to the current link
        document.querySelectorAll('a.nav-link').forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});

// Initialize LightGallery
lightGallery(document.getElementById('lightgallery'));
