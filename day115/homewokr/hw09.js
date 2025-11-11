// 9)დააგენერირე 5 შემთხვევითი მთელი რიცხვი 1-დან 100-მდე და იპოვე ამ რიცხვებიდან
// მინიმალური და მაქსიმალური მნიშვნელობა Math.random(), Math.floor(), Math.min() და Math.max()-ის გამოყენებით.

let numbers = []


for (let i = 0; i < 5; i++) {
  let randomNum = Math.floor(Math.random() * 100) + 1
  numbers.push(randomNum)
}

console.log("რიცხვები;", numbers)


let min = Math.min(...numbers)
let max = Math.max(...numbers)

console.log("მინიმალური;", min)
console.log("მაქსიმალური;", max)