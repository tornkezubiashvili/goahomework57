import React from 'react'
import Nav from './Nav'

function Heder() {
    return (
        <>
            <div className='bg-blue-700 w-full flex items-center justify-center p-5'>
                <h1 className='text-white text-[25px]'>Wether App</h1>
                <Nav  />
            </div>

        </>

    )
}

export default Heder