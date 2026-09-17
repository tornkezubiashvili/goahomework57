function Hw02() {

    const books = [
        { id: 1, title: "Harry Potter", pages: 350, author: "J.K. Rowling" },
        { id: 2, title: "The Hobbit", pages: 280, author: "Tolkien" },
        { id: 3, title: "Dune", pages: 600, author: "Frank Herbert" },
        { id: 4, title: "Animal Farm", pages: 120, author: "George Orwell" }
    ];

    let map = books.map(items =>
        <>

            <p>{items.title}</p>
            <p>{items.title} {items.author} {items.pages}</p>
            <p>{items.pages > 300? "სქელი წიგნი": items.pages > 200? "მოკლე წიგნი":"საშუალო ზომის წიგნი"}</p>
        </>
    )
    return (
        <div>{map}</div>
    )
}

export default Hw02