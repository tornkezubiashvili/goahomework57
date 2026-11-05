import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../src/App';
function Nav() {
    const obj = useContext(UserContext);
    return (
        <div>{obj?.location.name}</div>
    )
}

export default Nav