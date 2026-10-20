import React, { useState } from 'react'

function Hw01() {
    let [login, setLogin] = useState(
        {
            email: "",
            password: ""

        }
    )
    function func(e) {
        e.preventDefault()

        setLogin({
            email: e.target.email.value,
            password: e.target.password.value
        })
    }
    console.log(login.email)
    console.log(login.password)
    return (
        <>
            <form onSubmit={func}>
                <input type="text" name='email' placeholder='email' />
                <input type="password" name='password' placeholder='passwprd' />
                <button type='submit'>Submit</button>
            </form>
            
            <h1>2------------------------------------------------------------------------</h1>
        </>
    )
}

export default Hw01