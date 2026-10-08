import React from 'react'
import { useState } from 'react'

function Hw05() {

    const [message, useMessage] = useState("This is a secret message!")

    function Hide() {
        if (message != "") {
            useMessage("")
        } else {
            useMessage("This is a secret message!")
        }
    }
    return (
        <>
            <button onClick={Hide}>{message === ""?"Show":"Hide"}</button>
            <h1>{message}</h1>
            <h1>-------------------------------</h1 >
        </>
    )

}

export default Hw05