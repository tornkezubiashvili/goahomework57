// 6) გამოიყენე forEach() და დაბეჭდე მხოლოდ ის მომხმარებლები, რომლებიც 18 წელზე მეტის არიან. 
const users = [
  {name: "Nika", age: 20},
  {name: "Ana", age: 16},
  {name: "Gio", age: 25}
];

users.forEach((info) =>{
    if(info.age > 18){
        console.log(info.age)
    }
})