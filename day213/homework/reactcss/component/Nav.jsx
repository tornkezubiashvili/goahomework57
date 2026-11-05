import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../src/App';
function Nav() {
    const [name, obj] = useContext(UserContext);
    return (
        <div>{name}</div>
    )
}

export default Nav