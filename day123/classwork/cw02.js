let form = document.getElementById("form")
let p1 = document.getElementById("p1")
let p2 = document.getElementById("p2")

form.addEventListener("submit",function(event){
    event.preventDefault()

    function User(Name,Age){
        this.Name = Name
        this.Age = Age
        this.user1 = function func(){
            p1.textContent = event.target.name.value
            p2.textContent = event.target.age.value
            console.log(event.target.name.value)
        }
        
    }
    
    let Usr = new User(event.target.name.value, event.target.age.value)
})


Usr.user1()


