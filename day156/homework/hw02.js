// 2)გვერდზე გაქვს ღილაკი "Toggle Theme"

// დავალება:

// დაჭერისას იცვლება background
// შეინახე არჩეული theme
// refresh-ის შემდეგ იგივე theme დარჩეს

// მინიშნება:

// შეინახე "dark" ან "light"

let button = document.getElementById("button")
let body = document.body
body.style.backgroundColor = localStorage.getItem("black")

button.addEventListener("click", function () {
    localStorage.setItem("black", "black")

    body.style.backgroundColor = localStorage.getItem("black")
})