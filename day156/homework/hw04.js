// 4)TODO app --- > input + add button

// დავალება:

// დაამატე task-ები სიაში
// შეინახე localStorage-ში
// refresh-ზე ყველა task დაბრუნდეს

let input = document.getElementById("input")
let button = document.getElementById("button")
let div = document.getElementById("div")



button.addEventListener("click",function(){
    let p = document.createElement("p")
    let inpvalue = input.value
    localStorage.setItem("crateP",inpvalue)
    p.textContent = localStorage.getItem("crateP")
    div.appendChild(p)

    localStorage.setItem("add",div.appendChild(p))
    
})