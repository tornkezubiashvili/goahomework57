// 5)შექმენი ფუნქცია login(username, password)
// სწორი მონაცემები:
// username: "admin"
// password: "1234"
// მომხმარებელს შემოატანინე username და password და გადაეცით ფუნქციას არგუმენტად
// შეამოწმე:
// ორივე თუ სწორია → "Welcome"
// username სწორია, password არა → "Wrong password"
// სხვა შემთხვევაში → "Access denied"

let  username2 = prompt("შეიყვანე სახელი; ")
let  password2 = prompt("შეიყვანე პაროლი; ")

function login(username, password){
    console.log(username === "admin" && password === "1234"?"Welcome": username === "admin" && password !== "1234"? "Wrong password":"Access denied")
}

login(username2, password2)