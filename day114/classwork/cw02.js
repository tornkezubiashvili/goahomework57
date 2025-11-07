// 2)შექმენი ობიექტი ავტომობილის შესახებ ,გქონდეს year , model , milage , color , 
// შენი დავალებაა რომ შექმნა სია ვალუებისა,შემდეგ გადაუარო ამ სიას და გმაოიტანო ცალ ცალკე თითოეული value გამოიყენე for of


let car = {
    year : 2017,
    model: "CLS 63",
    milage: 97000,
    color: "black"
}


let values = Object.values(car)

for(let i of values){
    console.log(i)
}