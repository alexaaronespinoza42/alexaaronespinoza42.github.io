const hamButton = document.querySelector('#menu');
const choices = document.querySelector('.choices');

hamButton.addEventListener('click', () => {
	choices.classList.toggle('open');
	hamButton.classList.toggle('open');
});