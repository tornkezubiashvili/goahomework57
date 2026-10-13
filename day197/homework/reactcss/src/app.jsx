import { useState } from "react";
import MovieList from "./component/MovieList";
import SelectedMovie from "./component/SelectedMovie ";


function App() {
    const movies = [
        { id: 1, title: "Interstellar", genre: "Sci-Fi", price: 15 },
        { id: 2, title: "Inception", genre: "Thriller", price: 12 },
        { id: 3, title: "The Dark Knight", genre: "Action", price: 14 },
        { id: 4, title: "Avatar", genre: "Fantasy", price: 13 }
    ];
    const [selectedMovie, setselectedMovie] = useState(null)

    return (
        <>
            <MovieList move={movies} setselectedMovie={setselectedMovie} />
            <SelectedMovie selectedMovie={selectedMovie}/>

        </>
    )
}

export default App
