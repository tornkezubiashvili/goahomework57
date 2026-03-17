// 11)მოცემულია მასივი:

// გამოიყენე reduce, რათა გამოითვალოს ყველა რიცხვის ჯამი.

// დაბეჭდე შედეგი.


const numbers = [5, 10, 15, 20];


let NumReduce = numbers.reduce((accumulatir,currentValues) =>{
    return accumulatir += currentValues
},0)

console.log(NumReduce)