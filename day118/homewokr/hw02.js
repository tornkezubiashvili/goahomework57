// 2)შექმენით HTML გვერდი <button> ელემენტით. დაწერეთ JavaScript ფუნქცია,
// რომელიც გამოძახებისას შეცვლის <button> ელემენტის ფონს წითლად და ტექსტის ფერს – თეთრად.

let button = document.getElementById("but")

function klickfunc(){
    button.innerHTML = "<button style = 'background-color: red;color: white;'>klick</button>"

}

button.addEventListener('click',klickfunc)
