// შექმენი Button კომპონენტი, რომელსაც text გადაეცემა props-ით. გამოიყენე კომპონენტი რამდენჯერმე სხვადასხვა ტექსტით, მაგალითად: Login, Register, Click me.

function Button(props) {

    return (
        <button>{props.desc}</button>
    )

}

export default Button
