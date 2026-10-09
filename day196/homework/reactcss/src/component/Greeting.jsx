import React from 'react'

function Greeting({ name, showMessage, setShowMessage }) {

    function Message() {
        if (showMessage === false) {
            setShowMessage(true)
        } else {
            setShowMessage(false)
        }
    }
    return (
        <>
            <h1>Hello, {name}!</h1>
            <button onClick={Message}>Show Message</button>
            <h1>{showMessage === true ? "Welcome to React!" : ""}</h1>
            <h1>-------------------------------</h1 >
        </>
    )
}

export default Greeting