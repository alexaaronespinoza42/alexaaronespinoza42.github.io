// Obtener la fecha actual en milisegundos
const currentDate = Date.now();

// Obtener la última fecha de visita y el número de visitas almacenados en localStorage
let lastVisitDate = parseInt(localStorage.getItem('lastVisitDate')) || currentDate;
let visitCount = parseInt(localStorage.getItem('visitCount')) || 0;

// Calcular la diferencia en días entre la fecha actual y la última visita
const differenceInDays = Math.floor((currentDate - lastVisitDate) / (1000 * 60 * 60 * 24));

// Determinar el mensaje a mostrar según la diferencia en días
let message;
if (differenceInDays === 0) {
    message = 'Welcome!';
} else if (differenceInDays === 1) {
    message = 'Back so soon! Awesome!';
} else {
    message = `You last visited ${differenceInDays} day${differenceInDays === 1 ? '' : 's'} ago.`;
}

// Incrementar el número de visitas
visitCount++;

// Mostrar el mensaje y el número de visitas en el HTML
document.getElementById('visit-info').textContent = `${message} Number of Visits: ${visitCount}`;

// Guardar la fecha actual como la última visita y el número de visitas en localStorage
localStorage.setItem('lastVisitDate', currentDate);
localStorage.setItem('visitCount', visitCount);