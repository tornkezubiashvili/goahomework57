import StudentCard from "./StudentCard"

function StudentsList(props) {

    return (
        // console.log(props.name[0])
        // <>

        //     {props.name[0].map((student) =>
        //         console.log(student)
        //     )}
        // </>


    
            props[0].map(student =>
                console.log(student)
            )
        
    )
}

export default StudentsList