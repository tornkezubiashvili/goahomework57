// 5)მომხმარებელს შემოატანინე ტექსტი:
// "car", "bus", "bike", "train"

// switch–case გამოყენებით დაბეჭდე შესაბამისი აღწერა.
// default შემთხვევაში → "უცნობი ტრანსპორტი".

let transport = prompt("შეიყვანე ტრანსპორტი (car, bus, bike, train):");

switch (transport) {
  case "car":
    console.log("მანქანა")
    break

  case "bus":
    console.log("ავტობუსი ")
    break

  case "bike":
    console.log("ველოსიპედი ")
    break

  case "train":
    console.log("მატარებელი ")
    break

  default:
    console.log("უცნობი ტრანსპორტი")
}