import React from 'react'
import { useState } from 'react'

function Hw04() {

    const [name, useName] = useState("Hello, Guest!")
    function changeName() {

        if (name === "Hello, Guest!") {
            useName("Hello, Goga!")
        } else (
            useName("Hello, Guest!")
        )

    }
    return (
        <>
            <button onClick={changeName}>Change Name</button>
            <h1>{name}</h1>
            <h1>-------------------------------</h1 >
        </>
    )

}

export default Hw04