import React from 'react'
import { useState } from 'react'

function MovieCard({ title, genre, price, id, setselectedMovie }) {

  return (
    <>
      <div key={id.id}>
        {title}-
        {genre}-
        {price}-
        <button onClick={() => setselectedMovie(id)}>Select Movie</button>
      </div>
    </>
  )
}

export default MovieCard