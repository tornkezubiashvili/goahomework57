import './App.css'

function Hw01() {
    const games = [
        { id: 1, name: "Minecraft", genre: "Adventure", hours: 120 },
        { id: 2, name: "FIFA", genre: "Sports", hours: 45 },
        { id: 3, name: "GTA V", genre: "Action", hours: 200 },
        { id: 4, name: "The Sims", genre: "Simulation", hours: 30 }
    ];

    let maps = games.map(items =>
        <>
            <p>{items.name}</p>
            <p>{items.name} {items.genre} {items.hours}</p>
            <p>{items.hours > 100 && "ბევრი დროა!"}</p>
            <p>{items.genre = "Action" && "სათავგადასავლო მოქმედება"}</p>
        </>
    )

    return(
        <div>{maps}</div>
    )
}

export default Hw01