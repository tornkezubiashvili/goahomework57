// 13)გაქვს:

// let numbers = [1,2,3,4,5,6,7,8,9];

// შექმენი Map:

// key = "even" / "odd"
// value = შესაბამისი რიცხვების მასივი


let numbers = [1,2,3,4,5,6,7,8,9];


let map = new Map([])


for(let i of numbers){
    if(i %2 === 0){
        map.set("even", + i)
    }else{
        map.set("odd", +i)
    }
}


console.log(map)