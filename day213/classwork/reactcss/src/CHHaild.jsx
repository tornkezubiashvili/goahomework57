import React from 'react'
import { Create } from './App'
import { useContext } from 'react'
function CHHaild() {
    let CCCC = useContext(Create)
    return (
        <div>{CCCC * 2}</div>
    )
}

export default CHHaild