//  1) // შექმენით ერეი სადაც მოათავსებ ზვიანგურ სახელებს შემდეგ კი გააკეთებ მათ დესტრუქციას და დაბეჭდავ სათითადოდ
// // შექმენი ობიექტი შენს შესახებ შემდეგ კი გააკეთე მისი დესტრუქცია და დაბეჭდე მონაცემები

let array = ["ზვიანგი","გველხოკერა","დორბლავასო","ლორწოგივია"]

const [name1 , name2 ,name3,name4] = array

console.log(name1)
console.log(name2)
console.log(name3)
console.log(name4)


let object = {
    name : "tornike",
    surname : "zubiashvili",
    age : 17
}

let {name, surname, age} = object

console.log(name)
console.log(surname)
console.log(age)