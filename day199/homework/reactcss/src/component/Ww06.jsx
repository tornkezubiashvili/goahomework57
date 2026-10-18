import React, { useState } from 'react'

function Ww06() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setCnfirmPassword] = useState("")

    function profileFunc(e) {
        e.preventDefault()
        setUsername(e.target.name.value)
        setEmail(e.target.email.value)
        setPassword(e.target.password.value)
        setCnfirmPassword(e.target.confirmPassword.value)
    }

    function showText() {
        if (password === confirmPassword) {
            <p>{username}/{email}</p>
        } else {
            <p>პაროლი ერთმანეთს არ ემთხვევა!</p>
        }
    }
    return (
        <>
            <form onSubmit={profileFunc}>
                <input type="text" name='name' placeholder='name' />
                <input type="text" name='email' placeholder='email' />
                <input type="password" name='password' placeholder='password' />
                <input type="text" name='confirmPassword' placeholder='confirmPassword' />
                <button type='submit'>Submit</button>
            </form>
            <p>{password === confirmPassword ? username + email : "პაროლი ერთმანეთს არ ემთხვევა!"}</p>
            <h1>7-----------------------------</h1>
        </>
    )
}

export default Ww06