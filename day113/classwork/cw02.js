//2)შექმენით ობიექტი ,სადაც გექნებათ თავიდან 3 property(თქვენ რაზეც გინდათ) ,
//  ამის შემდეგ ამ ობიექტში დაამატეთ კიდევ 2 property ,(დააკონსოლლოგეთ ობიექტი რომ ნახოთ ჩაემატა თუ არა) ,
// ამის შემდეგ ამოშალეთ ობიექტიდან თავიდან თქვენს მოერ შექმნილი 3 property და დატოვეთ მხოლოდ ჩამატებულები,
//  დააკონსოლლოგეთ ობიექტი რომ ნახოთ შედეგი ამოიშალა თუ არა  


let object = {
    Fruit1: "ვაშლი",
    Fruit2: "ატამი",
    Fruit3: "მსხალი",
}

object.Fruit4 = "ალუჩა"
object.Fruit5 = "ქლიავი"

console.log(object)

delete object.Fruit1
delete object.Fruit2
delete object.Fruit3

console.log(object)