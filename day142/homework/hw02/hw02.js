
let input = document.getElementById("input")
let Total = document.getElementById("Total")
let Remaining = document.getElementById("Remaining")

let TotalNum = 0
let RemainingNum = 50
Total.textContent = TotalNum
Remaining.textContent = RemainingNum




input.addEventListener("input", function (e) {
    let InputLength = e.target.value.length
    if (InputLength <= 50) {
        TotalNum += 1
        RemainingNum -= 1
        Total.textContent = TotalNum
        Remaining.textContent = RemainingNum
    }
})