// 3)შექმენით HTML გვერდი ცარიელი <div> ელემენტით. დაწერეთ JavaScript ფუნქცია, რომელიც გამოძახებისას შექმნის ახალ <p> ელემენტს ტექსტით "New paragraph" და დაამატებს მას <div>-ის შიგნით.


let div = document.getElementsByTagName('div')

div[0].innerHTML = "<p>New paragraph</p>"