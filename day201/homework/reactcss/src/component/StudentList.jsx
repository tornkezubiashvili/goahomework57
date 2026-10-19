import React from 'react'

function StudentList({students = [],setStudent}) {

    function delet(index){
        let arr = students.filter((items,ind)=> ind !== index)
        setStudent(arr)
    }
  return (
    <>
        {
            students.map((items,index) =>
                <div key={index}>
                    <p>name:{items.name}</p>
                    <p>surname:{items.surname}</p>
                    <p>age:{items.age}</p>
                    <button onClick={() => delet(index)}>Delete</button>
                </div>
            )
        }
    </>
  )
}

export default StudentList