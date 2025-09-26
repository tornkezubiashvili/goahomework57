let num1 = prompt("შეიყვანე პირველი რიცხვი:");
let num2 = prompt("შეიყვანე მეორე რიცხვი:");
let num3 = prompt("შეიყვანე მესამე რიცხვი:");


let maxNum;
let minNum;


if (num1 >= num2 && num1 >= num3) {
  maxNum = num1;
} else if (num2 >= num1 && num2 >= num3) {
  maxNum = num2;
} else {
  maxNum = num3;
}


if (num1 <= num2 && num1 <= num3) {
  minNum = num1;
} else if (num2 <= num1 && num2 <= num3) {
  minNum = num2;
} else {
  minNum = num3;
}


console.log("ყველაზე დიდი რიცხვი:", maxNum);
console.log("ყველაზე პატარა რიცხვი:", minNum);


if (maxNum % 2 === 0) {
  console.log("ყველაზე დიდი რიცხვი ლუწია");
 console.log("ყველაზე დიდი რიცხვი ლუწია");
} else {
  console.log("ყველაზე დიდი რიცხვი კენტია");
  console.log("ყველაზე დიდი რიცხვი კენტია");
}