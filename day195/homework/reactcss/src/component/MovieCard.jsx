import React from 'react'

function MovieCard({ key, title, genre, rating, price, isAvailable }) {
    return (
        <>
            <p>{key}</p>
            <p>{title}</p>
            <p>{genre}</p>
            <p>{rating}</p>
            <p>{price}</p>
            <p>{isAvailable}</p>
        </>

    )
}

export default MovieCard