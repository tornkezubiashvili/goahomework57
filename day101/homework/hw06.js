let number = prompt("შეიყვანე რიცხვი: ")

while (number !== 0) {
    if (number < 0) {
        console.log("negative number")
    } else {
        console.log("You entered positive number")
    }
    number = prompt("შეიყვანე რიცხვი: ")
}

console.log("you guessed the number, the loop is over")