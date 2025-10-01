// concat + for loop ----
// ფუნქციამ მიიღოს ორი სია.
// გააერთიანოს (concat), შემდეგ for-ით დაბეჭდოს თითოეული ელემენტი ცალ-ცალკე.


function list(a,b){
    c = a.concat(b)

    for(let i = 0; i < c.length;i++){
        console.log(c[i])
    }

}
list([345,234,567,23,4] , [345,546,234,5,324,6,34,])