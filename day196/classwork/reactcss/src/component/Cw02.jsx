import React from 'react'
import { useState } from 'react'


// შექმენი აპლიკაცია, სადაც ეკრანზე გამოჩნდება:

// Current color: Red

// მოთხოვნები:

// შექმენი color state.
// საწყისი მნიშვნელობა იყოს "Red".
// დაამატე ღილაკი Change Color.
// დაჭერისას ფერი შეიცვალოს "Blue"-ზე.
// კიდევ ერთხელ დაჭერისას დაბრუნდეს "Red"-ზე.

function Cw02() {

    const [color,setcolor] = useState("Red")

    function changcolor(){
        if(color === "Red"){
            setcolor("Blue")
        }else{
            setcolor("Red")
        }
    }
  return (
    <>
        <p>{color}</p>
        <button onClick={changcolor}>Change Color</button>
    </>
  )
}

export default Cw02