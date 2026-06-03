function getDataFromBackend(){
    let http = new XMLHttpRequest()

    http.onreadystatechange = function(){
        console.log(this.readyState)
        if(this.readyState == 4 && this.status === 200){
            
            let data = this.responseText
            let parseData =  JSON.parse(data)
            console.log(parseData)
            for(let i = 0;i<parseData.length;i++){
                console.log(parseData[i])
                let li = document.createElement("li")
                li.textContent = parseData[i].title
                document.body.appendChild(li)
            }
        }

    }

    http.open("GET","https://jsonplaceholder.typicode.com/todos")
    http.send()
}

getDataFromBackend()