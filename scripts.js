<!-- scripts.js -->
document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    menu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked (for compatibility with common browsers)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});
