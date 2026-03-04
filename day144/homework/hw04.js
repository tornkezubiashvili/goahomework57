// შექმენით პიროვნების ობიექტი, რომელსაც აქვს სახელი, გვარი და მისამართი
// (მისამართი ცალკე ობიექტია და შეიცავს ქალაქსა და ქვეყანას).
// დავალება: დესტრუქციის გამოყენებით მიიღე სახელი, ქალაქი და ქვეყანა.

let user = {
    namee : "tornike",
    suename : "zubiashvili",
    addres : {
        city : "gori",
        country : "saqartvelo"
    }
}

let {namee,addres} = user

let {city , country} = addres

console.log(namee, city , country)