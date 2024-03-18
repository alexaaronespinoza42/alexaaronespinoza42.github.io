const currentTemp = document.querySelector("#current-temp2");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=-2.170998&lon=-79.922359&units=imperial&appid=a54096d9ecc3d8773daf23cd93c1c476";

async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }
        else{
            throw Error(await response.text());
        }
    }catch(error){
    }
}

function displayResults(data){
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", "weather icon");
    captionDesc.textContent = `${desc}`;
    windSpeed.innerHTML = `${(data.wind.speed).toFixed(1)}`;
    
}

//Forecast

const forecastTemp1 = document.querySelector("#forecastTemp1");
const weatherIcon1 = document.querySelector("#weatherIcon1");
const figCap1 = document.querySelector("#fig2");
const forecast1 = document.querySelector("#forecast1");

const forecastTemp2 = document.querySelector("#forecastTemp2");
const weatherIcon2 = document.querySelector("#weatherIcon2");
const figCap2 = document.querySelector("#fig3");
const forecast2 = document.querySelector("#forecast2");

const forecastTemp3 = document.querySelector("#forecastTemp3");
const weatherIcon3 = document.querySelector("#weatherIcon3");
const figCap3 = document.querySelector("#fig4");
const forecast3 = document.querySelector("#forecast3");

const url1 = "https://api.openweathermap.org/data/2.5/forecast?lat=-2.170998&lon=-79.922359&units=imperial&appid=a54096d9ecc3d8773daf23cd93c1c476";

async function forecastApiFetch(){
    try{
        const response = await fetch(url1);
        if(response.ok){
            const data = await response.json();
            console.log(data);
            displayForecast(data);
        }
        else{
            throw Error(await response.text());
        }
    }catch(error){
        console.log(error);
    }
}

function displayForecast(data){
    forecastTemp1.innerHTML = `${data.list[6].main.temp.toFixed(1)}&deg;C`;
    const iconsrc1 = `https://openweathermap.org/img/w/${data.list[6].weather[0].icon}.png`;
    let desc1 = data.list[6].weather[0].description;
    weatherIcon1.setAttribute("src", iconsrc1);
    figCap1.textContent = `${desc1}`;

    forecastTemp2.innerHTML = `${data.list[9].main.temp.toFixed(1)}&deg;C`;
    const iconsrc2 = `https://openweathermap.org/img/w/${data.list[9].weather[0].icon}.png`;
    let desc2 = data.list[9].weather[0].description;
    weatherIcon2.setAttribute("src", iconsrc2);
    figCap2.textContent = `${desc2}`;

    forecastTemp3.innerHTML = `${data.list[19].main.temp.toFixed(1)}&deg;C`;
    const iconsrc3 = `https://openweathermap.org/img/w/${data.list[19].weather[0].icon}.png`;
    let desc3 = data.list[19].weather[0].description;
    weatherIcon3.setAttribute("src", iconsrc3);
    figCap3.textContent = `${desc3}`;
}   

function forecastDates(){
    const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    const currentDate = new Date();
    const todayIn = currentDate.getDay();

    forecast1.innerHTML = `${daysOfWeek[(todayIn + 1) % 7]}`;
    forecast2.innerHTML = `${daysOfWeek[(todayIn + 2) % 7]}`;
    forecast3.innerHTML = `${daysOfWeek[(todayIn + 3) % 7]}`;
}


apiFetch();
forecastDates();
forecastApiFetch();