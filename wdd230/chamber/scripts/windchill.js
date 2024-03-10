document.addEventListener("DOMContentLoaded", function() {
  // Get the temperature and wind speed elements
  const tempElement = document.querySelector("#current-temp");
  const windSpeedElement = document.querySelector("#wind-speed");
  const windChillElement = document.querySelector("#wind-chill");

  // Check if the elements are found
  if (tempElement && windSpeedElement && windChillElement) {
    // Parse temperature and wind speed from their innerHTML
    const temp = parseFloat(tempElement.innerHTML);
    const wind_speed = parseFloat(windSpeedElement.innerHTML);

    // Calculate wind chill if conditions are met
    if (temp <= 50 && wind_speed > 3) {
      const wind_chill =
        35.74 +
        0.6215 * temp -
        35.75 * wind_speed ** 0.16 +
        0.4275 * temp * wind_speed ** 0.16;

      // Display the wind chill rounded to 2 decimal places
      windChillElement.innerHTML = Math.round(wind_chill * 100) / 100;
    } else {
      // Display "N/A" if wind chill cannot be calculated
      windChillElement.innerHTML = "N/A";
    }
  } else {
    console.error("One or more elements not found.");
  }
});
