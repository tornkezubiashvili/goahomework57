//8)მომხმარებელს შემოატანინე ასაკი და სახელი,შემდეგ შეამოწმეთ --> თუ სახელი უდრის "nika" და ასაკი მეტია 18 ზე დაუკონსოლლოგეთ -->"your name is nika and you are adult" , ასევე შეამოწმეთ თუ შემოყვანილი სახელი უდრის "dorblavaso" და შემოტანილი ასაკი ნაკლებია 18 ზე მაშინ დაუკონსოლლოგეთ --> "You are dorbla and you are too young" სხვა შშემთხვევაში დაუკონსოლლოგეთ --> "you have weird name and age"

let UserName = prompt("Enter your name; ")
let UserAge = prompt("Enter your age; ")

UserAge = Number(UserAge)

if (UserName == "nika" & UserAge > 18){
    console.log("your name is nika and you are adult")
}
else if (UserName == "dorblavaso" & UserAge < 18){
    console.log("You are dorbla and you are too young")
}
else{
    console.log("you have weird name and age")
}