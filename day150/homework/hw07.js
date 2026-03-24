// 7)შექმენი კლასი Password

// ქონდეს მნიშვნელობა --> value


// მეთოდები:
// changePassword(newPass)
// checkPassword() --> გამოაქვს შეცვლილი პაროლი

class Password{
    constructor(value){
        this.value = value
    }

    changePassword(newPass){
        this.value = newPass
        this.checkPassword()
    }
    checkPassword(){
        console.log(this.value)
    }
}

let pass = new Password("123")
pass.changePassword("456")
