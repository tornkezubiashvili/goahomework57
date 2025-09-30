let savedPassword = "12345"
let userPassword = prompt("შეიყვანე პაროლი: ")

while (userPassword !== savedPassword) {
  userPassword = prompt("პაროლი არასწორია! შეიყვანე კიდევ ერთხელ: ")
}

console.log("you guessed")