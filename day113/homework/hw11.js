// 11)შექმენი ობიექტი phone = {brand: "Apple"}
// დაამატე model და price ველები, შემდეგ ტერმინალში გამოიტანეთ ყველა value სიის სახით და ასევე ყველა key სიის სახით

let phone = {
    brand: "Apple"
}

phone.model = "Redmi"
phone.price = 600

phone.model = "samsung"
phone.price = 800


console.log(Object.values(phone))
console.log(Object.keys(phone))
