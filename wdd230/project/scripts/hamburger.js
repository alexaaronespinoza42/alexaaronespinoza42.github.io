const hamButton = document.querySelector('#hamburger');
const navMenu = document.querySelector('nav ul');

hamButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 889) {
        navMenu.classList.remove('open');
    }
});
