function Hw04() {
    const teams = [
        {
            id: 1,
            name: "Red Team",
            members: ["Giorgi", "Nika", "Saba"]
        },
        {
            id: 2,
            name: "Blue Team",
            members: ["Luka", "Dato", "Ana"]
        }
    ];

    let team = teams.map(items =>

        <div key={items.id}>
            <h1>{items.name}</h1>
            <p>
                {items.members.map(value =>
                    value
                )}
            </p>
        </div>

    )

    return (
        <div>{team}</div>
    )
}

export default Hw04