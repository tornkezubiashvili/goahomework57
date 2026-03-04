// შექმენით მანქანის ობიექტი, რომელსაც აქვს ბრენდი, მოდელი და გამოშვების წელი.
// დავალება: დესტრუქციის დროს ბრენდისა და მოდელის ცვლადებს შეუცვალე სახელები, ხოლო წელი უცვლელად დატოვე.


let car = {
  brand: "MERSEDES",
  model: "W211",
  year: 2005
}


let { brand: carBrand, model: carModel, year } = car

console.log(carBrand)
console.log(carModel)
console.log(year)     