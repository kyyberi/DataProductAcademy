document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.hamburger-menu');
    const links = document.querySelector('.nav-links');
    
    menu.addEventListener('click', () => {
        links.classList.toggle('active');
    });
});
