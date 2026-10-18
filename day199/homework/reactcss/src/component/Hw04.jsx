import React, { useState } from 'react'

function Hw04() {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [city, setCity] = useState("")
    function Profile(e) {
        e.preventDefault()
        setName(e.target.name.value)
        setAge(e.target.age.value)
        setCity(e.target.city.value)
    }
    return (
        <>
            <form onSubmit={Profile}>
                <input type="text" name='name' placeholder='name' />
                <input type="text" name='age' placeholder='age' />
                <input type="text" name='city' placeholder='city' />
                <button type='submit'>Submit</button>
            </form>
            <p>{name}/{age}/{city}</p>
            <h1>5-----------------------------</h1>
        </>
    )
}

export default Hw04