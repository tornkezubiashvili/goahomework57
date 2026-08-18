// შექმენი Product კომპონენტი, რომელსაც გადაეცემა name, price და category. შექმენი მინიმუმ 3 სხვადასხვა პროდუქტი და თითოეულს განსხვავებული ინფორმაცია გადაეცი.

function Product2(props){

    return(
        <p>{props.name} {props.price} {props.category}</p>
    )
    
}

export default Product2