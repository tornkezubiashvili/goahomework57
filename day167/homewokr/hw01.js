let form = document.getElementById("form")
let cityName = document.getElementById("cityName")
let temperature = document.getElementById("temperature")
let weather = document.getElementById("weather")
let temperatureC = document.getElementById("temperatureC")
let temperatureF = document.getElementById("temperatureF")
let data = document.getElementById("data")
let cloud = document.getElementById("loud")


function getDataFromBackend(city) {
    let http = new XMLHttpRequest()
    let api = `https:api.weatherapi.com/v1/current.json?key=c8ced2d4f4a741e597a174639260106&q=${city}&aqi=no`

    
    http.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText)
            temperature.textContent = `${response.current.temp_c}°`
            temperatureC.textContent = `${response.current.temp_c}°`
            temperatureF.textContent = `${response.current.temp_f}°`
            data.textContent = response.location.localtime
            cloud.textContent = `${response.current.cloud}%`
            // weather.textContent = `${response.current.condition.text}`
            


            console.log(response)


        }
    }
    http.open("GET", api)
    http.send()
}

form.addEventListener("submit", function (e) {
    e.preventDefault()
    let city = e.target.city.value
    cityName.textContent = city
    getDataFromBackend(city)
})


