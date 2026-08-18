// შექმენი Student კომპონენტი, რომელსაც გადაეცემა name, age და course. ეკრანზე გამოიტანე ყველა ინფორმაცია.


function Student(props){
    return(
        <p>{props.name} {props.age} {props.course}</p>
    )
}

export default Student