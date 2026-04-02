class Chemikalkulatori {
    constructor() {
        this.boloRicxvi = ""
        this.operacia = ""
        this.axaliRicxvi = true
    }


    bechda(cifri) {
        let ekrani = document.getElementById("ekrani")
        
        if (this.axaliRicxvi == true) {
            ekrani.value = cifri
            this.axaliRicxvi = false
        } else {
            ekrani.value = ekrani.value + cifri
        }
    }


    airchieOp(simbolo) {
        let ekrani = document.getElementById("ekrani")
        this.boloRicxvi = ekrani.value
        this.operacia = simbolo
        this.axaliRicxvi = true
    }

   
    itvale() {
        let ekrani = document.getElementById("ekrani")
        let pirveli = parseFloat(this.boloRicxvi)
        let meore = parseFloat(ekrani.value)
        let pasuxi = 0

        if (this.operacia == "+") pasuxi = pirveli + meore
        if (this.operacia == "-") pasuxi = pirveli - meore
        if (this.operacia == "*") pasuxi = pirveli * meore
        if (this.operacia == "/") {
            if (meore == 0) pasuxi = "Error"
            else pasuxi = pirveli / meore
        }

        ekrani.value = pasuxi
        this.axaliRicxvi = true
    }
}


let chemiKalk = new Chemikalkulatori()


function dawereRicxvi(n) {
    chemiKalk.bechda(n)
}

function miutiteOp(op) {
    chemiKalk.airchieOp(op)
}

function gamotvale() {
    chemiKalk.itvale()
}

function washala() {
    document.getElementById("ekrani").value = "0"
    chemiKalk.axaliRicxvi = true
}

function tsashalaErti() {
    let ek = document.getElementById("ekrani")
    ek.value = ek.value.slice(0, -1)
    if (ek.value == "") ek.value = "0"
}