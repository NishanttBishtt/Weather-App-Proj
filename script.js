const apiKey = "0d39482ddfa7fab6f200d4a8c40005ab"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input") 
const searchBtn = document.querySelector(".search button") 
const weatherIcon = document.querySelector(".weather-img")
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".main").style.display = "none"
    } else{
        var data = await response.json();
    console.log(data)
    document.querySelector(".city-name").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°"
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed * 10) / 10 + " km/h"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"

    if (data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    } else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png"
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png"
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    }else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png"
    }
    document.querySelector(".main").style.display = "block"
    document.querySelector(".error").style.display = "none"
    }
    


}

searchBtn.addEventListener("click", function(){
    checkWeather(searchBox.value)
    
})