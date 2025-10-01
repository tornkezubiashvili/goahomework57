//დაწერე ფუნქცია countEvenOdd(arr), რომელიც მიიღებს რიცხვების სიას და დაბეჭდავს რამდენია ლუწი და რამდენი კენტი.

function countEvenOdd(arr) {
    let even = 0
    let odd = 0
    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] % 2 == 0) {
            even++
        } else (
            odd++
        )
    }
    console.log("even" + even)
    console.log("odd" + odd)
}


countEvenOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
