// შექმენი Person კომპონენტი, რომელსაც გადაეცემა name და age. გამოიტანე: Giorgi is 21 years old.

function Person(props) {
    return (

        <p>{props.name} is {props.age} years old</p>

    )
}

export default Person