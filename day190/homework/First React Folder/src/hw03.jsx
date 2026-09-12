function Hw03() {
    const festivalName = "Tbilisi Music Fest";
    const city = "Tbilisi";
    const month = "September";
    const day = 18;

    const visitors = 8500;
    const capacity = 10000;

    const weather = "sunny";
    const temperature = 27;

    const isWeekend = true;
    const hasVipZone = true;
    const ageLimit = 16;

    const userAge = 18;

    const mainArtist = "Imagine Dragons";
    const startHour = 19;

    let festivalStatus
    let weatherMessage
    let ageMassage
    let finalMessage

    if (visitors >= 9000) {
        festivalStatus = "🔥 Almost Full"
    } else if (visitors >= 7000) {
        festivalStatus = "⚡ Getting Busy"
    } else {
        festivalStatus = "🙂 Plenty of Space"
    }

    if (weather === "sunny") {
        weatherMessage = "☀️ Perfect weather for the festival!"
    } else if (weather === "rainy") {
        weatherMessage = "🌧️ Don't forget your umbrella!"
    } else {
        weatherMessage = "🌤️ Check the weather before leaving."
    }

    if (userAge >= ageLimit) {
        ageMassage = "✅ You can enter the festival."
    } else {
        ageMassage = "❌ You cannot enter the festival."
    }
    


    return (
        <>
            <p>📍 {city}</p>
            <p>📅  {month} {day}</p>
            <p>🎤 {mainArtist}</p>
            <p>Festival starts at {startHour}</p>
            <p>{capacity - visitors}</p>
            <p>{festivalStatus}</p>
            <p>{weatherMessage}</p>
            <p>{temperature >= 30 ? "🔥 Very Hot" :
                temperature >= 20 ? "😎 Comfortable Weather" :
                    temperature >= 10 ? "🧥 A Little Cold" :
                        "🥶 Very Cold"}</p>
            <p>{isWeekend && "🎉 Weekend Festival!"}</p>
            <p>{hasVipZone && "⭐ VIP Zone is available"}</p>
            <p>{ageMassage}</p>
            <p>{userAge < ageLimit ? "🚫 Entry Denied" :
                userAge >= ageLimit && hasVipZone === true ? "⭐ VIP Entry Available" :"🎫 Regular Entry"}</p>
            <p>
                {
                    userAge < ageLimit? "🚫 You cannot attend this festival.": userAge >= ageLimit && festivalStatus === "🔥 Almost Full" ? "🔥 Hurry! The festival is almost full!": userAge >= ageLimit && festivalStatus !== "🔥 Almost Full" && weatherMessage  === "sunny"? "🎉 Everything is ready! Have fun!": "ℹ️ Check all festival information before entering."

                }
            </p>
        </>
    )
}
export default Hw03