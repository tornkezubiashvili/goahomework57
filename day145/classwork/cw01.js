// 1)შექმენი სიას სადაც შეინახავ რამდენიმე ობიექტს, ყველა ობიექტში იყოს მსგავსი კიები მაგ: name ,surname , email , შენი დავალებაა რომ მოახდინო სიის დესტრუქცია შემდეგ თითოეული დესტრუქცია და მათი მნიშვნელოობების დაბეჭდვა


let objarry = [
    {
        name : "tornike",
        surname : "zubiashvili",
        email : "tornike@@@@"
    },
    {
        name : "goga",
        surname : "chalauri",
        email : "goga@@@@"
    },
    {
        name : "gabrieli",
        surname : "molodini",
        email : "gabrieli@@@@"
    }
]

let [obj1, obj2 ,obj3]  = objarry

let{name : name1, surname:surname1, email: email1} = obj1
console.log(name1, surname1,email1)

let{name : name2, surname:surname2, email: email2} = obj2
console.log(name2, surname2,email2)

let{name : name3, surname:surname3, email: email3} = obj3
console.log(name3, surname3,email3)