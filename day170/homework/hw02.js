// 2)შექმენი Promise, რომელიც resolve-ით აბრუნებს რიცხვს 10 და then-ში დაბეჭდე.

let myPromise = new Promise((resolve, reject) => {
    resolve(10);
});

myPromise.then((result) => {
    console.log(result);
});