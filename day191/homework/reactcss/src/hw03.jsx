function Hw03() {
    const movies = [
        { id: 1, title: "Inception", year: 2010, rating: 8.8 },
        { id: 2, title: "Interstellar", year: 2014, rating: 8.7 },
        { id: 3, title: "The Dark Knight", year: 2008, rating: 9.0 }
    ];

    let move = movies.map(items =>
        <div key={items.id}>
            <p>--------------------</p>
            <p>{items.title}</p>
            <p>Year:{items.year}</p>
            <p>Rating:{items.rating}</p>
            <p>--------------------</p>
        </div>
    )

    return(
        <div>{move}</div>
    )
}

export default Hw03