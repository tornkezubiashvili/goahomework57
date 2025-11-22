// 5)შექმენით HTML გვერდი <form> ელემენტით, რომელიც შეიცავს input ველს და submit ღილაკს.
// -----დაწერეთ JavaScript ფუნქცია, რომელიც ფორმის გაგზავნისას შეამოწმებს input ველს:
// ----- თუ ველი ცარიელია → გამოჩნდება შეცდომის შეტყობინება input ველის გვერდით.
// -----თუ ველი არაა ცარიელი → გამოჩნდება alert ს Mensagem-ით "Form submitted!".


document.getElementById("submitBtn").addEventListener("click", function () {
    let input = document.getElementById("textInput")
    let error = document.getElementById("errorMsg")

    if (input.value === "") {
        error.textContent = "ველი ცარიელია"
        return false
    }

    error.textContent = ""
    alert("Form submitted!")
    return true
})