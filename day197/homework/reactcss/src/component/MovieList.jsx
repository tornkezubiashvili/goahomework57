import React from 'react'
import MovieCard from './MovieCard'

function MovieList({ move ,setselectedMovie}) {
  console.log(move)
  return (
    <>
      {
        move.map(items =>
          <MovieCard title={items.title} genre={items.genre} price={items.price} id={items.id} setselectedMovie={setselectedMovie} />
        )
      }

    </>
  )
}

export default MovieList