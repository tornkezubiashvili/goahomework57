import React from 'react'

function Card({title,description,buttonText}) {
  return (
    <div>
        <p>{title}</p>
        <p>{description}</p>
        <button>{buttonText}</button>
    </div>
  )
}

export default Card