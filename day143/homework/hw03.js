// 3)მომხმარებელს შემოატანინე:

// პირველი რიცხვი

// ოპერატორი (+, -, *, /)

// მეორე რიცხვი

// switch–case გამოყენებით შეასრულე ოპერაცია.
// თუ ოპერატორი არასწორია → "არასწორი ოპერატორი".

let num1 = Number(prompt("შეიყვანე პირველი რიცხვი;"))
let operator = prompt("შეიყვანე ოპერატორი (+, -, *, /) ;")
let num2 = Number(prompt("შეიყვანე მეორე რიცხვი;"))



switch (operator) {
    case "+":
        console.log(num1 + num2)
        break
    case "-":
        console.log(num1 - num2)
        break
    case "*":
        console.log(num1 * num2)
        break
    case "/":
       console.log(num1 / num2)
       break
    default:
        console.log("არასწორი ოპერატორი")
        break
}