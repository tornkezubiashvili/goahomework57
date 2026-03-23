// შექმენი კლასი სახელად Bank რომელშიც გექნება მომხმარებლის სახელი, გვარი და მისი ბალანსი(თანხა რომელიც აქვს ანგარიშზე), ასევე რა რაოდენობის თანხის შეტანა სურს ექუნთზე, შექმენი კლასში მეთოდი რომლის მეშვეობით მომხმარებელი შეძლებს ბალანსზე თანხის შეტანას და დამატებას, შედეგი გამოიტანეთ კონსოლში


class Bank{
    constructor(name,surname,balance){
        this.name = name
        this.surname = surname
        this.balance = balance


    }
    func(){
        let prom = Number(prompt("შეიყვანე რიცხვი რაც გინდა რომ დაემატოს: "))
        this.balance += prom
        console.log(this.balance)
    }
        
    
}

let usr = new Bank("tornike","zubiashvili",500)
usr.func()


