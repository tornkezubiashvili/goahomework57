// 1) ააწყოთ register და login გვერდები თავისი ფუნქციონალით კარგი დიზაინით და + localstorage

let RegisterForm = document.getElementById("Registerform")

let Loginform = document.getElementById("Loginform")

RegisterForm.addEventListener("submit",function(e){
    e.preventDefault()
    let RegisterEmail =  e.target.email.value
    let Registerpassword =  e.target.password.value
    localStorage.setItem("RegisterEmail",RegisterEmail)
    localStorage.setItem("Registerpassword",Registerpassword)

})

