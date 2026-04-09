// 5)გაქვს:

// let map = new Map([
//   ["x", 10],
//   ["y", 20],
//   ["z", 30]
// ]);

// დაბეჭდე მხოლოდ:

// ყველა key (for...of ითაც და forEach() ით )

// ზემოთ მოცემული Map იდან:

// დაბეჭდე:

// ყველა value


let map = new Map([
    ["x", 10],
    ["y", 20],
    ["z", 30]
]);


for(let i of map){
    console.log(` Key ${i[0]}` )
        
    console.log(` Value ${i[1]}`)
}

map.forEach((v,k)=>{
    console.log(` Key ${k}`)
    console.log(` Value ${v}`)
})



