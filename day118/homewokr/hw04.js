// 4)შექმენით HTML გვერდი <button> ელემენტით. დაწერეთ JavaScript ფუნქცია, რომელიც მაშინ გამოიძახება, როცა ღილაკზე დააჭერენ, და აჩვენებს alert ს Mensagem-ით "Button clicked!".

let but = document.getElementsByTagName("button")

function klick(){
    alert("Button clicked!")
   
}



but[0].addEventListener('click',klick)
