let number = prompt("შეიყვანე რიცხვი: ")
let evenCount = 0
let oddCount = 0

for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
        evenCount++
    } else {
        oddCount++
    }
}

console.log("ლუწი რიცხვების რაოდენობა: " + evenCount);
console.log("კენტი რიცხვების რაოდენობა: " + oddCount);