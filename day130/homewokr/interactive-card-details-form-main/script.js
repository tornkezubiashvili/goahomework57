let form = document.getElementById("form")
let name = document.getElementById("name")
let nameSPAN = document.getElementById("nameSPAN")
let dateSPAN = document.getElementById("dateSPAN")

let pNAME = document.getElementById("pNAME")
let month = document.getElementById("month")
let years = document.getElementById("years")


let cvc = document.getElementById("cvc")
let cvcSPAN = document.getElementById("cvcSPAN")

let cardnumber = document.getElementById("cardnumber")
let numSPAN = document.getElementById("numSPAN")
let cardlength = cardnumber.textContent.length


form.addEventListener("submit", function (e) {
    e.preventDefault()
    let num = "0123456789"
    let nametarget = e.target.name.value
    let numbertarget = e.target.number.value
    let monthtarget = e.target.month.value
    let yearstarget = e.target.years.value
    let cvctarget = e.target.cvc.value



    function changname() {
        pNAME.textContent = nametarget
        for (let i of nametarget) {
            if ((num.includes(i))) {
                nameSPAN.style.display = "block"
                nameSPAN.textContent = "wrong format, letter only"
                name.style.borderColor = "red"
                pNAME.textContent = "tornike"
                return 0

            }
        }

        if (nametarget.length < 3 || nametarget.length === 0) {
            nameSPAN.textContent = "can't be less than  three"
            nameSPAN.style.display = "block"
            name.style.borderColor = "red"
            pNAME.textContent = "tornike"
        } else {
            nameSPAN.style.display = "none"
            name.style.borderColor = "blue"
        }

    }

    let alphabet = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzაბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ"
    function monthChange() {
        for (let j of monthtarget) {
            if ((alphabet.includes(j))) {
                dateSPAN.style.display = "block"
                e.target.month.style.borderColor = "red"
                return 0
            } else if (monthtarget.length != 2) {
                dateSPAN.style.display = "block"
                e.target.month.style.borderColor = "red"
                dateSPAN.textContent = "can't be less than Two"
            } else if (monthtarget > 12 || monthtarget < 0) {
                dateSPAN.style.display = "block"
                e.target.month.style.borderColor = "red"
                dateSPAN.textContent = "can't enter 12 above and 1 below"
            } else {
                dateSPAN.style.display = "none"
                e.target.month.style.borderColor = "blue"
                month.textContent = monthtarget
            }

        }
    }

    function yearsChange() {
        for (let l of yearstarget) {
            if ((alphabet.includes(l))) {
                dateSPAN.style.display = "block"
                e.target.years.style.borderColor = "red"
                return 0
            } else if (yearstarget.length != 4) {
                dateSPAN.style.display = "block"
                e.target.years.style.borderColor = "red"
                dateSPAN.textContent = "can't be less than Four"
            } else if (yearstarget > 2026) {
                dateSPAN.style.display = "block"
                e.target.years.style.borderColor = "red"
                dateSPAN.textContent = "can't enter above 2026."
            }
            else {
                dateSPAN.style.display = "none"
                e.target.years.style.borderColor = "blue"
                years.textContent = yearstarget
            }
        }
    }

    function cvcChange() {
        for (let p of cvctarget) {
            if ((alphabet.includes(p))) {
                cvcSPAN.style.display = "block"
                e.target.cvc.style.borderColor = "red"
                return 0
            } else if (cvctarget.length != 3) {
                cvcSPAN.style.display = "block"
                e.target.cvc.style.borderColor = "red"
                cvcSPAN.textContent = "can't be less than  three"
            } else {
                cvcSPAN.style.display = "none"
                e.target.cvc.style.borderColor = "blue"
                cvc.textContent = cvctarget
            }
        }
    }

    function numberChange() {
        for (let n of numbertarget) {
            if ((alphabet.includes(n))) {
                numSPAN.style.display = "block"
                e.target.number.style.borderColor = "red"
                return 0
            } else if (numbertarget.length != 16) {
                numSPAN.style.display = "block"
                e.target.number.style.borderColor = "red"
                numSPAN.textContent = "can't enter more than or less than sixteen."
            }else{
                numSPAN.style.display = "none"
                e.target.number.style.borderColor = "blue"
                cardnumber.textContent = numbertarget
                for(let y = 0; y < cardlength; y++){
                    if(y % 4 === 0){
                        cardnumber[y].textContent = " "
                    }
                }
            }
        }

    }

    changname()
    monthChange()
    yearsChange()
    cvcChange()
    numberChange()

})

