const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 980) {
        navLinks.classList.remove('active');
    }
});
