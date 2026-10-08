import React from 'react'
import { useState } from 'react'
function Hw01() {
    const [Guests, useGuests] = useState(0)

    function Add() {
        if (Guests >= 0) {
            useGuests(Guests + 1)
        }
    }
    function Remove() {
        if (Guests > 0) {
            useGuests(Guests - 1)
        }
    }
    
    return (
        <>

            <div>
                <button onClick={Add}>Add Guest</button>
                <button onClick={Remove}>Remove Guest</button>
                <h1>{Guests}</h1>
                <h1>-------------------------------</h1>
            </div>
        </>




    )
}

export default Hw01