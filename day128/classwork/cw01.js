let p = document.getElementById("p")
let time = document.getElementById("time")
let heart = document.getElementById("Heart")
let watchheart = document.getElementById("watchheart")

let img = document.getElementById("img")
let colorbutton = document.getElementsByClassName("color")
let colorarr = [
    "img/black.png",
    "img/red.png",
    "img/purple.png",
    "img/pink.png",
    "img/blue.png"
]




function chengtime(){
    let time = new Date()
    let hours = time.getHours()
    let mins = time.getMinutes()
    let sec = time.getSeconds()
    if(hours < 10){
        hours = `0${time.getHours()}`
    }

    if(mins < 10){
        mins = `0${time.getMinutes()}`
    }

    if(sec < 10){
        sec = `0${getSeconds()}`
    }
    p.textContent =`${hours}:${mins}:${sec}`
}


heart.addEventListener("click",function(){
    watchheart.style.display = "block"
    p.style.display = "none"
})
time.addEventListener("click",function(){
    watchheart.style.display = "none"
    p.style.display = "block"
})


for(let i = 0;i <colorbutton.length;i++){
    colorbutton [i].addEventListener("click",function(){
        img.src = colorarr[i]
    })
}

setInterval(chengtime,1000)