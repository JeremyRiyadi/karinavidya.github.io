 // Progressive enhancement: animasi reveal saat scroll (tanpa library)
(() => {
    const items = document.querySelectorAll('.reveal');
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('visible'));
    return;
    }
    const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
        }
    });
    }, { threshold: 0.15 });
    items.forEach(el => io.observe(el));
})();