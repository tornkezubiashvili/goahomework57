function Hw05() {
    const cart = [
        { id: 1, name: "Keyboard", price: 120, quantity: 2 },
        { id: 2, name: "Mouse", price: 60, quantity: 1 },
        { id: 3, name: "Monitor", price: 700, quantity: 2 }
    ];


    let element = cart.map(items =>
        <div key={items.id}>
            <p>=============</p>
            <h1>{items.name}</h1>
            <p>Price: {items.price}</p>
            <p>Quantity: {items.quantity}</p>
            <p>Total: {items.price * items.quantity}</p>
        </div>
    )

    return(
        <div>{element}</div>
    )
}

export default Hw05