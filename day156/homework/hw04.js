// 4)TODO app --- > input + add button

// დავალება:

// დაამატე task-ები სიაში
// შეინახე localStorage-ში
// refresh-ზე ყველა task დაბრუნდეს

let input = document.getElementById("input")
let button = document.getElementById("button")
let div = document.getElementById("div")

let list = []
let li = document.createElement("li")

for(let i of list){
    li.textContent = i
}
button.addEventListener("click", function () {

    li.textContent = input.value
    div.appendChild(li)
    list.push(li.textContent)

    localStorage.setItem("lst", list)
    console.log(localStorage.getItem("lst"))



})