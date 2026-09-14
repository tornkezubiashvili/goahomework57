import './App.css'

function Hw01() {
    const products = [
        { id: 1, name: "Laptop", price: 2500, category: "Electronics" },
        { id: 2, name: "Phone", price: 1800, category: "Electronics" },
        { id: 3, name: "Shoes", price: 300, category: "Fashion" },
        { id: 4, name: "Watch", price: 500, category: "Accessories" }

    ];


    let elements = products.map(items => {
        <div key={elements.id}>
            <p id={elements.id}>{items.name}</p>
            <p id={elements.id}>{items.price}</p>
            <p id={elements.id}>{items.category}</p>
        </div>
    })

    return (
        <>
            <p>54645</p>
        </>
    )
}
export default Hw01
