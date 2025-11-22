//6)შექმენით HTML გვერდი 3 <button> ელემენტით, თითოეული განსხვავებული id-ით (btn1, btn2, btn3).
// -----დაწერეთ JavaScript, რომელიც თითოეული ღილაკის დაჭერისას:
// -----შეცვლის <h2> ელემენტის ტექსტს "Button X clicked!" (X = 1,2,3)
// -----შეცვლის <h2> ფონს განსხვავებულ ფერად, რაც დამოკიდებულია დაჭერილ ღილაკზე.


let title = document.getElementById("title")

document.getElementById("btn1").addEventListener("click", function () {
    title.textContent = "Button 1 clicked!"
    title.style.backgroundColor = "blue"
})

document.getElementById("btn2").addEventListener("click", function () {
    title.textContent = "Button 2 clicked!"
    title.style.backgroundColor = "red"
})

document.getElementById("btn3").addEventListener("click", function () {
    title.textContent = "Button 3 clicked!"
    title.style.backgroundColor = "green"
})