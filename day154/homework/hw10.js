// 10)გაქვს:

// let map = new Map([
//   ["a", 1],
//   ["b", 2],
//   ["c", 3]
// ]);

// გაზარდე ყველა value +10

// გამოიყენე:

// forEach

let map = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3]
]);


map.forEach((v,k) => {
    map.set(k,v +=10)
})

console.log(map)