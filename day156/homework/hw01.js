// 1)შექმენი ერთი ინფუთი,საბმით ღილაკი და ერთ პარაგრაფი

// მომხმარებელი წერს input-ში სახელს და აჭერს ღილაკს.ამის შემდეგ პარაგრაფში უნდა გამჩნდეს მომხმარებლის მიერ შეყვანილი მნიშნველობა

// დავალება:
// შეინახე ეს სახელი localStorage-ში და გვერდის გადატვირთვის შემდეგაც გამოჩნდეს.

let input = document.getElementById("input")
let button = document.getElementById("button")
let p = document.getElementById("p")
p.textContent = localStorage.getItem("inp")


button.addEventListener("click",function(){
    let inputvalue = input.value
    localStorage.setItem("inp",inputvalue)
    p.textContent = localStorage.getItem("inp")
})