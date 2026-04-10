// 13)გაქვს:

// let numbers = [1,2,3,4,5,6,7,8,9];

// შექმენი Map:

// key = "even" / "odd"
// value = შესაბამისი რიცხვების მასივი


let numbers = [1,2,3,4,5,6,7,8,9];


let map = new Map([
    ["even",0],
    ["odd",0]
])

let ev = []
let od = []

for(let i of numbers){
    if(i %2 === 0){
       ev.push(i)
    }else{
        od.push(i)
    }
}

map.set("even",ev)
map.set("odd",od)




console.log(map)