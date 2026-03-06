// 2) შექმენი ცარიელი ობიექტი და ამ ობიექტში დესტრუქციის დროს გადაეცი ის მნიშვნელობები რასაც მომხმარებელი შემოიყვანს, მომხმარებელს შემოაყვანინე სახელი და გვარი, default მნიშნველობად ასევე ყველას მიანიჭე რაიმე რენდომ ასაკი და იმეილი


let usrname = prompt("შეიყვანე სახელი; ")
let usrsurname = prompt("შეივანე გვარი; ")

let obj = {

}

let {age = 17, email = "tornike@@@@",name1 = usrname,surname = usrsurname} = obj


console.log(age)
console.log(email)
console.log(name1)
console.log(surname)