import React from 'react'
import { useState } from "react"


function Input() {
  const [array, setArray] = useState([])
  const [status, setStatus] = useState([])


  function trueFunc(index) {
    const newStatus = [...status]
    newStatus[index] = true
    setStatus(newStatus)
  }



  function Delete(index) {
    const newArr = array.filter((item, ind) => ind !== index)
    setArray(newArr)

    const newStatus = status.filter((item, ind) => ind !== index)
    setStatus(newStatus)
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
      <form onSubmit={Add} className='flex gap-3'>
        <input
          type="text"
          name="input"
          placeholder="Write your tasks here..."
          className='
            bg-white
            w-130
            h-11
            p-2.5 
            rounded-xl
          '

        />

        <button type="submit" className='bg-green-900 p-2.5 rounded-xl cursor-pointer'>Add Task</button>
      </form>


      <div className='bg-white md-10 w-200 flex flex-col  items-center justify-center rounded-xl'>
        <div className='w-100% flex  items-center content-center gap-60 '>
          <div className='flex gap-15'>
            <h1 className='text-2xl  font-medium'>#</h1>
            <h1 className='text-2xl font-medium'>Task</h1>
          </div>
          <h1 className='text-2xl font-medium'>Status</h1>
          <h1 className='text-2xl font-medium'>Action</h1>

        </div>
        <div className='flex flex-col gap-2'>
          {
            array.map((item, key) => (
              <div key={key} className='flex gap-63'>
                <div className='flex gap-20'>
                  <h2>{key + 1}</h2>
                  <h2 key={key}>{item != "" ? item : " "}</h2>
                </div>
                <h2>{status[key] === true ? "Done" : "Pending"}</h2>

                <div className='flex items-center justify-center gap-7'>
                  <button onClick={() => trueFunc(key)}>✅️</button>
                  <button onClick={() => Delete(key)}>❌</button>
                </div>

              </div>
            ))

          }

        </div>

      </div>

    </>
  );
}


export default Input
