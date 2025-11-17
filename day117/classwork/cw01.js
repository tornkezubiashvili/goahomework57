// 1)შექმენით ერთი დივი,მიეცით ზომები 150px სიგანე 300px სიმაღლე/მიეცით წითელი ბორდერი

// ამ დივში ჩააშენეთ 1 ფოტო(ინტერნეტშ მოძებნეთ ნებისმიერი ფოტო)

// ამ დივშ ფოტოს ქვემოთ ჩააშენეთ 1 სათაური , ამ სათაურს ქონდეს class --> "heading" და css ში გასტილეთ

// სათაურის ქვემოთ ჩააშენეთ 1 პარაგრაფი რომელსაც კლასი ექნება paragraph და css იდან გასტილეთ

// და ამ სათაურის ქვევით იყოს button რომელსაც გასტილავთ css იდან


let divs = document.getElementsByTagName("div")

divs[0].innerHTML = ("<img src='https://media.istockphoto.com/id/1414030962/photo/mercedes-cls-63-amg.jpg?s=612x612&w=0&k=20&c=W2CHKO8SkBKylL9ND3Z4FnEbR9kdwE36w_p9gtouKPQ='> <h1 class = 'heading'>CLS63 AMG</h1> <p class = 'paragraph'>Engine 5.5</p> <button class = 'button1'>click</button>")