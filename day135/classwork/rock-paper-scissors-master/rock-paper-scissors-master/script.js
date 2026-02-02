let score = document.getElementById("score")
let FingerDIV = document.getElementById("FingerDIV2")
let finger = document.getElementsByClassName("finger")
let ChoiceDiv = document.getElementById("ChoiceDiv2")
let MYchoice = document.getElementById("MYchoice")
let Commuterchoice = document.getElementById("Commuterchoice")

let usrARR = [
    "image5.png",
    "image2.png",
    "image0.png"
]

for (let i = 0; i < finger.length; i++) {
    console.log(2)
    finger[i].addEventListener("click", function () {
        FingerDIV.style.display = "none"
        ChoiceDiv.style.display = "block"
        console.log(2)
    })
}
