// Smooth scroll to sections from portfolio page
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const href = this.getAttribute('href');
        if (href.startsWith("index.html#")) {
            const target = href.split("#")[1];
            window.location.href = `index.html#${target}`;
        } else {
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Add active class to the current link
        document.querySelectorAll('a.nav-link').forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});

// Initialize LightGallery
lightGallery(document.getElementById('lightgallery'));
