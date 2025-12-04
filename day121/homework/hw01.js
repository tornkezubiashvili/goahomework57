let form = document.getElementById('form')

form.addEventListener('submit', function (event) {
    event.preventDefault()

    let ui = document.getElementById("ul")
    
    let Nameli = document.createElement("li")
    let Surnameli = document.createElement("li")
    let Ageli = document.createElement("li")

    Nameli.textContent = `name ${event.target.name.value}`
    Surnameli.textContent =`surname ${event.target.suenamename.value}`
    Ageli.textContent =`age ${event.target.age.value}`


    ui.appendChild(Nameli)
    ui.appendChild(Surnameli)
    ui.appendChild(Ageli)

})