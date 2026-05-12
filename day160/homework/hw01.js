let form = document.getElementById("form")
let AddDiv = document.getElementById("AddDiv")
let left = document.getElementById("left")
let right = document.getElementById("right")
let DeleteOll = document.getElementById("DeleteOll")

let array = JSON.parse(localStorage.getItem("LocalInput")) || []

right.textContent =  array.length


function createElement(text) {

    let InpDiv = document.createElement("div")
    InpDiv.className = "InpDiv"


    let TextDiv = document.createElement("div")
    TextDiv.className = "TextDiv"
    let SirclDiv = document.createElement("div")
    SirclDiv.className = "SirclDiv"
    TextDiv.appendChild(SirclDiv)

    
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
    editimg .className = "editimg"
    let deleteimg = document.createElement("img")
    deleteimg.src = "img/delete.png"
    deleteimg .className = "deleteimg"

    deleteimg.addEventListener("click",function(){
        InpDiv.remove()
        array = array.filter((elemnt)=>{
          return  elemnt !== h3.textContent 

    
        })

        localStorage.setItem("LocalInput", JSON.stringify(array))
        right.textContent =  array.length
        
    })

    imgdiv.appendChild(editimg)
    imgdiv.appendChild(deleteimg)

    InpDiv.appendChild(imgdiv)

    AddDiv.appendChild(InpDiv)




}


form.addEventListener("submit", function (e) {
    e.preventDefault()
    let InputValue = e.target.input.value
    if(InputValue.length === 0 || array.includes(InputValue)){
        return
    }
    array.push(InputValue)
    localStorage.setItem("LocalInput", JSON.stringify(array))

    createElement(InputValue)   
    right.textContent =  array.length

    form.reset()
})




for(let i in array){
    createElement(array[i])
}

DeleteOll.addEventListener("click",function(){
    array = []
    localStorage.setItem("LocalInput", JSON.stringify(array))
    AddDiv.innerHTML = ""
})