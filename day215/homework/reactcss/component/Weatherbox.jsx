import React from 'react'
import { UserContext } from '../pages/Fullpage';
import { useContext } from 'react';
function Weatherbox() {
    const [name, obj] = useContext(UserContext);
    return (
        <>
            <div>
                <h1>{obj?.location.name}</h1>
                <div>
                    <h1>{obj?.current.temp_c}</h1>
                    <h1>{obj?.current.humidity}</h1>
                    <h1>{obj?.current.condition.text}</h1>
                </div>
            </div>
        </>

    )
}

export default Weatherbox