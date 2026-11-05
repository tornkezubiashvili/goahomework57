import React from 'react'
import { UserContext, } from '../src/App';
import { useContext } from 'react';
function Testfooter() {
    const obj = useContext(UserContext);
    return (
        <div>{obj?.location.name}</div>
    )
}

export default Testfooter