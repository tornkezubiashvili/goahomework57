// 7)ცვლადი role:
// შეამოწმე თუ ცვლადში ინახება შემდეგი მნშვნელობები გამოიტანე შესაბამისი ტექსტი

// "admin"

// "user"

// "guest"

// switch–case-ით განსაზღვრე წვდომა.
// თუ სხვა მნიშვნელობაა -> default ->
// "როლი არ არის განსაზღვრული"

let role = prompt("შეიყვანე როლი (admin, user, guest):")

switch (role) {
  case "admin":
    console.log("ადმინი — სრული წვდომა ")
    break

  case "user":
    console.log("მომხმარებელი — შეზღუდული წვდომა")
    break

  case "guest":
    console.log("სტუმარი — მხოლოდ ნახვის უფლება")
    break

  default:
    console.log("როლი არ არის განსაზღვრული")
}