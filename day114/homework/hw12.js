// 12)შექმენი ობიექტი person, რომელსაც ექნება "name" და "age".
// ობიექტში დაამატე ფუნქცია სახელად showInfo, რომელიც კონსოლში გამოიტანს:
// `ჩემი სახელია ... და მე ვარ ... წლის ,გამოიყენე this keyword ი` ,გამოიძახეთ ფუნქცია რომ ნახოთ შედეგი


let person = {
    "name": "tornike",
    "age": "17",

}

person.func = function showInfo(){
    console.log(`ჩემი სახელია ${this.name} მე ვარ ${this.age} წლის`)
}


console.log(person.func())