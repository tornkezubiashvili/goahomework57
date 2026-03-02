// 2)მომხმარებელს შემოატანინე თვის ნომერი (1–12).
// switch–case გამოყენებით განსაზღვრე სეზონი:

// 12,1,2 → ზამთარი

// 3,4,5 → გაზაფხული

// 6,7,8 → ზაფხული

// 9,10,11 → შემოდგომა

let num = Number(prompt("შეიყვანე რიცხვი 1-12: "))

switch (num) {
    case 12, 1, 2:
        console.log("ზამთარი")
        break
    case 3, 4, 5:
        console.log("გაზაფხული")
        break
    case 6, 7, 8:
        console.log("ზაფხული")
        break
    case 9, 10, 11:
        console.log("შემოდგომა")
        break
}
