//1)შექმენი Promise, რომელიც აბრუნებს "Hello World"-ს resolve-ით და დაბეჭდე შედეგი then-ის საშუალებით.

let myPromise = new Promise((resolve, reject) => {
    resolve("Hello World");
});

myPromise.then((result) => {
    console.log(result);
});