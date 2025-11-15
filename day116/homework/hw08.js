// <!-- 8)შექმენი 5 ცალი i თეგი და მოათავსე რაიმე ტექსტი შიგნით,შენი დავცალებაა რომ წამოიღო ყველა i თეგი და შეინახო ცვლადში,
// შენი დავალებააა რომ ყველა i თეგში მყოფი ტექსტი textContent ის გამოყენებით შეცვალო  "viri" ით /გამოიყენე while loop/for loop ორივე -->


let x = document.getElementsByTagName("i")

for(let i of x){
    i.textContent = "viri"
    console.log(i)
}

let j = 0

while( j !== x.length){
    x[j].textContent = "viri2"
    console.log(x[j].textContent)
    j++
}

