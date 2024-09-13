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

// Update active link on scroll
window.addEventListener('scroll', function() {
    let sections = document.querySelectorAll('section');
    let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach(section => {
        if (section.offsetTop <= scrollPos + 70 && (section.offsetTop + section.offsetHeight > scrollPos + 70)) {
            document.querySelectorAll('a.nav-link').forEach(nav => nav.classList.remove('active'));
            let activeLink = document.querySelector(`a.nav-link[href="#${section.id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
});

// Initialize LightGallery
lightGallery(document.getElementById('lightgallery'));

// Initialize Lightbox if necessary
lightGallery(document.querySelectorAll('.modal-image-grid img'));
