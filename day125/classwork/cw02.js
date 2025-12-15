let btn = document.getElementById("btn")
let p = document.getElementById("p")

btn.addEventListener("click",function(){
    let data = new Date()
    p.textContent = data.getHours() + ":" + data.getMinutes() +  ":" + data.getSeconds()
})

