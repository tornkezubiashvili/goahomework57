// 2) შექმენით სია რომელშიც შეინახავთ რამდენიმე ობიექტს, თითოეული ობიექტი იქნება განსხვავებული, თქვენი მიზანია მოახდინოთ სიის დესტრუქცია შემდეგ კი თითოეული ობიექტის დესტრუქცია და მათი მნიშვნელობების დაბეჭდვა

let objectarray = [
    {
        name1 : "tornike",
        surname : "zubiashvili",
        age : 17
    },
    {
        brand : "mersedes",
        model : "CLS 63S",
        year : 2014
    },
    {
        fruit1 : "მსხალი",
        fruit2 : "ვაშლი",
        fruit3 : "ატამი",

    }
]
let [Obj1,Obj2,Obj3] = objectarray

let {name1 , surname, age} = Obj1
console.log(name1)
console.log(surname)
console.log(age)

let {brand , model, year} = Obj2
console.log(brand)
console.log(model)
console.log(year)

let {fruit1 , fruit2, fruit3} = Obj3
console.log(fruit1)
console.log(fruit2)
console.log(fruit3)