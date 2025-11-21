<!-- File: `assets/js/base.js` -->
// Basic interactions: menu toggle, smooth scroll, lightbox, year injection
document.addEventListener('DOMContentLoaded', function () {
    // set year
    let yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // menu toggle for small screens
    let menuToggle = document.querySelector('.menu-toggle');
    let nav = document.querySelector('.main-nav');
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function () {
            let expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', String(!expanded));
            if (!expanded) nav.style.display = 'flex'; else nav.style.display = '';
        });
    }

    // smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
        a.addEventListener('click', function (e) {
            let targetId = this.getAttribute('href').slice(1);
            let target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({behavior: 'smooth', block: 'start'});
            }
        });
    });

    // lightbox
    let lightbox = document.getElementById('lightbox');
    let lightboxImg = lightbox && lightbox.querySelector('.lightbox-img');
    let lightboxCaption = lightbox && lightbox.querySelector('.lightbox-caption');
    let closeBtn = lightbox && lightbox.querySelector('.lightbox-close');

    document.getElementById('galleryGrid').addEventListener('click', function (e) {
        let img = e.target.closest('img');
        if (!img) return;
        let full = img.getAttribute('data-full') || img.src;
        let caption = img.closest('figure') && img.closest('figure').querySelector('figcaption') && img.closest('figure').querySelector('figcaption').textContent || '';
        if (lightbox && lightboxImg) {
            lightboxImg.src = full;
            lightboxImg.alt = img.alt || '';
            if (lightboxCaption) lightboxCaption.textContent = caption;
            lightbox.setAttribute('aria-hidden', 'false');
        }
    });

    function closeLightbox() {
        if (!lightbox) return;
        lightbox.setAttribute('aria-hidden', 'true');
        if (lightboxImg) lightboxImg.src = '';
    }
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (lightbox) lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLightbox(); });

    // lazy reveal using IntersectionObserver for nicer loading (optional enhancement)
    if ('IntersectionObserver' in window) {
        let io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    io.unobserve(entry.target);
                }
            });
        }, {threshold: 0.1});
        document.querySelectorAll('.gallery-item').forEach(function (el) { io.observe(el); });
    }
});
