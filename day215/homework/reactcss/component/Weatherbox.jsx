import React from 'react'
import { UserContext } from '../pages/Fullpage';
import { useContext } from 'react';
function Weatherbox() {
    const [name, obj] = useContext(UserContext);
    return (
        <>
            <div className='border p-7.5 bg-blue-400 backdrop-blur-lg'>
                <div className="flex">
                    <div>
                        <div>
                            <img src="" alt="" />
                            <h1>CURRENT LOCATION</h1>
                        </div>
                        <div>
                            <h1>{obj?.location.name}</h1>
                            <p> {obj?.location.region}</p>
                        </div>

                    </div>
                    <div>
                        <img src={obj?.current.condition.icon} alt="" />
                        <p>{obj?.current.condition.text}</p>
                    </div>
                </div>


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