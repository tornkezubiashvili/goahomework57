let section1 = document.getElementById("section1")
let shopTitle = document.getElementById("shopTitle")
let form = document.getElementById("form")
let main = document.getElementById("main")
let img = document.getElementsByClassName("img")
let img2 = document.getElementsByClassName("img2")



async function api1() {
    try {
        let response = await fetch("https://fakestoreapi.com/products")
        let data = await response.json()

        let response2 = await fetch("https://dummyjson.com/products")
        let data2 = await response2.json()


        function viewItem() {

            for (let i = 0; i < img.length; i++) {

                img[i].addEventListener("click", function (e) {
                    e.preventDefault()
                    section1.innerHTML = ""
                    section1.innerHTML = ` <div class="items">
                     <a href="#"><img id="img" class="img" src="${data[i].image}" alt=""></a>
                    <div class="description">
                    <p class="p" id="title">
                    ${data[i].title}</p>
                    <p id="description" class="p">${data[i].description}</p>
                    <p class="p" id="price"> $${data[i].price}</p>
                        </div>
                        <button class="itemsButton">BUY NOW</button>
                      </div>`

                })
            }

            for (let i = 0; i < img2.length; i++) {
                img2[i].addEventListener("click", function (e) {
                    e.preventDefault()
                    section1.innerHTML = ""
                    section1.innerHTML = ` <div class="items">
                     <a href="#"><img id="img" class="img" src="${data2.products[i].images}" alt=""></a>
                    <div class="description">
                    <p class="p" id="title">
                    ${data2.products[i].title}</p>
                    <p id="description" class="p">${data2.products[i].description}</p>
                    <p class="p" id="price"> $${data2.products[i].price}</p>
                        </div>
                        <button class="itemsButton">BUY NOW</button>
                      </div>`

                })
            }
        }


        function addItems() {
            for (let i of data) {
                section1.innerHTML += ` <div class="items">
                <a href="#"><img id="img" class="img" src="${i.image}" alt=""></a>
                <div class="description">
                    <p class="p" id="title">
                    ${i.title}</p>
                    <p id="description" class="p">${i.description}</p>
                    <p class="p" id="price"> $${i.price}</p>
                </div>
                </div>`

                viewItem()
            }


            for (let i of data2.products) {
                section1.innerHTML += ` <div class="items">
                <a href="#"><img id="img" class="img2" src="${i.images}" alt=""></a>
                <div class="description">
                    <p class="p" id="title">
                    ${i.title}</p>
                    <p id="description" class="p">${i.description}</p>
                    <p class="p" id="price"> $${i.price}</p>
                </div>
                </div>`
                console.log(i.category)
                viewItem()
            }

        }
        addItems()

        shopTitle.addEventListener("click", function (e) {
            
            section1 = " "
           
            console.log(2222222222)
        })


        form.addEventListener("submit", function (e) {
            e.preventDefault()

            shopTitle.addEventListener("click", function () {
                section1 = ""
                addItems()
            })
            let serch = e.target.search.value
            section1.innerHTML = ""

            for (let i of data) {

                if (serch.toLowerCase() === i.category) {
                    section1.innerHTML += ` <div  class="items">
                        <a href="#"><img id="img" class="img" src="${i.image}" alt=""></a>
                    <div class="description">
                    <p class="p" id="title">
                    ${i.title}</p>
                    <p id="description" class="p">${i.description}</p>
                    <p class="p" id="price"> $${i.price}</p>
                    </div>
                    </div>`
                }
                viewItem()
            }
            for (let i of data2.products) {
                if (serch.toLowerCase() === i.category) {

                    console.log(i)
                    section1.innerHTML += ` <div class="items">
                            <a href="#"><img id="img" class="img2" src="${i.images}" alt=""></a>
                            <div class="description">
                            <p class="p" id="title">
                            ${i.title}</p>
                            <p id="description" class="p">${i.description}</p>
                            <p class="p" id="price"> $${i.price}</p>
                            </div>
                            </div>`
                }
                viewItem()
            }


        })




    } catch (error) {
        console.log(error)
    }
}
api1()

