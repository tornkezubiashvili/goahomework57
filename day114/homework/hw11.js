// 11)შექმენი ობიექტი book, რომელსაც ექნება "title", "author", "genre", "lang".
// ყველა მიანიჭე სტრინგი.
// for...in ციკლით გამოიტანე მხოლოდ ის value-ები, რომლებიც შეიცავენ ასო "o"-ს.


let book ={
    "title": "idk",
    "author" : "idkok",
    "genre": "idOkkk",
    "lang": "idkkk"

}

for(let i in book){
    for(let j = 0; j < book[i].length; j++){
        if(book[i][j] === "o" || book[i][j] === "O")
            console.log(book[i])
    }
}