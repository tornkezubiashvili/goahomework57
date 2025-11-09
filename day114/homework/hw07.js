
// 7)შექმენი ობიექტი car, რომელსაც ექნება "brand", "model" და "year".
// for...in ციკლით კონსოლში დაწერე:
// 👉 "brand: BMW" — მსგავსი ფორმატით (ანუ key: value). გამოიყენეთ სტრინგ ფორმატი(f string) რომ ვიყენებდით ხოლმე პითონში ეგრე რესურსებში ჩაგდებულია ბოლოს და შეამოწმეთ

let car = {
    "brand" : "mersedes",
    "model" : "c63",
    "year" : "2014"
}

for(let i in car){
    console.log(`${i} ${car[i]}`)
}