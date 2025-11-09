// 9)შექმენი ობიექტი fruit, რომელსაც ექნება "name", "color", "taste", "size".
// ყველას მიანიჭე სტრინგი.
// for...in ციკლით გამოიტანე მხოლოდ ის value-ები, რომლებიც იწყება ასო "a"-ზე.


let fruit = {
    "name": "adk",
    "color": "idkkk",
    "taste": "Adkkkkk",
    "size" : "idkkk"

}

for(let i in fruit){
    if(fruit[i][0] === "a" || fruit[i][0] === "A" ){
        console.log(fruit[i])
    }
}