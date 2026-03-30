let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let gamravleba = document.getElementById("gamravleba")
let gayofa = document.getElementById("gayofa")
let submit = document.getElementById("submit")


class Calculator {
    constructor(a, b) {
        this.a = a
        this.b = b
    }
    add() {
        return this.a + this.b
    }
    subtract() {
        return this.a - this.b
    }
    multiply() {
        return this.a * this.b
    }
    divide() {
        return this.a / this.b
    }
    update(num1, num2) {
        this.a = Number(num1)
        this.b = Number(num2)
    }

}

let clac = new Calculator()

plus.addEventListener("click", function () {
    clac.update(num1.value, num2.value)

    console.log(clac.add())
})
minus.addEventListener("click", function () {
    clac.update(num1.value, num2.value)

    console.log(clac.subtract())

})
gamravleba.addEventListener("click", function () {
    clac.update(num1.value, num2.value)

    console.log(clac.multiply())

})
gayofa.addEventListener("click", function () {
    clac.update(num1.value, num2.value)

    console.log(clac.divide())

})
