let num1 = prompt("შეიყვანე პირველი რიცხვი: ")
let num2 = prompt("შეიყვანე მეორე რიცხვი: ")

let sum = 0

for (let i = num1; i <= num2; i++) {
  if (i % 2 === 0) {
    sum += i
  }
}

console.log("ლუწი რიცხვების ჯამი არის: " + sum)