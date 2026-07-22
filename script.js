const toggleBtn = document.getElementById('modeToggle');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.2 });

faders.forEach(fader => appearOnScroll.observe(fader));