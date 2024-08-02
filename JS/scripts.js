document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll to sections
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href.startsWith("#")) {
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
                // Update URL
                history.pushState(null, null, href);
            } else {
                window.location.href = href;
            }

            // Add active class to the current link
            document.querySelectorAll('a.nav-link').forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Highlight the active section in the navbar as you scroll
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', function () {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('a.nav-link').forEach(nav => {
            nav.classList.remove('active');
            if (nav.getAttribute('href').includes(current)) {
                nav.classList.add('active');
            }
        });
    });

    // Initialize LightGallery
    lightGallery(document.getElementById('lightgallery'));
});
