let numbers = document.getElementsByClassName("num")
let delet = document.getElementById("del")
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let dot = document.getElementById("dot")
let gayofa = document.getElementById("gayofa")
let x = document.getElementById("x");
let reset = document.getElementById("reset")
let equal = document.getElementById("equal")

let res = document.getElementById("res")
let calc = document.getElementById("calc")
let body = document.body
let left = document.getElementsByClassName("left")
let theme = document.getElementsByClassName("theme")
let bkk = document.getElementById("bk")
let func = document.getElementById("func")



let fin = ""

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function (e) {
    fin += numbers[i].textContent
    res.textContent = fin
  })
}

plus.addEventListener("click", function () {
  fin += "+"
  res.textContent = fin
});
minus.addEventListener("click", function () {
  fin += "-"
  res.textContent = fin
});
x.addEventListener("click", function () {
  fin += "*"
  res.textContent = fin
});
dot.addEventListener("click", function () {
  fin += "."
  res.textContent = fin
});
gayofa.addEventListener("click", function () {
  fin += "/"
  res.textContent = fin
});
delet.addEventListener("click", function () {
  fin = fin.slice(0, -1)
  res.textContent = fin
});
reset.addEventListener("click", function () {
  res.textContent = ""
  fin = ""
});
equal.addEventListener("click", function () {
  res.textContent = eval(fin)
});

let bk = document.getElementById("bk")
let btn = document.getElementById("btn")
let operation = document.getElementsByClassName("operation");

let position = 1

btn.addEventListener("click", function () {
  position++;
  if (position == 1) {
    bk.style.justifyContent = "start"
    for (let i = 0; i < numbers.length; i++) {
      numbers[i].style.color = "#424a5d"
    }
  }
  if (position == 2) {
    bk.style.justifyContent = "center"
    func.style.backgroundColor = "#d3cdcd"
    delet.style.backgroundColor = "#388187"
    delet.style.color = "#fefefe"
    reset.style.backgroundColor = "#388187"
    reset.style.color = "#fefefe"
    res.style.backgroundColor = "#fefefe"
    res.style.color = "#39392d"
    calc.style.color = "#39392d"
    body.style.backgroundColor = "#e6e6e6"
    left[0].style.color = "#39392d"
    theme[0].style.color = "#39392d"
    bkk.style.backgroundColor = "#d3cdcd"

  }
  if (position == 3) {
    bk.style.justifyContent = "end"
    position = 0
    bk.style.justifyContent = "center"
    func.style.backgroundColor = "#17062a"
    delet.style.backgroundColor = "#56077c"
    delet.style.color = "#fefefe"
    reset.style.backgroundColor = "#56077c"
    reset.style.color = "#fefefe"
    reset.style.borderBottom = " 3px solid  #661b7e"
    res.style.backgroundColor = "#fefefe"
    res.style.color = "#39392d"
    calc.style.color = "#fee83a"
    body.style.backgroundColor = "#17062a"
    left[0].style.color = "#fee83a"
    theme[0].style.color = "#fee83a"
    bkk.style.backgroundColor = "#d3cdcd"
    btn.style.backgroundColor = "#00e0cb"
    equal.style.backgroundColor = "#00decf"
    equal.style.color = "#000000"
    for (let i = 0; i < numbers.length; i++) {
      numbers[i].style.color = "#fee83a"
      numbers[i].style.background = "#331b4d"
      numbers[i].style.borderBottom = " 3px solid  #661b7e"
    }
    for (let i = 0; i < operation.length; i++) {
      operation[i].style.color = "#fee83a"
      operation[i].style.background = "#331b4d"
      operation[i].style.borderBottom = " 3px solid  #661b7e"
    }
  }
});