// 3)შექმენი კლასი Calculator, რომელსაც ექნება მეთოდები:

// add(a, b)
// subtract(a, b)
// multiply(a, b)
// divide(a, b)

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
}

let clac = new Calculator(10,24)
console.log(clac.add())
console.log(clac.subtract())
console.log(clac.multiply())
console.log(clac.divide())
