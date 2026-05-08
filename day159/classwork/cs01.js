let form = document.getElementById("form")
let AddDiv = document.getElementById("AddDiv")
let array = JSON.parse(localStorage.getItem("LocalInput")) || []


function createElement(text) {

    let InpDiv = document.createElement("div")
    AddDiv.appendChild(InpDiv)
    let TextDiv = document.createElement("div")
    InpDiv.appendChild(TextDiv)
    let SirclDiv = document.createElement("div")
    TextDiv.appendChild(SirclDiv)
    let h3 = document.createElement("h3")
    h3.textContent = text
    TextDiv.appendChild(h3)
    array.push(h3.textContent)
    h3.style.color = "white"

    let imgdiv = document.createElement("div")
    InpDiv.appendChild(imgdiv)
    let editimg = document.createComment("img")
    editimg.src = "img/edit.png"
    let deleteimg = document.createComment("img")
    deleteim.src = "img/delete.png"
    imgdiv.appendChild(editimg)
    imgdiv.appendChild(deleteimg)
}

form.addEventListener("submit", function (e) {
    e.preventDefault()
    localStorage.setItem("LocalInput", JSON.stringify(array))
    let InputValue = e.target.input.value
    createElement(InputValue)
})