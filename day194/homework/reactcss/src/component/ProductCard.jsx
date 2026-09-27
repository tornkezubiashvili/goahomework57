function Productcard({name,price,category,inStock}){
   return(
    <>
        <p>Product: {name}</p>
        <p>Price: {price}</p>
        <p>Category: {category}</p>
        <p>In stock: {inStock === false? "No":"Yes"}</p>
    </>
   )
}

export default Productcard