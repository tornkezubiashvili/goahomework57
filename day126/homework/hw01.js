let days = document.getElementById("Days")
let hours = document.getElementById("Hours")
let mins = document.getElementById("Mins")
let seconds = document.getElementById("Seconds")

let newYear = new Date("2026-1-1")

function time() {
    let current = new Date()
    let a = newYear - current
    if (a <= 0) {
        days.textContent = 0
        hours.textContent = 0
        mins.textContent = 0
        seconds.textContent = 0
    }

    let Days = Math.floor(a/(1000*60*60*24))
    let Seconds = Math.floor(a%(1000*60)/1000)
    let Mins = Math.floor(a%(1000*60*60)/(1000*60))
    let Hours = Math.floor(a%(1000*60*60*24)/(1000*60*60))

    days.textContent = Days
    hours.textContent = Hours
    mins.textContent = Mins
    seconds.textContent = Seconds
}

setInterval(time,1000)
let current = new Date()
let a = newYear - current

if(a<=0){
    let h2 = document.createElement('h3')
    h2.textContent = "HAPPY NEW YEAR!"
    document.body.appendChild(h3)
}