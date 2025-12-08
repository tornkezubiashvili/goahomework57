// შექმენი input ველი რომელიც მიიღებს მომხმარებლის ასაკს და მეორე input რომელიც მიიღებს 
//  რიცხვს თუ რამდენი წლით უნდა მოგზაურობა მომავალში, calculate ღილაკზე დაჭერის შემდეგ
//  ამუშავდე კონსტრუქტორის ფუნქცია რომელიც გამოითვლის თუ რამდენი წლის იქნება მომხმარებელი
//  დროში მოგზაურობის შემდეგ, შედეგი გამოიტანეთ საიტზე


let form = document.getElementById("form")
let body = document.body

function User(age1,age2) {
    this.age1 = age1
    this.age2 = age2
    this.calc = function func() {
        let plus = Number(this.age1) + Number(this.age2)
        console.log(plus)
        return `თქვენ იქნებით ${plus} წლის`
    }
}

form.addEventListener("submit", function (e) {
    e.preventDefault()
    let usr = new User(e.target.age1.value,e.target.age2.value)
    let p = document.createElement("p")
    p.textContent = usr.calc()

    body.appendChild(p)


})


