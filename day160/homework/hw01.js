let form = document.getElementById("form")
let AddDiv = document.getElementById("AddDiv")
let left = document.getElementById("left")
let right = document.getElementById("right")
let DeleteOll = document.getElementById("DeleteOll")
let todofilter = document.getElementById("todofilter")

let array = JSON.parse(localStorage.getItem("LocalInput")) || []
let filter = localStorage.getItem("filter") || "tasks"

right.textContent = array.length

function filterfunc() {
    AddDiv.innerHTML = ""
    if (todofilter.value === "completed-task") {
        for (let i in array) {
            if (array[i].isComplited === true) {
                createElement(array[i].value, i)
            }
        }
    } else {
        for (let i in array) {
            if (array[i].isComplited === false) {
                createElement(array[i].value, i)
            }
        }
    }
}

function createElement(text, index) {
    index = index - 1
    let InpDiv = document.createElement("div")
    InpDiv.className = "InpDiv"


    let TextDiv = document.createElement("div")
    TextDiv.className = "TextDiv"
    let SirclDiv = document.createElement("div")
    SirclDiv.className = "SirclDiv"
    SirclDiv.id = index
    TextDiv.appendChild(SirclDiv)

    SirclDiv.addEventListener("click", function (e) {
        let itemIndex = e.target.id
        array[itemIndex].isComplited = true
        SirclDiv.style.backgroundColor = "red"
        localStorage.setItem("LocalInput", JSON.stringify(array))
        filterfunc()

    })


    let h3 = document.createElement("h3")
    h3.textContent = text
    h3.className = "h3text"
    h3.style.color = "white"
    TextDiv.appendChild(h3)

    InpDiv.appendChild(TextDiv)



    let imgdiv = document.createElement("div")
    imgdiv.className = "imgdiv"

    let editimg = document.createElement("img")
    editimg.src = "img/edit.png"
    editimg.className = "editimg"
    let deleteimg = document.createElement("img")
    deleteimg.src = "img/delete.png"
    deleteimg.className = "deleteimg"

    deleteimg.addEventListener("click", function () {
        InpDiv.remove()
        array = array.filter((elemnt) => {
            return elemnt !== h3.textContent


        })

        localStorage.setItem("LocalInput", JSON.stringify(array))
        right.textContent = array.length

    })

    imgdiv.appendChild(editimg)
    imgdiv.appendChild(deleteimg)

    InpDiv.appendChild(imgdiv)

    AddDiv.appendChild(InpDiv)




}


form.addEventListener("submit", function (e) {
    e.preventDefault()
    let InputValue = e.target.input.value
    if (InputValue.length === 0 || array.includes(InputValue)) {
        return
    }
    let todoItem = {
        value: InputValue,
        isComplited: false
    }
    array.push(todoItem)
    localStorage.setItem("LocalInput", JSON.stringify(array))

    createElement(todoItem.value, array.length)
    right.textContent = array.length

    form.reset()
})


filterfunc()

// if (filter === "completed-task") {
//     for (let i in array) {
//         if (array[i].isComplited === true) {
//             createElement(array[i].value, i)
//         }
//     }
// } else {
//     for (let i in array) {
//         if (array[i].isComplited === false) {
//             createElement(array[i].value, i)
//         }
//     }
// }

DeleteOll.addEventListener("click", function () {
    array = []
    localStorage.setItem("LocalInput", JSON.stringify(array))
    AddDiv.innerHTML = ""

})



todofilter.addEventListener("change", function () {
    console.log(todofilter.value)
    localStorage.setItem("filter", todofilter.value)
    filterfunc()
    // if (todofilter.value === "completed-task") {
    //     for (let i in array) {
    //         if (array[i].isComplited === true) {
    //             createElement(array[i].value, i)
    //         }
    //     }
    // } else {
    //     for (let i in array) {
    //         if (array[i].isComplited === false) {
    //             createElement(array[i].value, i)
    //         }
    //     }
    // }
})