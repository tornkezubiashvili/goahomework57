//4)შექმენი ფუქნცია findMin(arr) – მიიღოს სია და დააბრუნოს ყველაზე პატარა რიცხვი. (შეგიძლიათ მოიძიოთ და გააკეთოთ, საჭროა ლოგიკის დაწერა რომ ეს დავალება შეასრულოთ)


function findMax(arr) {
    let min = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log(min)

}

findMax([23, 354, 567, 234, 546])