let start = prompt("შეიყვანე საწყისი რიცხვი (start):");
let end = prompt("შეიყვანე ბოლო რიცხვი (end):");


let luwebi = 0;
let kentebi = 0;


for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
        luwebi ++;
    } else {
        kentebi ++;
    }
}

console.log("ლუწების რაოდენობა: " + luwebi + ", კენტების რაოდენობა: " + kentebi);