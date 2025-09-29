let pass1 = prompt("შეიყვანე პაროლი; ")
let pass2 = prompt("გაიმეორე პრაოლი; ")

function pass(pass1 , pass2){
    while(pass1 != pass2){
        pass2 = prompt("პაროლი არასწორია სცადე ახლიდან ")

        if(pass1 == pass2){
            console.log("წარმატებით!")
        
        }    
    }
} 

pass(pass1 , pass2)

