// 4)TODO app --- > input + add button

// დავალება:

// დაამატე task-ები სიაში
// შეინახე localStorage-ში
// refresh-ზე ყველა task დაბრუნდეს

// წინა დავალებას დაამატე:

// დავალება:

// თითო task-ს ჰქონდეს delete ღილაკი
// წაშლისას localStorage-იც განახლდეს

let input = document.getElementById("input")
let button = document.getElementById("button")
let div = document.getElementById("div")

let list = JSON.parse(localStorage.getItem("lst")) || []
let name = "giorgi" || []

function rander() {
    div.innerHTML = ""
    list.forEach(element => {
        let li = document.createElement("li")
        let btn = document.createElement("button")
        btn.textContent = "delete"
        btn.classList = "btndelete"
        li.textContent = element
        div.appendChild(li)
        li.appendChild(btn)


    });
}

div.addEventListener("click", function (e) {
    if (e.target.classList.contains("btndelete")) {
        let li = e.target.parentElement
        let index = Array.from(div.children).indexOf(li)
        list.splice(index,1)
        localStorage.setItem("lst",JSON.stringify(list))
        rander()
    }
})

button.addEventListener("click", function () {
    let user = input.value
    list.push(user)
    localStorage.setItem("lst", JSON.stringify(list))
    rander()
})
rander()


