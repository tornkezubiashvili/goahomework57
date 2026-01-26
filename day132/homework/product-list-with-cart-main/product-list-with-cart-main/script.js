let addbutton = document.getElementsByClassName("add")
let quantity = document.getElementsByClassName("quantity")
let foodIMG = document.getElementsByClassName("foodIMG")

let minuss = document.getElementsByClassName("minuss")
let plusss = document.getElementsByClassName("plusss")
let p = document.getElementsByClassName("p")

let addeditems = document.getElementById("addeditems")

let foodP = document.getElementsByClassName("foodP")
let foodH2 = document.getElementsByClassName("foodH2")
let foodPrice = document.getElementsByClassName("foodPrice")

let items = document.getElementById("items")
let Purchased = document.getElementById("Purchased")

let Pquantity = [0, 0, 0, 0, 0, 0, 0, 0, 0]
let num = 0

for (let i = 0; i <= addbutton.length; i++) {
    addbutton[i].addEventListener("click", function () {
        addbutton[i].style.display = "none"
        quantity[i].style.display = "block"
        quantity[i].style.display = "flex"
        foodIMG[i].style.border = "1px solid  hsl(14, 86%, 42%)"


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
        let Caretdiv1 = document.createElement("div")
        let CaretFoodName = document.createElement("p")
        let Caretdiv2 = document.createElement("div")
        let NumberofFood = document.createElement("h3")
        let Price = document.createElement("p")
        let Fullprice = document.createElement("p")
        let Fullpriceee = Pquantity[i].textContent * foodPrice[i].textContent

        console.log(Pquantity[i] * foodPrice[i].textContent)

        p[i].addEventListener("click", function () {
            addeditems.style.display = "none"

            // CaretFoodName.textContent = foodH2[i].textContent
            // NumberofFood.textContent = `${Pquantity[i]}x`

            // Purchased.appendChild(Caretdiv1)
            // Caretdiv1.classList = "Caretdiv1"

            // Caretdiv1.appendChild(CaretFoodName)
            // CaretFoodName.classList = "CaretFoodName"

            // Purchased.appendChild(Caretdiv2)
            // Caretdiv2.classList= "Caretdiv2"

            // Caretdiv2.appendChild(NumberofFood)
            // NumberofFood.classList = "NumberofFood"

            // Price.textContent = `@$ ${foodPrice[i].textContent}`
            // Caretdiv2.appendChild(Price)

            // Fullprice.classList = "Fullprice"
            // Caretdiv2.appendChild(Fullprice)
            // Fullprice.textContent = `$ ${Fullpriceee}`


            Purchased.innerHTML = `
                <div class="Caretdiv1"> 
                    <p class ="CaretFoodName">${foodH2[i].textContent}x</p>
                </div>
                <div class="Caretdiv2">
                    <h3 class = "NumberofFood">${Pquantity[i]}x </h3>
                    <p class = "Price">@$ ${foodPrice[i].textContent}</p>
                    <p class = "Fullprice">$ ${Fullpriceee}</p>
                </div>

            `
        })
    })
}