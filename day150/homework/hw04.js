// 4)შექმენი კლასი Product, რომელსაც ექნება:

// name, price, quantity
// მეთოდი getTotalPrice() → აბრუნებს მთლიან ფასს(ფასი გამრავლებული ოდენობაზე)

class Product{
    constructor(name,price,quantity){
        this.price = price
        this.quantity = quantity
    }
    getTotalPrice(){
        return this.price * this.quantity
    }
}

let prod = new Product("tornike",100,4)

console.log(prod.getTotalPrice())