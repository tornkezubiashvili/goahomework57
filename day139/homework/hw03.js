// 3)შექმენი ფუნქცია triangleType(a, b, c)
// თუ ყველა გვერდი ტოლია → "Equilateral"
// თუ ორი გვერდი ტოლია → "Isosceles"
// თუ ყველა განსხვავებულია → "Scalene"
// გამოიძახე ფუნქცია სხვადასხვა არგუმენტებით რამდენჯერმე


function triangleType(a, b, c){
    console.log(a == b && b == c? "Equilateral": a == b || b == c || a == c?"Isosceles":"Scalene")
}


triangleType(1, 1, 1)
triangleType(1, 2, 1)
triangleType(1, 2, 3)