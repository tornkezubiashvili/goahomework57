// 1) ააწყოთ register და login გვერდები თავისი ფუნქციონალით კარგი დიზაინით და + localstorage

let form = document.getElementById("form")

let LocalArray = JSON.parse(localStorage.getItem("acc")) || []

form.addEventListener("submit", function (e) {
    e.preventDefault()
    let targ = e.target
    LocalArray.push(targ)
    localStorage.setItem("acc", JSON.stringify(LocalArray))
    console.log(targ)
})

