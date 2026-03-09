// 3) მოცემულია სია const users = [
//   {name: "Nika", age: 20},
//   {name: "Ana", age: 25},
//   {name: "Gio", age: 17}
// ]; forEach ფუნქციის გამოყენებით გაარკვიე რამდენი წლის იქნება თითოეული იუზერი 15 წლის შემდეგ. ჯერ გამოიტანე მათი სახელები და გვერდით რამდენის წლის იქნებიან მომავალში.


const users = [
    { name: "Nika", age: 20 },
    { name: "Ana", age: 25 },
    { name: "Gio", age: 17 }
]

users.forEach((num =>{
    console.log(num.name,num.age + 15)
}))