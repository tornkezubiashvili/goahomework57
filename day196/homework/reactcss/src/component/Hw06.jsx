import React from 'react'
import { useState } from 'react'


function Hw06() {
    const[Favorites,useFavorites] = useState(false)

    function Bollean(){
        if(Favorites === false){
            useFavorites(true)
        } else{
            useFavorites(false)
        }
    }
    return (
        <>
            <button onClick={Bollean}>Add to Favorites</button>
            <h1>{Favorites === false?"Not Favorite":"Favorite ⭐"}</h1>
            <h1>-------------------------------</h1 >
        </>
    )
}

export default Hw06