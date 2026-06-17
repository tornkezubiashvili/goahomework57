// 3)Promise-მა დააბრუნოს "JavaScript", ხოლო then-ში დაუმატე " is awesome" და დაბეჭდე.

let myPromise = new Promise((resolve,reject) => {
    resolve("JavaScript")
})

myPromise.then((result)=>{
    console.log(`${result} is awesome`)
})