let form = document.getElementById("form")
let AddDiv = document.getElementById("AddDiv")
let left = document.getElementById("left")
let right = document.getElementById("right")
let DeleteOll = document.getElementById("DeleteOll")
let todofilter = document.getElementById("todofilter")
let editDiv = document.getElementById("editDiv")
let editIMG2 = document.getElementById("editIMG2")
let editInput = document.getElementById("editInput")

let array = JSON.parse(localStorage.getItem("LocalInput")) || []
let filter = localStorage.getItem("filter") || "tasks"

right.textContent = array.length
let complitedArray = array.filter((item) => {
    return item.isComplited === true
})

left.textContent = complitedArray.length

let id = 0

function filterfunc(filtertype) {
    AddDiv.innerHTML = ""
    if (filtertype === "completed-task") {
        for (let todoitem of array) {
            if (todoitem.isComplited === true) {
                createElement(todoitem.value, array.indexOf(todoitem))
                console.log(todoitem.value)

            }
        }
    } else {
        for (let todoitem of array) {
            if (todoitem.isComplited === false) {
                createElement(todoitem.value, array.indexOf(todoitem))
                console.log(todoitem.value)

            }
        }
    }
}

function createElement(text, index) {
    let InpDiv = document.createElement("div")
    InpDiv.className = "InpDiv"

    let TextDiv = document.createElement("div")
    TextDiv.className = "TextDiv"
    let SirclDiv = document.createElement("div")
    SirclDiv.className = "SirclDiv"
    SirclDiv.id = index
    TextDiv.appendChild(SirclDiv)

    if (array[index].isComplited === true) {
        SirclDiv.style.backgroundColor = "green"
        TextDiv.style.textDecoration = "line-through solid green 2px"
    }
    SirclDiv.addEventListener("click", function (e) {
        left.textContent = +1
        let itemIndex = e.target.id
        array[itemIndex].isComplited = true
        array[itemIndex].value

        localStorage.setItem("LocalInput", JSON.stringify(array))
        filterfunc("Complite")

        console.log(array)
        let complitedArray = array.filter((item) => {
            return item.isComplited === true
        })

        left.textContent = complitedArray.length

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
    editimg.id = index
    editimg.className = "editimg"
    let deleteimg = document.createElement("img")
    deleteimg.src = "img/delete.png"
    deleteimg.className = "deleteimg"

    deleteimg.addEventListener("click", function () {
        InpDiv.remove()
        array = array.filter((lmnt) => {
            return lmnt.value !== h3.textContent


        })

        localStorage.setItem("LocalInput", JSON.stringify(array))
        right.textContent = array.length
        let complitedArray = array.filter((item) => {
            return item.isComplited === true
        })

        left.textContent = complitedArray.length

    })

    editimg.addEventListener("click", function (e) {
        editDiv.style.display = "flex"
        id = e.target.id
        console.log(id)
    })
    editIMG2.addEventListener("click", function (e) {

        editDiv.style.display = "none"
        
        console.log(array[id].value)

        let textcon = editInput.value

        array[id].value = textcon
        console.log(array)
       
        localStorage.setItem("LocalInput", JSON.stringify(array))
  
        filterfunc("fi")
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

    createElement(todoItem.value, array.length - 1)
    right.textContent = array.length
    console.log(array.length)
    form.reset()
})


filterfunc()

DeleteOll.addEventListener("click", function () {
    array = []
    localStorage.setItem("LocalInput", JSON.stringify(array))
    AddDiv.innerHTML = ""
    right.textContent = array.length
    left.textContent = complitedArray.length

})

todofilter.addEventListener("change", function () {
    console.log(todofilter.value)
    localStorage.setItem("filter", todofilter.value)
    filterfunc(todofilter.value)
    
})