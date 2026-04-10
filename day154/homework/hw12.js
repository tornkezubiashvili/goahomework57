
// 12)გაქვს:

// let word = "javascript";

// შექმენი Map, სადაც:

// key = ასო
// value = რამდენჯერ გვხვდება


let word = "javascript";


let map = new Map()

for(let i of word){
    if(!map.has(i)){
        map.set(i,0)
    }
    if(map.has(i)){
        map.set(i,map.get(i)+1)
    }
}

console.log(map)