
const currentDate = Date.now();

let lastVisitDate = parseInt(localStorage.getItem('lastVisitDate')) || currentDate;
let visitCount = parseInt(localStorage.getItem('visitCount')) || 0;

const differenceInDays = Math.floor((currentDate - lastVisitDate) / (1000 * 60 * 60 * 24));

let message;
if (differenceInDays === 0) {
    message = 'Welcome!';
} else if (differenceInDays === 1) {
    message = 'Back so soon! Awesome!';
} else {
    message = `You last visited ${differenceInDays} day${differenceInDays === 1 ? '' : 's'} ago.`;
}

visitCount++;

document.getElementById('visit-info').textContent = `${message} Number of Visits: ${visitCount}`;

localStorage.setItem('lastVisitDate', currentDate);
localStorage.setItem('visitCount', visitCount);