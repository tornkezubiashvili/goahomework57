let form = document.getElementById('form')

form.addEventListener('submit', function (event) {
    event.preventDefault()

    let ul = document.getElementById("ul")
    
    let Nameli = document.createElement("li")
    let Surnameli = document.createElement("li")
    let Ageli = document.createElement("li")

    Nameli.textContent = `name ${event.target.name.value}`
    Surnameli.textContent =`surname ${event.target.suenamename.value}`
    Ageli.textContent =`age ${event.target.age.value}`
    
    ul.appendChild(Nameli)
    ul.appendChild(Surnameli)
    ul.appendChild(Ageli)

    let p = document.getElementsByClassName("p")

    if(event.target.name.value.length === 0){
        p[0].textContent = "Try again"
        ul.removeChild(Nameli) 
        
    }else{
        p[0].textContent = ""
    }
     if(event.target.suenamename.value.length === 0){
        p[1].textContent = "Try again"
        ul.removeChild(Surnameli) 
    }else{
        p[1].textContent = ""
    }

     if(event.target.age.value.length === 0){
        p[2].textContent = "Try again"
        ul.removeChild(Ageli)     
    }else{
        p[2].textContent = ""
    }

    document.getElementById("name").value = ""
    document.getElementById("suenamename").value = ""
    document.getElementById("age").value = ""
})