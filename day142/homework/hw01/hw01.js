let img = document.getElementById("img")
let button = document.getElementById("button")
let newDIV = document.getElementById("newDIV")


newDIV.style.display = "flex"
let srcARRY = [
    "img/1.png",
    "img/2.png",
    "img/3.png",
    "img/4.png",
    "img/5.png",
    "img/6.png"
]

let num = 1



button.addEventListener("click",function(){
    let random = Math.floor(Math.random()*6)
    let div = document.createElement("div")
    newDIV.appendChild(div)
    img.src = srcARRY[random]
    let h2 = document.createElement("h2")
    h2.textContent = `Roll ${num}:`
    div.appendChild(h2)
    let img2 = document.createElement("img")
    img2.src = srcARRY[random]
    div.appendChild(img2)
    newDIV.appendChild(div)
    num +=1
})


