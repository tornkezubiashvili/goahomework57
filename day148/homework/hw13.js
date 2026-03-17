// 13)მოცემულია მასივი სტუდენტების სახელებით:
// გამოიყენე reduce, რათა შექმნა ერთი სტრინგი, სადაც ყველა სახელი იქნება ხაზით -.

// შედეგი უნდა იყოს: "ანა-ლაშა-გიორგი-ნინო".

const students = ["ანა", "ლაშა", "გიორგი", "ნინო"];



let StudentssReduce = students.reduce((accumulatir, currentValues) => {
    return accumulatir += currentValues + "-"

}, " ")
console.log(StudentssReduce)