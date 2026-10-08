import React from 'react'
import MovieCard from './MovieCard'


function MovieList({ info }) {


  return (
    <>
      {
        info.map(items => {
          <MovieCard
            key={items.id}
            title={items.title}
            genre={items.genre}
            rating={items.rating}
            price={items.price}
            isAvailable={items.isAvailable}
          />

        })
      }
    </>

  )
}

export default MovieList