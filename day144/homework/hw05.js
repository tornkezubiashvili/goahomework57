// შექმენით პროდუქტის ობიექტი, რომელსაც აქვს დასახელება, ფასი და ვალუტა.
// დავალება: შექმენი ფუნქცია, რომელიც პარამეტრში მიიღებს ამ ობიექტს და
//  დესტრუქციის გამოყენებით გამოიყენებს მის კუთვნილებას პროდუქტის ინფორმაციის გამოსატანად.

let product = {
    price : 20,
    currency : "GEL"
}

function func(product){
    let {price,currency} = product

    console.log(price,currency)
}

func(product)