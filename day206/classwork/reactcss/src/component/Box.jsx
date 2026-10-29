import React from 'react'
import { useState } from 'react'
import Object from './Object'

function Box() {
    let [array, useArray] = useState([])
    console.log(array.title)
    
    return (
        <>

            <div className='flex flex-wrap'>
                {
                    array.map((items, index) => {
                        return (
                            <div >
                                <div>
                                    <img src={items.img} alt="" />
                                    <div>
                                        <h1>{items.title}</h1>
                                        <p>{items.desc}</p>
                                    </div>
                                </div>
                                <div>
                                    <button>Remove</button>
                                    <label className="toggle-switch">
                                        <input
                                            type="checkbox"
                                            onChange={(e) => console.log(e.target.checked)}
                                        />
                                        <div className="toggle-switch-background">
                                            <div className="toggle-switch-handle" />
                                        </div>
                                    </label>

                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Object useArray={useArray} />
        </>
    )
}

export default Box