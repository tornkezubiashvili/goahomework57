import React from 'react'
import { UserContext, } from '../src/App';
import { useContext } from 'react';
function Testfooter() {
    const [name, obj] = useContext(UserContext);

    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export default Testfooter