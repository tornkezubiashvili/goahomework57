import StudentCard from "./StudentCard"

function StudentsList({name}) {

    return (
       <>
            {
                name.map(items =>{
                    <StudentCard 
                        key={items.id}
                        name={items.name}
                        age={items.age}
                        grade={items.grade}
                    />
                })
            }
       </>
        
    )
}

export default StudentsList