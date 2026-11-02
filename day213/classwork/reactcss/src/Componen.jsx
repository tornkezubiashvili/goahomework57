import React from 'react'
import { useState, useContext } from 'react'
import { Create } from './App'


function Componen() {

    let context = useContext(Create)

    return (
        <div>
            <p>{context}</p>
        </div>
    )
}

export default Componen