
// 1. მაქსიმალური და მინიმალური

// დაწერეთ კოდი, რომლის გამოტანის 5 რიტმის მაქსიმალური და მინიმალური.

// გამოიყვანეთ Math.max () და Math.min()
console.log(Math.max[1,2,3,4,5])
console.log(Math.min[1,2,3,4,5])

// 2. მიღება

// Boy Math.round(), Math.ceil() Math.floor()

// შემდეგ რიტმებზე: 4.7, 9.1, -3.6.
console.log(Math.round(4.7))
console.log(Math.ceil(9.1))
console.log(Math.floor(-3.6))

// 3. ხარისხში აყვანა

// გამოთვალე:

// 34, 52, 210

// გამოყენე Math.pow()
console.log(Math.pow(3, 4))
console.log(Math.pow(5, 2))
console.log(Math.pow(2, 1))

// 4. კვადრატული ფესვი

// გამოთვალე კვადრატული ფესვი რიცხვების: 25, 144, 2

// შედეგეები გამომრთველი Math.round() -ით.

console.log(Math.round(25))
console.log(Math.round(144))
console.log(Math.round(2))


// 5. აბსოლუტური მნიშვნელობა

// გარდაქმნილი გარანტიის რიცხვები დადებითად: -8.3,5 12

// გამოყენე Math.abs()

console.log(Math.abs(-8.3))
console.log(Math.abs(-12))

// 7. კომბინირებული გამოთვლა

// დაწერეთ ფუნქცია calculate(num), რომელი:

// 1. აიყვანს num -s მე-2 ხარისხში

// 2. ამოიღებს კვადრატულ ფესვს

// 3. გაამყარებს ქვევით (Math. floor) მკ: calculate)7.8( 7
let num = Math.pow(5, 2)
num = Math.sqrt(num)

console.log(Math.floor(num))

//9 პითაგორას თეორეა დაწერე ფუნქცია pythagoras(a,b), რომელიც აბრუნებს ჰიპოტენუზას:
// c = კვადრატულ ფესვს

function pythagoras(a,b){
    console.log(Math.sqrt(a + b))
}

pythagoras(2,6)



