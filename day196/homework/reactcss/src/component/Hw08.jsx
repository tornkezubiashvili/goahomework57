import React from 'react'
import { useState } from 'react'

function Hw08() {

    const[Active,useActive]= useState("Account is inactive")

    function Account(){
        if(Active=== "Account is inactive"){
            useActive("Account is active")
        }else{
             useActive("Account is inactive")
        }
    }

  return (
    <>
        <button onClick={Account}>{Active === "Account is inactive"? "Activate Account":"Deactivate Account"}</button>
        <h1>{Active}</h1>
        <h1>-------------------------------</h1 >
    </>
  )
}

export default Hw08