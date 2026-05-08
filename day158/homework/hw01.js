// 1) ააწყოთ register და login გვერდები თავისი ფუნქციონალით კარგი დიზაინით და + localstorage

let RegisterForm = document.getElementById("Registerform")
let Loginform = document.getElementById("Loginform")

let RegisterButton = document.getElementById("RegisterButton")
let LoginButton = document.getElementById("LoginButton")

let RegisterDiv = document.getElementById("RegisterDiv")
let LoginDiv = document.getElementById("LoginDiv")


RegisterForm.addEventListener("submit", function (e) {
    e.preventDefault()
    let RegisterEmail = e.target.email.value
    let Registerpassword = e.target.password.value
    if (Registerpassword.length < 8) {
        alert("პაროლი უნდა შეადგნდეს 8 სიმბოლს ან მეტს")
    } else {
        localStorage.setItem("RegisterEmail", RegisterEmail)
        localStorage.setItem("Registerpassword", Registerpassword)
        RegisterButton.addEventListener("click", function () {
            RegisterDiv.style.display = "none"
            LoginDiv.style.display = "block"
        })
    }





})




Loginform.addEventListener("submit", function (e) {
    e.preventDefault()
    let LoginEmail = e.target.email.value
    let Loginpassword = e.target.password.value

    let LocalEmail = localStorage.getItem("RegisterEmail")
    let LocalPassword = localStorage.getItem("Registerpassword")

    if (LoginEmail === LocalEmail && Loginpassword === LocalPassword) {
        alert("რეგისტრაცია წარმატებით გაიარეთ;")
    } else {
        alert("მონაცემები არასწორია სცადეთ დავიდან;")
    }
})

