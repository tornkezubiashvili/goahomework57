import React from 'react'
import MovieCard from './MovieCard'

function MovieList({ move ,setselectedMovie}) {
  console.log(move)
  return (
    <>
      {
        move.map(items =>
          <MovieCard obj={items} title={items.title} genre={items.genre} price={items.price} key={items.id} setselectedMovie={setselectedMovie} />
        )
      }

    </>
  )
}

export default MovieList