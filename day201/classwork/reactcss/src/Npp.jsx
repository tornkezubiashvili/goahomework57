import { useState } from "react"
import StudentForm from "./component/StudentForm"
import StudentList from "./component/StudentList"

function Npp() {
    const [students, setStudent] = useState([])
    function add(student) {
        setStudent([...students, student])

    }

    return (
        <>
            <StudentForm addstudent={add} />
            <StudentList students={students} setStudent ={setStudent} />
        </>
    )
}

export default Npp

