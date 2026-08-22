// შექმენი Box კომპონენტი, რომელსაც color გადაეცემა props-ით. div-ის ფონი უნდა გახდეს გადაცემული ფერი. შექმენი რამდენიმე Box სხვადასხვა ფერით.

function Box(props){
    return(
        <div style={{ width:"100px", height: "100px", backgroundColor: props.color}}></div>
    )
}
export default Box