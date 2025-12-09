// შექმენი ფორმა სადაც გექნება სამი input-ი, სახელისთვის, ასაკისთვის და პროფესიისთვის,
//  ასევე submit ღილაკი. შექმენი კონსტრუქტორ ფუნქცია რომელის პარამეტრად მიიღებს სახელს,
//  ასაკს და პროფესიას, შექმენი ფუნქცია კონტრუქტორში რომელიც დააბრუნებს სახელი - პროფესია
//  (ანუ მომხარებლის სახელს და გვერდით მის პროფესიას). dom-ში შექმენი div და მასში ჩაამატე
//  პარაგრამი რომლის მნიშვნელობა იქნება ის რასაც კონსტრუქტორის ფუნქცია დააბრუნებს

let from = document.getElementById("form")
body = document.body

function Person(name, age, profession) {
    this.name = name
    this.age = age
    this.profession = profession
    this.User = function func() {
        return `მომხმარებლის სახელი ${this.name} მომხმარებლის ასაკი ${this.age} მომხმარებლის პროფესია ${this.profession}`
    }
}

from.addEventListener("submit", function (e) {
    e.preventDefault()
    let usr = new Person(e.target.name.value, e.target.age.value, e.target.profession.value)
    let div = document.createElement("div")
    let p = document.createElement("p")
    p.textContent = usr.User()
    body.appendChild(div)
    div.appendChild(p)
    
    document.getElementById("name").value = ""
    document.getElementById("age").value = ""
    document.getElementById("profession").value = ""
})

