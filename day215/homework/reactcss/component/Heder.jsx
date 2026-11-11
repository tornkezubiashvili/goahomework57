import React from 'react'
import Nav from './Nav'
import { UserContext } from '../pages/Fullpage';
import { useContext } from 'react';


function Heder() {
    const [name, obj] = useContext(UserContext);
    function serch(e) {
        console.log(e.target.value)
    }
    return (
        <>
            <div className='bg-blue-700 w-full flex items-center justify-between px-70 py-5 gap-25'>
                <div className='flex items-center justify-center'>
                    <h1 className='text-white text-[25px]'>Wether App</h1>
                    <h1>{name}</h1>
                </div>
                <div className='flex items-center justify-center'>

                    <input onBlur={serch} type="text" placeholder='Enter contry' className='bg-white w-130 h-7 rounded-[10px] p-3' />

                </div>

                <Nav />
            </div>

        </>

    )
}

export default Heder