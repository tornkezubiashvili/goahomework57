// 2) გამოიყენე forEach() და იპოვე ყველა რიცხვის ჯამი. const numbers = [10, 20, 30, 40];

const numbers = [10, 20, 30, 40]
let sum = 0
numbers.forEach((num) => {
    sum += num
})

console.log(sum)