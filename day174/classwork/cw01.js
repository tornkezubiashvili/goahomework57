let form = document.getElementById("form")
let card = document.getElementById("card")
let img = document.getElementById("img")
let year = document.getElementById("year")
let name = document.getElementById("name")
let ganre = document.getElementById("ganre")
let discription = document.getElementById("discription")
let main = document.getElementById("main")

form.addEventListener("submit", function (e) {
    e.preventDefault()
    let moveName = e.target.name.value

    function moveFunc() {
        return new Promise((resolve, reject) => {
            let response = fetch(`https://api.tvmaze.com/search/shows?q=${moveName}`)
                .then((response) => response.json())
                .then((data) => resolve(data))
        })


    }

    moveFunc().then((info) => {
        console.log(info)
        main.innerHTML = ""
        main.innerHTML = `
        <div class="card" id="card">
            <img id="img" src="${info[0].show.image.original}" alt="">
            <div>
                <p id="year">${info[0].show.premiered}</p>
                <p id="name">${info[0].show.name}</p>
                <p id="ganre">${info[0].show.genres[0]}</p>
                <p id="discription">${info[0].show.summary}</p>
                
            </div>
        </div>
        `
        // img.src = info[0].show.image.original
        // year.textContent = info[0].show.premiered
        // name.textContent = info[0].show.name
        // ganre.textContent = info[0].show.genres[0]
        // discription.innerHTML = info[0].show.summary

    })



    form.reset()

})


