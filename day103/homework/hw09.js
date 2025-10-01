//შექმენი ფუნქცია რომელსაც გადაეცემა რიცხვებით სავსე სია,შენი დავალებაა რომ გაიგო ამ სიაში მყოფი ლუწი რიცხვების რაოდენობა და კენტი რიცხვების ჯამი


function numlist(arr) {
    let even = 0
    let odd = 0
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0){
            even ++
        }
        else{
            odd +=arr[i]
        }
    }
    console.log("ლუწების რაოდენობა" + even)
    console.log("კენტების ჯამი" + odd)
}
numlist([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])