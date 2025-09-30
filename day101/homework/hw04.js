let attempts = 1
let myName = "Georgia";
let nameGuess = prompt("შეიყვანე სახელი: ")

while (nameGuess !== myName) {
  nameGuess = prompt("მცდარი სახელი! ისევ შეიყვანე სახელი: ")
  attempts++
}

console.log("You guessed my name and your attempts is: " + attempts)