let score = document.getElementById("score")
let FingerDIV = document.getElementById("FingerDIV2")
let finger = document.getElementsByClassName("finger")
let ChoiceDiv = document.getElementById("choiceDIV2")
let MYchoice = document.getElementById("MYchoice")
let Commuterchoice = document.getElementById("Commuterchoice")

let usrARR = [
    "image5.png",
    "image2.png",
    "image0.png"
]

let randomchoice = Math.floor(Math.random()* 3)
for (let i = 0; i < finger.length; i++) {
   
    finger[i].addEventListener("click", function () {
        console.log(2)
        FingerDIV.style.display = "none"
        ChoiceDiv.style.display = "flex"
        MYchoice.src = usrARR[i]
        Commuterchoice.src = usrARR[randomchoice]


        
    })
}
