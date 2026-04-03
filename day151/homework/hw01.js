let display = document.getElementById("display")
let num = document.getElementsByClassName("num")
let operator = document.getElementsByClassName("operator")

class Calcurator {
    constructor() {

    }

    click() {
        for (let i = 0; i < num.length; i++) {
            display.textContent = " "
            num[i].addEventListener("click", function () {
                display.textContent += num[i].textContent
            })
        }

        for (let i = 0; i < operator.length; i++) {
            operator[i].addEventListener("click", function () {
                display.textContent += operator[i].textContent
            })
        }

    }
    FindNum() {

        let FindIndex = display.textContent.FindIndex(index => index == "+")
        console.log(display.textContent)


    }


    
}




let calc = new Calcurator()
calc.click()

console.log(display.textContent)