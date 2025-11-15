// 5)გვერდზე იყოს 5 <li>.
// მიწვდი მესამე li ს
// და textContent გააკეთე ცარიელი სტრინგი ანუ ამოშალე მასში მყოფი ტექსტი:


let li = document.getElementsByTagName("li")

li[2].textContent = " "

console.log(li[2].textContent)