//5)შექმენით ფუნქცია average(arr) – მიიღოს რიცხვების სია და დააბრუნოს მათი საშუალო (ჯამი / რაოდენობა).

function average(arr){
    let sum = 0
    for (let i = 0; i<arr.length; i++){
        sum +=arr[i]
    }
    console.log(sum / arr.length)

}

average([45,567,2465,7241,456])
