import React, { useState } from 'react'

function Hw07() {
    const [names, setNames] = useState([])
   

    function Add(e) {
        e.preventDefault()
        setNames([...names, e.target.name.value])

    }
    console.log(names)
    return (
        <>
            <form onSubmit={Add}>
                <input type="text" name='name' />
                <button type='submit'>Add Name</button>
            </form>
            {
                names.map((items,index) =>
                    <p key={index}>{items}</p>
                )
            }
            <h1>8-----------------------------</h1>
        </>
    )

}

export default Hw07