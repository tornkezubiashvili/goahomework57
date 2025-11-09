
// 6)შექმენი ობიექტი person, რომელსაც ექნება "name", "age" და "city".
// for...in ციკლით გამოიტანე თითოეული key და მისი value.


let person = {
    "name" : "tornike",
    "age": 17,
    "city":"gori"
}

for(let i in person){
    console.log("key" + i)
    console.log("value" + person[i])
}