let key = "a895ca6642547de4b5e88bec466ffe18"

function printData(data) {
    let nameCity = data.name
    let tempValue = data.main.temp
    let skyStatus = data.weather[0].description
    let humidityValue = data.main.humidity
    let icon = data.weather[0].icon
    let country = data.sys.country
    document.querySelector(".cityName").innerHTML = "Tempo em "+ nameCity + ", " + country
    document.querySelector(".temp").innerHTML = Math.floor(tempValue) + "°C"
    document.querySelector(".description").innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" class="icon"> ${skyStatus}`
    document.querySelector(".humidity").innerHTML = "Umidade: " + humidityValue +"%"
    document.querySelector("body").style = "background-image: url('http://source.unsplash.com/1600x900/?" + skyStatus + "');"
}

async function searchCity(city) {
    let data = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key + "&lang=pt_br" + "&units=metric").then( resposta => resposta.json())
    printData(data)
}

function searchWeather() {
    let city = document.querySelector('input').value
    searchCity(city)
}

document.addEventListener('keypress', function(e){
    if(e.which == 13){
        let city = document.querySelector('input').value
        searchCity(city)
    }
 }, false);
