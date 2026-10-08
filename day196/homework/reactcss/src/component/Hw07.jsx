import React from 'react'
import { useState } from 'react'

function Hw07() {
  const [Age, useAge] = useState(18)

  function Older() {

    useAge(Age + 1)

  }
  function Younger() {
    if (Age > 1) {
      useAge(Age - 1)
    }
  }




  return (
    <>
      <button onClick={Older}>Older</button>
      <button onClick={Younger}>Younger</button>
      <h1>{Age}</h1>
      <h1>-------------------------------</h1 >
    </>
  )
}

export default Hw07