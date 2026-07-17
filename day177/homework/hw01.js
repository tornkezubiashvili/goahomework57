let Signform = document.getElementById("Signform")
let form = document.getElementById("form")
let section1 = document.getElementById("section1")

form.addEventListener("submit", function (e) {
    e.preventDefault()
    let accInfo = {
        name: e.target.name.value.trim(),
        email: e.target.email.value.trim(),
        phone: e.target.phone.value.trim(),
        password: e.target.password.value.trim(),
        confirmpassword: e.target.confirmpassword.value.trim()
    }


})

try {
    async function RandomFood() {
        let respons = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        let data = await respons.json()


        section1.innerHTML = `<div class="mainDiv">
                <h1 id="title">${data.meals[0].strMeal}</h1>
                <div class="imgDiv">
                    <img id="foodIMG" src="${data.meals[0].strMealThumb}" alt="">
                    <a href="${data.meals[0].strYoutube}" ><img id="YouTubeIMG" src="img/YouTube.webp" alt=""></a>
                </div>
                <div class="Foodinfo">
                    <p id="Category">${data.meals[0].strCategory}</p>
                    <p id="Area">${data.meals[0].strArea}</p>
                    <p id="Instructions">${data.meals[0].strInstructions}<button>More...</button></p>

                    <p id="Ingredient">${data.meals[0].strIngredient1}</p>
                </div>
            </div>`

        for (let i of data.meals) {
            console.log(i)
        }


    }
    RandomFood()
} catch (error) {
    console.log(error)
}
