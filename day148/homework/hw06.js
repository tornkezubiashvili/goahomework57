// 6)დავალება:

// გამოიყენე findIndex, რათა იპოვო პირველი თანამშრომელი IT დეპარტამენტში, რომლის ანაზღაურება 1500-ზე ნაკლებია და ასაკი 30-ზე ნაკლებია.

// დაბეჭდე index და იმ თანამშრომლის ობიექტიც.

const employees = [
    { name: "მარიამი", age: 25, department: "IT", salary: 1000 },
    { name: "გიორგი", age: 30, department: "HR", salary: 900 },
    { name: "ანა", age: 22, department: "IT", salary: 1000 },
    { name: "ლაშა", age: 28, department: "Finance", salary: 1500 },
    { name: "ნინო", age: 35, department: "IT", salary: 2000 }
];


let FindIndex = employees.findIndex(index => index.department === "IT" && index.salary < 1500 && index.age < 30)


console.log(FindIndex)
console.log(employees[FindIndex])
