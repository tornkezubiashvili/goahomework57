// 1) შექმენით ექაუნთების ობიექტი შემდეგ დაასტრინგიფაიეთ დაბეჭდეთ და მერე გაპარსეთ და ეგეც დაბეჭდეთ
let accobj = [
    {
        name: "Tornike",
        age: 17

    }
    ,
    {
        name: "dato",
        age: 27

    },
    {
        name: "nodara",
        age: 45

    }
]

let string = JSON.stringify(accobj)
console.log(string)

let pars = JSON.parse(string)
console.log(pars)