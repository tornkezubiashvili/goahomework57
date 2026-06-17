// 7)Promise-მა დააბრუნოს 5, ხოლო then-ში გააორმაგე და დაბეჭდე.

// შედეგი:

// 10

let numPromise = new Promise((resolve, reject) => {
    resolve(5)
})

numPromise.then((result) => {
    console.log(result * 2)
})