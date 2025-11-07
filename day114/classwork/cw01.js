// 1)შექმენი ობიექტი შენს შესახებ,შენი დავალებაა რომ გამოიტანო კიები და ვალუები ცალ ცალკე for in ის გამოყენებით


let object = {
    name : "tornike",
    surname: "zubiashvili",
    age: 17
}

for(let i in object){
    console.log("key" + i)
    console.log("value" + object[i])
}