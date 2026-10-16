import React from 'react'
import { useState } from "react"

// function Input() {
//   let array = []
//   function Add(e) {
//     e.preventDefault()
//     if (e.target.input.value !== "") {
//       array.push(e.target.input.value)
//       e.target.input.value = ""
//     }

//     console.log(array)

//   }

//   return (
//     <>
//       <form onSubmit={Add}>
//         <input type="text" name='input' placeholder='Write your tasks here...' />
//         <button type='submit' >Add Task</button>

//       </form>



//     </>

//   )

// }


function Input() {
  const [array, setArray] = useState([])
  let showtext = true

  console.log(showtext)

  function trueFunc() {
    showtext === true
  }
  function falseFunc() {
    showtext === false
  }

  function Add(e) {
    e.preventDefault()

    const value = e.target.input.value

    if (value.trim() !== "") {
      setArray([...array, value])
      e.target.input.value = ""
    }
  }

  return (
    <>
      <form onSubmit={Add}>
        <input
          type="text"
          name="input"
          placeholder="Write your tasks here..."
        />

        <button type="submit">Add Task</button>
      </form>

      {array.map((item, key) => (
        <div key={key}>
          <p key={key}>{showtext === true ? item : " "}</p>
          <svg onClick={trueFunc} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
          <svg onClick={falseFunc} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#BB271A"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
        </div>
      ))}
    </>
  );
}


export default Input
