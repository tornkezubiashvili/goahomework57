import React from 'react'
import Todo from './Todo'

function Input() {
  let array = []
  function Add(e) {
    e.preventDefault()
    if (e.target.input.value !== "") {
      array.push(e.target.input.value)
    }

    console.log(array)
    
  }

  return (
    <>
      <form onSubmit={Add}>
        <input type="text" name='input' placeholder='Write your tasks here...' />
        <button type='submit' >Add Task</button>
      </form>
      <Todo/>
    </>


  )

}

export default Input