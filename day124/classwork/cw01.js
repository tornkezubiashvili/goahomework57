let from = document.getElementById("form")
let inp = document.getElementById("inp")
let h1 = document.getElementById("h1")
let btn = document.getElementById("btn")
let body = document.body


let Colorarr = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F"
];

let Color = "#";

for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * Colorarr.length);
    Color += Colorarr[randomIndex];
    h1.textContent = Color
    h1.style.color = Color
    body.style.backgroundColor = Color
    btn.style.backgroundColor = Color
}


from.addEventListener("submit", function (e) {
    e.preventDefault()
    let inpvalue = e.target.inp.value
    if (inpvalue.length != 6) {
        let Color = "#";
        for (let i = 0; i < 6; i++) {
            let randomIndex = Math.floor(Math.random() * Colorarr.length);
            Color += Colorarr[randomIndex];
            h1.textContent = Color
            h1.style.color = Color
            body.style.backgroundColor = Color
            btn.style.backgroundColor = Color
        }
    } else{
        h1.textContent = `#${inpvalue}`
        h1.style.color = `#${inpvalue}`
        body.style.backgroundColor = `#${inpvalue}`
        btn.style.backgroundColor = `#${inpvalue}`
    }

})
