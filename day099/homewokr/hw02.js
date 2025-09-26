let name = prompt("შეიყვანე სახელი:");
let age = Number(prompt("შეიყვანე ასაკი:"));

if (name === "გიორგი" && age > 18) {
    console.log("your name is giorgi and you are adult");
} else if (name === "ნიკა" && age < 18 && age > 11) {
    console.log("your name is nika and you are younger");
} else if ((name === "saba" || name === "irakli") && age < 11 && age > 5) {
    console.log("you have nice name but you are too young");
} else {
    console.log("you are not born yet D");
}