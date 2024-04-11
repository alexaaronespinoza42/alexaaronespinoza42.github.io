document.addEventListener('DOMContentLoaded', function() {
    const temp = document.querySelector('#temp');
    const humidity = document.querySelector('#hum');
    const weatherIcon = document.querySelector('#weather-icon'); 
    const weatherDesc = document.querySelector('#desc');
    const modal = document.getElementById("myModal");
    const maxTemp = document.querySelector('#maxTemp');

    modal.showModal();
    const closeModal = document.getElementById("closeModal");
    closeModal.onclick = function() {
      modal.close();
    };

    const url = `https://api.openweathermap.org/data/2.5/weather?q=Cozumel,MX&units=imperial&APPID=a54096d9ecc3d8773daf23cd93c1c476`;

    async function getWeather(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
          const data = await response.json();
          temp.textContent = `${data.main.temp.toFixed(0)}°F`;
          humidity.textContent = `${data.main.humidity.toFixed(0)}%`;
          

          weatherDesc.textContent = '';
          weatherIcon.innerHTML = ''; 
      

          data.weather.forEach((condition) => {

        weatherDesc.textContent += `${condition.description.toUpperCase()}; `;
            
            const iconUrl = `https://openweathermap.org/img/wn/${condition.icon}.png`;
            const iconImg = document.createElement('img');
            iconImg.src = iconUrl;
            iconImg.alt = condition.description;
            iconImg.title = condition.description;
            weatherIcon.appendChild(iconImg); 
          });
      
          maxTemp.textContent = `${data.main.temp_max.toFixed(0)}°F`;
        } catch (error) {
          console.error('Fetch error:', error);
        }
      }

    getWeather(url);

    const lat = 20.4230; // Latitude for Cozumel
    const lon = -86.9223; // Longitude for Cozumel
    const apiKey = 'a54096d9ecc3d8773daf23cd93c1c476';
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
    const temp3pm = document.querySelector('#temp3pm'); 

    async function getForecast(forecastUrl) {
        try {
          const response = await fetch(forecastUrl);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const forecastData = await response.json();
      
          let tomorrow = new Date();
          tomorrow.setDate(tomorrow.getDate() + 1);
          tomorrow.setHours(15, 0, 0, 0);
      
          const forecast = forecastData.list.find(f => {
            const forecastTime = new Date(f.dt * 1000);
            return forecastTime >= tomorrow;
          });
      
          if (forecast) {
            temp3pm.textContent = `${forecast.main.temp.toFixed(0)}°F`;
            
            const tomorrowConditions = document.querySelector('#tomorrow-conditions');
            tomorrowConditions.innerHTML = 'Tomorrow\'s conditions: '; 
      
            forecast.weather.forEach(condition => {
                const conditionContainer = document.createElement('div');
                
                const conditionDesc = document.createElement('span');
                conditionDesc.textContent = `${condition.description.toUpperCase()}; `;
                conditionContainer.appendChild(conditionDesc);
                
                const iconUrl = `https://openweathermap.org/img/wn/${condition.icon}.png`;
                const iconImg = document.createElement('img');
                iconImg.src = iconUrl;
                iconImg.alt = condition.description;
                iconImg.title = condition.description; 
                conditionContainer.appendChild(iconImg);
              
                tomorrowConditions.appendChild(conditionContainer);
              });
          } else {
            console.log('No forecast found for the specified time.');
          }
        } catch (error) {
          console.error('Fetch error:', error);
        }
      }
    getForecast(forecastUrl);
});
