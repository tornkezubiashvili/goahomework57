// 1) შექმენით ფუნქცია რომელიც ასინქრონულად დააბრუნებს მონაცემბს(მონაცემი იქნება ამინდის პროგნოზი), ამ ფუნქციას გადაეცემა callback რომელიც მიიღებს არგუმენტად ამინდის პროგნოზის მონაცემს და გამოსახავს შესაბამის რჩევას


function weather(obj) {
    if (obj === "Sunny") {
        console.log("მზიანი ამინდია")
    }
    else if (obj === "Clody") {
        console.log("ღრუბლიანი ამინდია")
    }
    else if (obj === "Rain") {
        console.log("წვიმიანი ამინდია")
    }
}

function func(callback){
    setTimeout(() => {
        callback("Clody")
    },2000)
}

func(weather)