// 4)შექმენი Promise, რომელიც reject-ს იძახებს ტექსტით "Something went wrong".


let myPromise = new Promise((resolve,reject) =>{
    reject("Something went wrong")
})

myPromise.then((result) =>{
    console.log(result)
})