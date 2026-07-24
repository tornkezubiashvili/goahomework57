let Signform = document.getElementById("Signform")
let form = document.getElementById("form")
let section1 = document.getElementById("section1")
let YouTubeIMG = document.getElementById("YouTubeIMG")
let ingredientDiv = document.getElementById("ingredientDiv")
// signform.addEventListener("submit", function (e) {
//     e.preventDefault()
//     let accInfo = {
//         name: e.target.name.value.trim(),
//         email: e.target.email.value.trim(),
//         phone: e.target.phone.value.trim(),
//         password: e.target.password.value.trim(),
//         confirmpassword: e.target.confirmpassword.value.trim()
//     }


// })


//https://www.themealdb.com/api/json/v1/1/search.php?s={food}



try {
    async function RandomFood() {
        
        let ingredientArry = []


        let respons = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        let data = await respons.json()


        form.addEventListener("submit", async function (e) {
            e.preventDefault()
            let searchValue = e.target.search.value
            let searchRespons = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
            let searchData = await searchRespons.json()
            console.log(searchData)
            console.log(searchData.meals[0].strMeal)


            section1.innerHTML = `<div class="mainDiv">
                <div class="titlediv"> 
                    <h1 id="title">${searchData.meals[0].strMeal}</h1>
                    <div class="imgDiv">
                        <img id="foodIMG" src="${searchData.meals[0].strMealThumb}" alt="">
                        <a href="${searchData.meals[0].strYoutube}" ><img id="YouTubeIMG" src="img/YouTube.webp" alt=""></a>
                    </div>
                </div>
                <div class="Foodinfo">
                    <p id="Category">${searchData.meals[0].strCategory}</p>
                    <p id="Area">${searchData.meals[0].strArea}</p>
                    <p id="Instructions">${searchData.meals[0].strInstructions}</p>

                    <p id="Ingredient">${searchData.meals[0].strIngredient1}</p>
                </div>
            </div>`

        })


        section1.innerHTML = `<div class="mainDiv">
                <div class="titlediv"> 
                    <h1 id="title">${data.meals[0].strMeal}</h1>
                    <div class="imgDiv">
                        <img id="foodIMG" src="${data.meals[0].strMealThumb}" alt="">
                        <a href="${data.meals[0].strYoutube}" target="_blank" ><img id="YouTubeIMG" src="img/YouTube.webp" alt=""></a>
                    </div>
                </div>
                <div class="Foodinfo">
                    <p id="Category">${data.meals[0].strCategory}</p>
                    <p id="Area">${data.meals[0].strArea}</p>
                    <p id="Instructions">${data.meals[0].strInstructions}</p>

                    <div id="ingredientDiv">${data.meals[0].strIngredient1}</div>
                </div>
            </div>`

        for (let i = 1; i < 21; i++) {

            if (data.meals[0][("strIngredient" + i)].length != "") {
                ingredientArry.push(data.meals[0][("strIngredient" + i)])
            }
        }

        for (let i = 1; i < 21; i++) {

            if (data.meals[0][("strMeasure" + i)].length != "") {
                ingredientArry.push(data.meals[0][("strMeasure" + i)])
            }
        }
        ingredientDiv = document.getElementById("ingredientDiv")
        let p = ""
        for (let i of ingredientArry) {
           ingredientDiv.innerHTML += `
                <p>${i}</p>
           `

           
        
           

        }
        


        




    }
    RandomFood()
    YouTubeIMG.addEventListener("click", function (e) {
        e.preventDefault()
    })

} catch (error) {
    console.log(error)
}
