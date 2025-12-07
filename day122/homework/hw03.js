// 3) HTML - ში შექმენი სამი ინფუთი სახელისთვის, მეილისთვის და პაროლისთვის,
//  ასევე შექმენი Button-ი რომელზე დაჭერის შემდეგ ამუშავდება კონსტრუქტორ ფუნქცია და შექმნის User ობიექტებს.
//  ეს ობიექტები ჩაამატე ლისტში და გამოაკონსოლე თქვენი User-ების ობიექტები.

let form = document.getElementById("form")

let UserList = []

form.addEventListener("submit",function(event){
    event.preventDefault()

    function User(Name,Password,Gmail){
        this.Name = Name
        this.Password = Password
        this.Gmail = Gmail
    }
    let User1 = new User(event.target.name.value,event.target.password.value,event.target.gmail.value )

    UserList.push(User1)

})

console.log(UserList)
