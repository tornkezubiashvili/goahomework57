// 2) // შეინახეთ ეს ობიექტი localstorage ში, და ასევე წამოიღეთ იქიდან
let accobj = [
    {
        name: "Tornike",
        age: 17

    }
    ,
    {
        name: "dato",
        age: 27

    },
    {
        name: "nodara",
        age: 45

    }
]

let string = JSON.stringify(accobj)
console.log(string)

localStorage.setItem("accobj",string)


let pars = localStorage.getItem("accobj")
console.log(JSON.parse(pars))

