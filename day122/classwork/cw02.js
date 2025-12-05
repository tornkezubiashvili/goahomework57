function Func(Animal,age){
    this.Animal = Animal
    this.age = age
}

let func1 = new Func("ძაღლი", 2)
let func2 = new Func("კატა", 3)
let func3 = new Func("დათვი", 6)
let func4 = new Func("ლომი", 7)


console.log(func1)
console.log(func2)
console.log(func3)
console.log(func4)