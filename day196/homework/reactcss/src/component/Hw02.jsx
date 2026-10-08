import React from 'react'
import { useState } from 'react'

function Hw02() {

    const [likes, useLikes] = useState(0)

    function Likes() {
        useLikes(likes + 1)
    }
    return (
        <>
            <button onClick={Likes}>Like</button>
            <h1>Likes: {likes}</h1>
            <h1>-------------------------------</h1>
        </>
    )
}

export default Hw02