// 8)შექმენი ობიექტი movie, რომელსაც ექნება "title", "genre", "rating", "year" და ყველას მიანიჭეთ სტრინგ ტიპის მონაცემი.
// for...in ციკლით გადაუარეთ ობიექტს და გამოიტანეთ მხოლოდ ის სტრინგები რომელთა სიგრძე ნაკლებია 4 ზე


let movie = {
    "title" : "idk",
    "genre" : "idkk",
    "rating": "odkkkk",
    "year":  "idkkkkkkkkkk"
}

for(let i in movie){
    if(movie[i].length < 4){
        console.log(movie[i])
    }
}