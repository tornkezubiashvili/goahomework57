//მომხმარებელს შემოატანინეთ რაიმე რიცხვი(გადააქცე=იეთ მთლიანი prompt number ტიპის მონაცემად რომ 
// მომს=ხმარებლის მიერ შემოტანილი მნშვნელობა იყოს number ტიპის)შემდეგ შეადარეთ, თუ მომხმარებლის
//  მიერ შემოტანილი რიცხვი არის მეტი 0 ზე და არის ლუწი მაშინ დაუკონსოლლოგეთ --> "this number
//  is positive and Even" ,შემდეგ შეამოწმეთ 
//თუ მომხმარებლის შემოტანილი რიცხვი არის ნაკლები 0 ზე და არის კენტი მაშინ დაუკონსოლლოგეთ --->
//  "this number is Odd" , სხვა შემთხვევაში დაუკონსოლლოგეეთ "This number is zero"



let num = prompt("Enter your number; ")

let Usernumber = Number(num);

if (Usernumber > 0 && Usernumber % 2 === 0) {
    console.log("this number is positive and Even");
} 
else if (Usernumber > 0 && Usernumber % 2 !== 0) {
    console.log("this number is Odd");
} 
else {
    console.log("This number is zero");
}