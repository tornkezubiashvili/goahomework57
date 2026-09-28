import React from 'react'

function Student2({name,grade}) {
  return (
    <div>
        <p>Student: {name}</p>
        <p>Grade: {grade}</p>
        <p>Result:{grade < 50? "Failed" :"Passed"}</p>
    </div>
  )
}

export default Student2