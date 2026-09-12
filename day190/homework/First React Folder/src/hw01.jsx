import './App.css'

function Hw01() {
    const username = "Goga";
    const age1 = 17;
    const isPremium = true;
    const movieName = "Inception";
    const imageUrl = "https://example.com/movie.jpg";
    const likes = 125;
    
    let accessMessage = "You are too young to watch this movie."
    if(age1 >= 18){
        accessMessage = "You can watch this movie."
    }
    
    return (
        <div>
            <h1>1================================================</h1>
            <h1>Welcome,{username}</h1>
            <p>{movieName}</p>
            <p>{age1}</p>
            <img src={imageUrl} alt="" />
            <p>{likes * 2}</p>
            <p>{accessMessage}</p>
            <p>{isPremium  === true ? "Premium User ⭐":  "Free User"}</p>
            <p>{isPremium && "You have access to exclusive movies! 🎥"}</p>
            <h1>2================================================</h1>
        </div>
        
    )
}

export default Hw01
