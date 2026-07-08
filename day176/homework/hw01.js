let section1 = document.getElementById("section1")
let section2 = document.getElementById("section2")
let form = document.getElementById("form")
let main = document.getElementById("main")


async function api1() {
    try {
        let response = await fetch("https://fakestoreapi.com/products")
        let data = await response.json()
        for (let i of data) {
            section1.innerHTML += ` <div class="items">
            <a href="cw05.html"><img id="img" src="${i.image}" alt=""></a>
                <div class="description">
                    <p class="p" id="title">
                    ${i.title}</p>
                    <p id="description" class="p">${i.description}</p>
                    <p class="p" id="price"> $${i.price}</p>
                </div>
            </div>`
        }

        form.addEventListener("submit", function (e) {
            e.preventDefault()
            let serch = e.target.search.value
            section1.innerHTML = ""
            section2.innerHTML = ""
            for (let i of data) {
                if (serch.toLowerCase() === i.category) {

                    section1.innerHTML += ` <div        class="items">
                        <a href="cw05.html"><img id="img" src="${i.image}" alt=""></a>
                    <div class="description">
                    <p class="p" id="title">
                    ${i.title}</p>
                    <p id="description" class="p">${i.description}</p>
                    <p class="p" id="price"> $${i.price}</p>
                    </div>
                    </div>`
                }
            }
        })


    } catch (error) {
        console.log(error)
    }
}
api1()



async function api2() {
    try {
        let response2 = await fetch("https://dummyjson.com/products")
        let data2 = await response2.json()


        for (let i of data2.products) {
            section2.innerHTML += ` <div class="items">
            <a href="cw05.html"><img id="img" src="${i.images}" alt=""></a>
                <div class="description">
                    <p class="p" id="title">
                    ${i.title}</p>
                    <p id="description" class="p">${i.description}</p>
                    <p class="p" id="price"> $${i.price}</p>
                </div>
            </div>`

            console.log(i.category)
        }

        form.addEventListener("submit", function (e) {
            e.preventDefault()
            let serch2 = e.target.search.value
            section1.innerHTML = ""
            section2.innerHTML = ""
            for (let i of data2.products) {
                if (serch2.toLowerCase() === i.category) {

                    section2.innerHTML += ` <div class="items">
                    <a href="cw05.html"><img id="img" src="${i.images}" alt=""></a>
                    <div class="description">
                    <p class="p" id="title">
                    ${i.title}</p>
                    <p id="description" class="p">${i.description}</p>
                    <p class="p" id="price"> $${i.price}</p>
                    </div>
                    </div>`
                }
            }
        })


    } catch (error) {
        console.log(error)
    }
}
api2()