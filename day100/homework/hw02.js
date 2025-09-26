let start = parseInt(prompt("შეიყვანე საწყისი რიცხვი (start):"));
let end = parseInt(prompt("შეიყვანე ბოლო რიცხვი (end):"));

let jami = 0;
let raodenoba = 0;


for (let i = start; i <= end; i++) {
    jami += i;      
    raodenoba++;    
}

let sashualo = jami / raodenoba;

console.log("რიცხვების ჯამი:", jami);
console.log("საშუალო არითმეტიკული:", sashualo);
