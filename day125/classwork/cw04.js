let body = document.body
function time(){
    let date = new Date()
    let p = document.createElement("p")
    p.textContent = date.getHours() + ":" + date.getMinutes() +  ":" + date.getSeconds()
    body.appendChild(p)

}

setInterval(time,1000)
