let form = document.getElementById("form")
let name = document.getElementById("name")
let nameSPAN = document.getElementById("nameSPAN")
let pNAME = document.getElementById("pNAME")

let cardnumber = document.getElementById("cardnumber")
let number = document.getElementById("number")
form.addEventListener("submit", function (e) {
    e.preventDefault()
    let num = "0123456789"
    let nametarget = e.target.name.value
    let numbertarget = e.target.number.value
    let monthtarget = e.target.month.value
    let yearstarget = e.target.years.value
    let cvctarget = e.target.cvc.value
    

    let cardtarget = e.target.number.value




    function changname() {
        pNAME.textContent = nametarget
        for (let i of nametarget) {
            if ((num.includes(i))) {
                nameSPAN.style.display = "block"
                nameSPAN.textContent = "wrong format, letter only"
                name.style.borderColor = "red"
                pNAME.textContent ="tornike"
                return 0

            }
        }

        if (nametarget.length < 3 || nametarget.length === 0) {
            nameSPAN.textContent = "can't be less than  three"
            nameSPAN.style.display = "block"
            name.style.borderColor = "red"
            pNAME.textContent ="tornike"
        } else {
            nameSPAN.style.display = "none"
            name.style.borderColor = "blue"
            nameCorrect = true
        }

    }

   
changname()

})

