const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('cs-in'); io.unobserve(en.target); }
    });
}, { threshold: 0.12 });
document.querySelectorAll('.cs-reveal').forEach(function (el) { io.observe(el); });