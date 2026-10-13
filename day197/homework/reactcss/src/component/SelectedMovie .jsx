import React from 'react'

function SelectedMovie({ selectedMovie }) {
  console.log(selectedMovie)
  if (!selectedMovie) {
    return
  }

  return (

    <>
      <p>{selectedMovie.title}</p>
      <p>{selectedMovie.genre}</p>
      <p>{selectedMovie.price}</p>

    </>
  )
}

export default SelectedMovie 