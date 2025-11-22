// 2)შექმენით HTML გვერდი <button> ელემენტით. დაწერეთ JavaScript ფუნქცია,
// რომელიც გამოძახებისას შეცვლის <button> ელემენტის ფონს წითლად და ტექსტის ფერს – თეთრად.

let button = document.getElementsByTagName("button")
button[0].innerHTML = "<button style = 'background-color: red;color: white;'>klick</button>"

