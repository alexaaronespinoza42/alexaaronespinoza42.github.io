/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Alexandre Espinoza';
let currentYear = new Date().getFullYear();
let profilePicture = 'images/mypicture.jpg';

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('year');
const imageElement = document.querySelector('image');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */

const favoriteFoods = ["Chips","Burgers","Pizza","Encebollado","Bolon"];
foodElement.innerHTML = favoriteFoods.join(",");

const newFavoriteFood = "Chocolate Ice Cream";
favoriteFoods.push(newFavoriteFood);

foodElement.innerHTML += `<br>${favoriteFoods.join(",")}`;

favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods.join(",")}`;

favoriteFoods.pop();   
foodElement.innerHTML += `<br>${favoriteFoods.join(",")}`;







