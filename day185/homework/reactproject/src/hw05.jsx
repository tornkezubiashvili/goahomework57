// შექმენი Product კომპონენტი, რომელსაც გადაეცემა name, price და image. ეკრანზე გამოიტანე პროდუქტის სახელი, ფასი და სურათი.

function Product(props){
    return(
        <div>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <img src={props.imgsrc} alt="" />
        </div>
    )
}

export default Product