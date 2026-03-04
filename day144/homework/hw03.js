// შექმენით მომხმარებლის ობიექტი, რომელსაც აქვს მომხმარებლის სახელი და ელფოსტა,
//  მაგრამ არ აქვს როლი.დავალება: დესტრუქციის დროს დაამატე ცვლადი role ნაგულისხმევი 
// მნიშვნელობით (მაგალითად: "guest"), იმ შემთხვევისთვის თუ ობიექტში არ არსებობს.



const user = {
  username: "Tornike",
  email: "tornike@gmail.com"
};


const { username, email, role = "guest" } = user

console.log(username)
console.log(email);   
console.log(role)