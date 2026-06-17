// 5)შექმენი ცვლადი:

// const number = 8;

// თუ რიცხვი ლუწია — resolve("Even"),
// თუ კენტია — reject("Odd").

const number = 8

let myPromise = new Promise((resolve, reject) => {

    if (number % 2 === 0) {
        resolve("Even")
    } else {
        reject("Odd")
    }

})

myPromise.then((result) =>{
    console.log(result)
})