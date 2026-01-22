let addbutton = document.getElementsByClassName("add")
let quantity = document.getElementsByClassName("quantity")


let minuss = document.getElementsByClassName("minuss")
let plusss = document.getElementsByClassName("plusss")
let p = document.getElementsByClassName("p")

let addeditems = document.getElementById("addeditems")

let foodP = document.getElementsByClassName("foodP")
let foodH2 = document.getElementsByClassName("foodH2")
let foodPrice = document.getElementsByClassName("foodPrice")

let executed = false

let items = document.getElementById("items")
let Purchased = document.getElementById("Purchased")


let Pquantity = [0, 0, 0, 0, 0, 0, 0, 0, 0]
let num = 0



for (let i = 0; i <= addbutton.length; i++) {
    addbutton[i].addEventListener("click", function () {
        addbutton[i].style.display = "none"
        quantity[i].style.display = "block"
        quantity[i].style.display = "flex"


        plusss[i].addEventListener("click", function () {
            Pquantity[i] += 1
            p[i].textContent = Pquantity[i]

        })

        minuss[i].addEventListener("click", function () {
            if (Pquantity[i] !== 0) {
                Pquantity[i] -= 1
                p[i].textContent = Pquantity[i]
            }
        })

        quantity[i].addEventListener("click", function () {

            addeditems.style.display = "none"
            let Caretdiv1 = document.createElement("div")
            let CaretFoodName = document.createElement("p")
            let Caretdiv2 = document.createElement("div")
            let NumberofFood = document.createElement("p")
            CaretFoodName.textContent = foodH2[i].textContent
            NumberofFood.textContent = `${Pquantity[i]}x`

            Purchased.appendChild(Caretdiv1)

            Caretdiv1.appendChild(CaretFoodName)
            Purchased.appendChild(Caretdiv2)
            Caretdiv2.appendChild(NumberofFood)

            return 0


        })
    })


}



