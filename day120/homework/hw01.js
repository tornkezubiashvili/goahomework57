// 1) გააკეტეთ ესეთი პროექტი: ტექსტის ფერის არჩევა, იყოს ფერების ჩამონათვალი დივების სახით,
//  და ერთი ინფუთი, შემდეგ ამ ფერების დაჭერაზე ინფუთის წერის დროს მაგ  ფერის ტექსტი დაიწეროს, 
// გამოიყენეთ event ობიუქტი

let input = document.getElementById("input")

let div1 = document.getElementById("div1")
let div2 = document.getElementById("div2")
let div3 = document.getElementById("div3")
let div4 = document.getElementById("div4")
let div5 = document.getElementById("div5")
let div6 = document.getElementById("div6")
 

document.getElementById("div1").addEventListener("click",function(){
    input.style.color = div1.textContent
})
document.getElementById("div2").addEventListener("click",function(){
    input.style.color = div2.textContent
})
document.getElementById("div3").addEventListener("click",function(){
    input.style.color = div3.textContent
})
document.getElementById("div4").addEventListener("click",function(){
    input.style.color = div4.textContent
})
document.getElementById("div5").addEventListener("click",function(){
    input.style.color = div5.textContent
})
document.getElementById("div6").addEventListener("click",function(){
    input.style.color = div6.textContent
})


