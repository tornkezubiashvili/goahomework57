// 1)შექმენი სია სადაც მოთავსებული იქნება ადამიანის სახელები , დაახლოებით 10 სახელი

// თქბენიდ დავალებაა რომ filter მეთოდის დახმარებით შექმნათ ახალი სია სადაც ინქებიან მხოლოდ ის სახელები რომელშიც ასობის რაოდენობა იქნება 5 ზე მეტი და და იწყება g ასოზე

// ეს დავალება შეასრულეთ single line function ითაც და ჩვეულებრივ return keyword ის გამოყენებითაც



let names = ["tornike","gggggoga","nika","diana","luka","gabrieli","elene","qetevani","gio","andria"]

let FilterName = names.filter(name => name.length > 5 && name[0] === "g") 

console.log(FilterName)

let FilterName2 = names.filter(name2 =>{
    return name2.length > 5 && name2[0] === "g"
})
console.log(FilterName2)