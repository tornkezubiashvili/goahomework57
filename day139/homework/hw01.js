// 1)შექმენი ფუნქცია checkNumber(num)
// პარამეტრი: num
// თუ რიცხვი დადებითია → დააბრუნოს "Positive"
// თუ უარყოფითია → "Negative"
// თუ 0-ია → "Zero"
// გამოიყენე ternary operator

function checkNumber(num){
    console.log( num > 0 ? "Positive" : num < 0 ?  "Negative" : "Zero")
}

checkNumber(24)