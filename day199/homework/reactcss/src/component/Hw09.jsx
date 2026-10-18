import React, { useState } from 'react'

function Hw09() {
    const [numbers, setNumbers] = useState([])
    const [counter, setCounter] = useState(0)
    function Add(e) {
        e.preventDefault()
        let inp = e.target.name.value
        setNumbers([...numbers, inp])
        e.target.name.value = ""
    }
    function Clear() {
        setNumbers([])
        setCounter(0)
    }
    console.log(numbers)
    console.log(counter)
    return (
        <>
            <form onSubmit={Add}>
                <input type="number" name='name' />
                <button type='submit'>Add Task</button>
                <button onClick={Clear}>Clear</button>
            </form>
            {
                numbers.map((items, index) =>

                    < div key={index} >
                        <p>{items}</p>
                        <p>რაოდენობა{numbers.length}</p>
                        <p>ჯამი{counter}</p>
                    </div >

                )
            }
        </>
    )
}

export default Hw09