import React from 'react'
import { useState } from 'react'


// შექმენი Light აპლიკაცია.
// საწყისად ეკრანზე ეწეროს:
// Light is OFF
// და იყოს ღილაკი:
// Turn ON
// ღილაკზე დაჭერისას:
// Light is ON
// და ღილაკი გახდეს:
// Turn OFF
// შემდეგ დაჭერაზე ისევ გამოირთოს.
// გამოიყენე ერთი state.
function Cw01() {

    const [light, uselight] = useState("Light is OFF")


    function lightfunc() {
        if(light === "Light is OFF"){
            uselight("Light is ON")
        }else{
            uselight("Light is OFF")
        }
    }
    return (
        <>
            <p>{light}</p>
            
            <button onClick={lightfunc}>{light === 'Light is OFF'? "ON" :"OFF"}</button>

        </>
    )
}

export default Cw01