let form = document.getElementById('form')

form.addEventListener('submit',function(event){
    event.preventDefault()
    console.log(event.target.name.value)
    console.log(event.target.suenamename.value)
    console.log(event.target.age.value)

    let liName = document.getElementById('liName')
    let liSurname = document.getElementById('liSuname')
    let liAge = document.getElementById('liAge')

    liName.textContent = event.target.name.value
    liSurname.textContent = event.target.suenamename.value
    liAge.textContent = event.target.age.value

    let name = document.getElementById("name")
    let Surnamenaem = document.getElementById("suenamename")
    let age = document.getElementById("age")
    

    if(name.length > 0){
        let new1 = document.createElement("p")
        document.getElementById("ul").appendChild(new1)
    }

   
})