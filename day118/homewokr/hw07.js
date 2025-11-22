// 7)შექმენით HTML გვერდი <div id="container"></div> და <button> ელემენტით.
// -----ყოველი დაჭერისას შექმენით ახალი <p> ელემენტი ტექსტით "Item X" (X = დამატებული ელემენტების რაოდენობა).
// -----დაამატეთ ახალი ელემენტი container-ში.

let count = 0

document.getElementById("addBtn").addEventListener("click", function () {
    count++

    let p = document.createElement("p")
    p.textContent = "Item " + count

    document.getElementById("container").appendChild(p)
})