// 14)დაწერე single-line arrow function, რომელიც იღებს ასაკს და აბრუნებს

// "სრულწლოვანი" თუ >= 18
// "არასრულწლოვანი" თუ < 18

const checkAge = age => age >= 18 ? "სრულწლოვანი" : "არასრულწლოვანი";


console.log(checkAge(20))
console.log(checkAge(15))