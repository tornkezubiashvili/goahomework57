// 8)მომხმარებელს შემოატანინე ფერი:
// "red", "green", "blue"

// switch–case-ით დაბეჭდე შესაბამისი ტექსტი.
// თუ სხვა ფერია → default →
// "ასეთი ფერი სისტემაში არ არის"

let color = prompt("შეიყვანე ფერი (red, green, blue):");

switch (color) {
  case "red":
    console.log("წითელი ")
    break

  case "green":
    console.log("მწვანე ")
    break

  case "blue":
    console.log("ლურჯი ")
    break

  default:
    console.log("ასეთი ფერი სისტემაში არ არის")
}