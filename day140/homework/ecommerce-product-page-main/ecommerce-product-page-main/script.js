let mainIMG = document.getElementById("mainIMG")
let img = document.getElementsByClassName("img")
let quantity = document.getElementById("quantity")
let fullprice = document.getElementById("span")
let p = document.getElementById("p")
let h1 = document.getElementById("h1")


let minus = document.getElementById("minus")
let plus = document.getElementById("plus")
let add = document.getElementById("add")
let cartDIV = document.getElementById("cartDIV")

let result = 0
quantity.textContent = result


let srcarry = [
    "images/image-product-1.jpg",
    "images/image-product-2.jpg",
    "images/image-product-3.jpg",
    "images/image-product-4.jpg"
]

for (let i = 0; i < img.length; i++) {
    img[i].addEventListener("click", function () {
        mainIMG.src = srcarry[i]
        img[i].style.opacity = "30%"
        img[i].style.border = "3px solid hsl(26, 100%, 55%)"
    })


}

minus.addEventListener("click", function () {
    if (result > 0) {
        result -= 1
        p.textContent = result
        quantity.textContent = result
    }

})
plus.addEventListener("click", function () {
    if (result >= 0) {
        result += 1
        p.textContent = result
        quantity.textContent = result
    }

})

add.addEventListener("click",function(){
    fullprice.textContent = `$ ${125 * result}.00`
    cartDIV.style.display = "block"
})

