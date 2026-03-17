// 12)მოცემულია მასივი პროდუქტების ობიექტებით:
// გამოიყენე reduce, რათა გამოითვალოს პროდუქტების საერთო ფასი.

// დაბეჭდე შედეგი.

const products = [
    { name: "ვაშლი", price: 2 },
    { name: "ბანანი", price: 3 },
    { name: "სტაფილო", price: 1 }
];




let ProductsReduce = products.reduce((accumulatir, currentValues) => {
    return accumulatir += currentValues.price
},0)

console.log(ProductsReduce)