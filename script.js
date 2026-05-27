

let weatherData = {

  Hyderabad : "35°C Sunny",

  Bangalore : "28°C Cloudy",

  Chennai : "33°C Rainy"

};






document.getElementById("weatherBtn")
.addEventListener("click", getWeather);



document.getElementById("darkBtn")
.addEventListener("click", ()=>{

  document.body.classList.toggle("dark");

});