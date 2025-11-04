// 10)შექმენით ობიექტი რომელიც იქნება ცარიელი,შენი დავალებაა რომ ამ ობიექტშ დაამატო 5 property,
// შემდეგ დააკონსოლლოგეთ(რომ შეამოწმოთ შეივსო(დაემატა)თუ არა ,და ამის შემდეგ ამოშალოთ 2 property
//  (ბოლოს დააკონსოლლოგეთ რომ ნახოთ ამოიშალა თუარა)

let carBrand = {

}

carBrand. model1 = "Mercesedes"
carBrand. model2 = "BMW"
carBrand. model3 = "Wolkswagen"
carBrand. model4 = "Toyota"
carBrand. model5 = "Lada"

console.log(carBrand)

delete carBrand.model2
delete carBrand.model5

console.log(carBrand)