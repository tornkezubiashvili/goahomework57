let count = 0

let h1 = document.createElement("h1")
document.getElementById("div").appendChild(h1)
h1.innerHTML = count
h1.style.fontSize = "60px"

if (count === 0) {
    h1.style.color = "white"
} else if (count > 0) {
    h1.style.color = "green"
} else {
    h1.style.color = "red"
}

document.getElementById("minus").addEventListener("click", function () {
    count--
    h1.innerHTML = count
    if (count === 0) {
        h1.style.color = "white"
    } else if (count > 0) {
        h1.style.color = "green"
    } else {
        h1.style.color = "red"
    }
})
document.getElementById("plus").addEventListener("click", function () {
    count++
    h1.innerHTML = count
    if (count === 0) {
        h1.style.color = "white"
    } else if (count > 0) {
        h1.style.color = "green"
    } else {
        h1.style.color = "red"
    }
})
document.getElementById("reset").addEventListener("click", function () {
    count = 0
    h1.innerHTML = count
    if (count === 0) {
        h1.style.color = "white"
    } else if (count > 0) {
        h1.style.color = "green"
    } else {
        h1.style.color = "red"
    }
})