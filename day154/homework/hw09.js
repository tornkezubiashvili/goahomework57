// 9)გაქვს:

// let map = new Map([
//   ["apple", 5],
//   ["banana", 2],
//   ["orange", 8]
// ]);

// შექმენი ახალი Map, სადაც:

// დარჩება მხოლოდ ის მნიშვნელობათა წყვილი რომლის value > 4

// გამოიყენე:forEach


let map = new Map([
  ["apple", 5],
  ["banana", 2],
  ["orange", 8]
]);


let newmap = new Map([])

map.forEach((v,k) =>{
    if(v > 4){ 

        newmap.set(k,v)
    }
})

console.log(newmap)