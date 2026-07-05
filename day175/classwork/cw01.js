// შექმენით ფუნქცია რომელიც დააბრუნებს რაიმე ავტომობილის სახელს 2 წამში
// შენი დავალებაა რომ ეს დარესოლვებული მნშვნელობა გამოიტანო კონსოლში
// გამოიყენე async await ქივორდები .then ის მაგივრად



function func() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("CLS63s")
        },2000)
    })
}

async function newFunc() {
    let async = await func()

    console.log(async)
}

newFunc()