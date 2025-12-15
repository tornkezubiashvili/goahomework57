// შექმენით ღილაკი როდესაც ამ ღილაკს დავაჭერთ კონსოლში დაიბეჭდოს ამჟამინდელი დრო ასეთი სახით 21:30:07
let btn = document.getElementById("btn")

btn.addEventListener("click",function(){
    let data = new Date()
    console.log(data.getHours() + ":" + data.getMinutes() +  ":" + data.getSeconds())
})

