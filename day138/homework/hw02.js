// 2)let values = [0, "0", "", "false", false, null, undefined, [], {}, NaN, 25];
// ამ სიიდან :
// ცალკე მასივში ჩაწერე truthy მნიშვნელობები
// ცალკე მასივში ჩაწერე falsy მნიშვნელობები
// გამოიყენე for of და სიის მეთოდი რომელიც ამატემს ელემენტებს სიაში
// დაბეჭდე ორივე

let values = [0, "0", "", "false", false, null, undefined, [], {}, NaN, 25]


let truthyValues = []
let falsyValues = []


for (let value of values) {
  if (value) {
    truthyValues.push(value)
  } else {
    falsyValues.push(value);
  }
}


console.log("Truthy მნიშვნელობები:", truthyValues)
console.log("Falsy მნიშვნელობები:", falsyValues)