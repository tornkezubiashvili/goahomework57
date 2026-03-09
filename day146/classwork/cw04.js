// 4) მოცემულია მასივი const users = [
//   {name: "Nika", age: 20},
//   {name: "Ana", age: 25},
//   {name: "Gio", age: 17}
// ]; მოცემული მასივიდა map() ფუნქციის გამოყენებით  თითოეული ასაკი გაამრავლე ორზე და გამოიტანე შევლილი მასივი


const users = [
    { name: "Nika", age: 20 },
    { name: "Ana", age: 25 },
    { name: "Gio", age: 17 }
];

let newarry = users.map(info => console.log(info.name,info.age *2))