// 2) შექმენი კონსტრუქტორის ფუნქცია სახელით Person.
//  კონსტრუქტორმა პარამეტრად უნდა მიიღოს: სახელი, გვარი და ასაკი. შექმენი ასეთი სამი ობიექტი.

function Person(Name,Surnaem,Age){
    this.Name = Name
    this.Surnaem = Surnaem
    this.Age = Age
}

let Person1 = new Person("Tornike","Zubiashvili",17)
let Person2 = new Person("Nika","Dobo",17)
let Person3 = new Person("Gabriel","Molodini","?")


console.log(Person1)
console.log(Person2)
console.log(Person3)
