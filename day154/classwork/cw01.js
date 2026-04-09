// შექმენით map სადაც გექნება მინიმუმ 5 key value წყვილი

// შენი დავალებაა:

// დაამატო ახალი წყვილი map ში, 

// შეცვალო უკვე არსებული მნიშნვნელობა map ში

// ამოშალო ერთ ერთი წყვილი mep იდან

// შეამოწმე არის თუ არა "name" key შენს მეპში 

// გაიგო რამდენი ცალი ელემენტი ინახება map ში

// ,
// ბოლოს გამოიტანე ყველა key ცალ ცალკე თით ხაზზე

// გამოიტანე ყველა value ცალ ცალკე თითო ხაზზე

// მოგიწევთ დაშალოთ ობიექტი და გადაატაროთ for of/ forEach  



let fruit = new Map([
    ["fruit1","atami"],
    ["fruit2","vshli"],
    ["fruit3","msxali"],
    ["fruit4","alucha"],
    ["fruit5","marwyvi"],
])

fruit.set("fruit6","qliavi")
fruit.set("fruit1","lenkroti")
fruit.delete("fruit2")
fruit.has("name")
console.log(fruit.size)

let key = [...fruit.keys()]


for(let i of key){
    console.log(i)
}

let value = [...fruit.value()]

for(let j of value){
    console.log(j)
}

console.log(key)
console.log(fruit)