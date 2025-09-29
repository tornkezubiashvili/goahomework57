function num(start,end){
    let num1 = 0
    for(let i = start; i <= end; i++){
        num1+=i
        if(num1 >= 100){
            console.log("დიდი ჯამი")
        }
        else{
            console.log("პატარა ჯამი")
        }
    }
}


num(0,20)