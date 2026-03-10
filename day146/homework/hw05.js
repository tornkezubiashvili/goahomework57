// 5) მოცემულია ობიექტების მასივი. შექმენი ახალი მასივი მხოლოდ სახელებით. 
const users = [
  {name: "Nika", age: 20},
  {name: "Ana", age: 25},
  {name: "Gio", age: 17}
];


let newarry = users.map(info => console.log(info.name))