// 6)შექმენი ცვლადი:

// const age = 20;

// თუ ასაკი 18 ან მეტია — resolve("Access granted"),
// წინააღმდეგ შემთხვევაში — reject("Access denied").

const age = 20

let agePromice = new Promise((resolve,reject) =>{
    if(age >= 18){
        resolve("Access granted")
    }else{
        reject("Access denied")
    }
})

agePromice.then((result) =>{
    console.log(result)
})