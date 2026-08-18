// შექმენი Card კომპონენტი, რომელსაც გადაეცემა title, description და buttonText. გამოიყენე ეს კომპონენტი მინიმუმ 3-ჯერ სხვადასხვა მონაცემებით.

function Card(props){
    return(
        <div>
            <p>{props.title}</p>
            <p>{props.description}</p>
            <button>{props.buttonText}</button>
        </div>
    )

}

export default Card