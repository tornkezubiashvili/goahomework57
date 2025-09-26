let input = prompt("ჩაწერე რიცხვი:");

let num = Number(input);

if (num != num){
    console.log("you entered string number,so you are wrong")
}
else{
    for(let i= 0; i<=input; i++){
        console.log(i)
    }
}