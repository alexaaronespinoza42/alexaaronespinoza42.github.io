/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Alexandre Espinoza",
    photo: 'images/mypicture.jpg',
    favoriteFoods: [
        "Chips",
        "Burgers",
        "Pizza",
        "Encebollado",
        "Bolon"
    ],
    hobbies: [
        "Working out",
        "Spending time with my friends" ,
        "Cycling",
        "Playing Videogames",
        "Reading",
    ],
    placesLived: [],
};
/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Guayaquil Guayacanes, Guayas",
        length: "15  years"
    },
    {
        place: "Guayaquil Daule, Guayas",
        lenth: "4 years"
    }
);
/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});
/* Hobbies List */
myProfile.hobbies.forEach(hobby =>{
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});
/* Places Lived DataList */
myProfile.placesLived.forEach(place =>{
    let dt = document.createElement('dt');
    dt.textContent = placeLived.place;
    document.querySelector('#place-lived').appendChild(dt);

    let dd = document.createElement('dd');
    dd.textContent = placeLived.length;
    document.querySelector('#place-lived').appendChild(dd);

});

