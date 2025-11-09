// 14)შექმენი ობიექტი student, რომელსაც ექნება "firstName", "lastName" და ფუნქცია სახელად getFullName(),
// რომელიც დააბრუნებს შემდეგნაირ ტექსტს --> `ჩემი სახელია ... და ჩემი გვარია ...` ,გამოიყენე this keyword ი`
//   ,გამოიძახეთ ფუნქცია რომ ნახოთ შედეგი


let student = {
    "firstName": "tornike",
    "lastName": "zubiashvili",
    func : function getFullName(){
        console.log(`ჩემი სახელია ${this.firstName} და ჩემი გვარია ${this.lastName}`)

    }
}

console.log(student.func())