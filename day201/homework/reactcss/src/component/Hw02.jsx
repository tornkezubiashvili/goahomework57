import React, { useState } from 'react'

function Hw02() {
    const [register, setRegister] = useState(
        {
            firstname: "",
            lastname: "",
            email: "",
            password: ""
        }
    )

    function func(e) {
        e.preventDefault()
        if (e.target.firstname.value !== "" && e.target.lastname.value !== "" && e.target.email.value !== "" && e.target.password.value !== "") {
            setRegister(
                {
                    firstname: e.target.firstname.value,
                    lastname: e.target.lastname.value,
                    email: e.target.email.value,
                    password: e.target.password.value
                }
            )
        } else {
            return
        }
    }
    console.log(register)
    return (
        <>
            <form onSubmit={func}>
                <input type="text" name='firstname' placeholder='FirstName' />
                <input type="text" name='lastname' placeholder='LastName' />
                <input type="email" name='email' placeholder='Email' />
                <input type="password" name='password' placeholder='Password' />
                <button type='submit'>Submit</button>
            </form>
            <h1>3------------------------------------------------------------------------</h1>
        </>

    )
}

export default Hw02