import { preinit } from "react-dom";

function Hw02() {
    const productName = "Wireless Headphones";
    const price = 120;
    const discount = 25;
    const inStock = true;
    const isPremium = false;
    const rating = 4.7;
    const reviews = 128;
    const image = "https://example.com/headphones.jpg";
    const userAge = 20;
    let discountMessage
    let ageMessage

    if(discount > 0){
        discountMessage = "25% OFF 🔥"
    }else(
        discountMessage = "No discount"
    )

    if (userAge >= 18){
        ageMessage = "You can purchase this product."
    }else{
        ageMessage = "You must be 18 or older to purchase this product."
    }
    return (
        <>
            <p>{productName}</p>
            <p>Price: {price}</p>
            <p>Rating: {rating}</p>
            <p>Reviews: {reviews}</p>
            <img src={image} alt={productName} />
            <p>${price - ((price * discount) / 100)}</p>
            <p>{discountMessage}</p>
            <p>{inStock === true? "In Stock ✅": "Out of Stock ❌"}</p>
            <p>{isPremium && "⭐ Premium Product"}</p>
            <p>{ageMessage}</p>
            <p>{rating >= 4.5? "Excellent Product ⭐⭐⭐⭐⭐": rating >= 3?"Good Product":"Low Rated Product ⭐"}</p>
            <h1>3================================================</h1>
        </>
    )
}

export default Hw02
