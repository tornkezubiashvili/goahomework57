import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {

    return (
        <>
            <div className='flex items-center justify-center gap-5'>
                <Link to='/'>
                    <button className='text-white cursor-pointer'>Home</button>
                </Link>
                <Link to='/History'>
                    <button className='text-white cursor-pointer'>History</button>
                </Link>
            </div>

        </>

    )
}

export default Nav