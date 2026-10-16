import React from 'react'

function Input() {
  let array = []
  function Add(e) {
    e.preventDefault()
    array.push(e.target.input.value)
    console.log(array)
  }

  return (
    <>
      <form onSubmit={Add}>
        <input type="text" name='input' placeholder='Write your tasks here...'  />
        <button type='submit' >Add Task</button>
      </form>
    </>
  )

}

export default Input