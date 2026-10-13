import React from 'react'
import { useState } from 'react'

function MovieCard({obj, title, genre, price, key, setselectedMovie }) {

  return (
    <>
      <div key={key}>
        {title}-
        {genre}-
        {price}-
        <button onClick={() => setselectedMovie(obj)}>Select Movie</button>
      </div>
    </>
  )
}

export default MovieCard