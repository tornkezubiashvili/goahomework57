import './App.css'

function Hw01() {
    let products = [
        { id: 1, name: "Laptop", price: 2500, category: "Electronics" },
        { id: 2, name: "Phone", price: 1800, category: "Electronics" },
        { id: 3, name: "Shoes", price: 300, category: "Fashion" },
        { id: 4, name: "Watch", price: 500, category: "Accessories" }

    ]

    let element = products.map(items =>
        <div key={items.id}>
            <p id={items.id}>{items.name}</p>
            <p id={items.id}>{items.price}</p>
            <p id={items.id}>{items.category}</p>
            <p>========</p>
        </div>
    )
    return (
        <div>{element}</div>

    )

}

export default Hw01