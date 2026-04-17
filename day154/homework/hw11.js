// 11)გაქვს:

// let map = new Map([
//   ["a", 10],
//   ["b", 20],
//   ["c", 30]
// ]);

// იპოვე:

// ყველა value-ს საშვალო

let map = new Map([
  ["a", 10],
  ["b", 20],
  ["c", 30]
]);


let num = 0

map.forEach((v) => {
  num += v
})

console.log(num / map.size)