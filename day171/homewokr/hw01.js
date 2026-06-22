let form = document.getElementById("form")
let cityName = document.getElementById("cityName")
let temperature = document.getElementById("temperature")
let weather = document.getElementById("weather")
let temperatureC = document.getElementById("temperatureC")
let temperatureF = document.getElementById("temperatureF")
let data = document.getElementById("data")
let cloud = document.getElementById("loud")

let profilePromise = new Promise((resolve, reject) => {



    function getDataFromBackend(city) {
        let http = new XMLHttpRequest()
        let api = `https:api.weatherapi.com/v1/current.json?key=c8ced2d4f4a741e597a174639260106&q=${city}&aqi=no`


        http.onreadystatechange = function () {
            if (this.readyState === 4) {

                if (this.status === 200) {


                    let response = JSON.parse(this.responseText)

                    setTimeout(() => {
                        let weatherInfo = {
                            temp: `${response.current.temp_c}°`,
                            tempC: `${response.current.temp_c}°`,
                            tempF: `${response.current.temp_f}°`,
                            location: `${response.location.localtime}°`,
                            cloudd: `${response.current.cloud}%`,
                            weatherr: `${response.current.condition.text}`
                        }
                        resolve(weatherInfo)
                    }, 2000)

                    console.log(response)
                } else {
                    reject("something wrong with the app.")
                }

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


})

profilePromise.then((info) => {
    temperature.textContent = `${info.temp}°`
    temperatureC.textContent = `${info.tempC}°`
    temperatureF.textContent = `${info.tempF}°`
    data.textContent = `${info.location}°`
    cloud.textContent = `${info.cloudd}°`
    weather.textContent = `${info.weatherr}°`
}).catch((error) => {
    alert(error)
})
