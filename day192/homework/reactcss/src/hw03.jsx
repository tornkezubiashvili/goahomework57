function Hw03() {
    const destinations = [
        { id: 1, city: "Paris", country: "France", days: 5, price: 1200 },
        { id: 2, city: "Rome", country: "Italy", days: 3, price: 800 },
        { id: 3, city: "Tokyo", country: "Japan", days: 10, price: 2500 },
        { id: 4, city: "Tbilisi", country: "Georgia", days: 4, price: 400 }
    ];

    let map = destinations.map(items =>
        <>
            <p>{items.city} {items.country} {items.days} {items.price}</p>
            <p>{items.days > 7 && "ხანგრძლივი მოგზაურობა"} </p>
            <p>{items.price < 1000 && "ბიუჯეტური მოგზაურობა"}</p>
        </>
    )

    return(
        <div>{map}</div>
    )

}

export default Hw03