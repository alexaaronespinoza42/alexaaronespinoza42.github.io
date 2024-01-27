const hamButton = document.querySelector('#hamburger');
const navMenu = document.querySelector('nav ul');

hamButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});