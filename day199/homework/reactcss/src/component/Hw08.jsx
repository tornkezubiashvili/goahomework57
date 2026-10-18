import React, { useState } from 'react'

function Hw08() {
    const [tasks, setTasks] = useState([])

    function Add(e) {
        e.preventDefault()
        setTasks([...tasks, e.target.name.value])

    }

    return (
        <>
            <form onSubmit={Add}>
                <input type="text" name='name' />
                <button type='submit'>Add Name</button>
            </form>
            {
                tasks.map((items, index) =>
                    <p key={index}>{items}</p>
                )
            }
            <h1>9-----------------------------</h1>
        </>
    )
}

export default Hw08