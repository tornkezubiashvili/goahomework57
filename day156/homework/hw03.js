// 3)გვერდზე გაქვს ქუაუნთერი + -  და reset ღილაკებით

// დავალება:

// ყოველ დაჭერაზე counter იზრდება 1 ით

// მნიშვნელობა ინახება localStorage-ში

// refresh-ზე არ ნულდება

let plus = document.getElementById("plus")
let count = document.getElementById("count")
let minus = document.getElementById("minus")
let reset = document.getElementById("reset")

let num = localStorage.getItem("num")
count.textContent = localStorage.getItem("num")

plus.addEventListener("click",function(){
    num ++
    localStorage.setItem("num",num)
    count.textContent = localStorage.getItem("num")
})

minus.addEventListener("click",function(){
    num --
    localStorage.setItem("num",num)
    count.textContent = localStorage.getItem("num")
})

reset.addEventListener("click",function(){
    num = 0
    localStorage.setItem("num",num)
    count.textContent = localStorage.getItem("num")
})

