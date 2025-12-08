let form = document.getElementById("form")

function User(name, age) {
    this.name = name
    this.nge = age
    this.user1 = function func() {
       return `my name is ${this.name} my age is ${this.age}`
    }

}

form.addEventListener("submit", function(e) {
    e.preventDefault()
    let Usr = new User(e.target.name.value, e.target.age.value)
    let p = document.createElement("p")
    p.textContent = Usr.user1()
    body.appendChaild(myP)
    
})






