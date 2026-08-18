// შექმენი User კომპონენტი, რომელსაც გადაეცემა name და isOnline. თუ isOnline არის true, გამოიტანე Online, ხოლო თუ false — Offline.

function User2(props) {

    if (props.isOnline === "true") {
        return("Online")
    }else if(props.isOnline === "false"){
        return("Offline")
    }


}

export default User2