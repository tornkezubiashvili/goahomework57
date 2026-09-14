function Hw02() {
    const students = [
        { id: 101, name: "Giorgi", score: 95 },
        { id: 102, name: "Nika", score: 78 },
        { id: 103, name: "Saba", score: 88 },
        { id: 104, name: "Luka", score: 67 }
    ];

    let student = students.map(items =>
        <li key = {items.id}>{items.name}score:{items.score}</li>
    ) 
    return(
        <ul>{student}</ul>
    )
}

export default Hw02