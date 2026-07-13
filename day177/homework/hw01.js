let form = document.getElementById("form")

form.addEventListener("submit",function(e){
    e.preventDefault()
    let accInfo = {
        name : e.target.name.value.trim(),
        email : e.target.email.value.trim(),
        phone : e.target.phone.value.trim(),
        password : e.target.password.value.trim(),
        confirmpassword : e.target.confirmpassword.value.trim()
    }

    console.log(accInfo.name,accInfo.email,accInfo.phone,accInfo.password,accInfo.confirmpassword)
})