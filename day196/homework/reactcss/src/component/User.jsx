import React from 'react'
import { useState } from 'react'

function User({ name, status, state }) {

    function func() {
        if (status === false) {
            state(true)
        } else {
            state(false)
        }
    }
    return (
        <>
            <button onClick={func}>{status === false ? "Go Online" : "Go Ofline"}</button>
            <h1>Name: {name}</h1>
            <h1>Status: {status === false ? "Ofline" : "Online"}</h1>
            <h1>-------------------------------</h1 >
        </>
    )
}

export default User