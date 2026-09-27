import StudentCard from "./StudentCard"

function StudentsList(props){
   
    return(
        <>
            {props.map((student) =>
                <StudentCard name = {student.name} age ={student.age} grade = {student.grade}/>
            )}
        </>
    )
}

export default StudentsList