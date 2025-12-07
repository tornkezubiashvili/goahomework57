// 1) შექმენი კონსტრუქტორი სახელიად Cars რომელიც პარამეტრად
//  მიიღებს მანქანის ბრენდს და გამოშვების წელს, შექმენი ასეთი 3 მანქანა.


function Cars(brand,age){
    this.brand = brand
    this.age = age
}

let car1 = new Cars("CLS63",2017)
let car2 = new Cars("F30",2013)
let car3 = new Cars("GLE",2021)

console.log(car1)
console.log(car2)
console.log(car3)