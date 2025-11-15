// 3)შექმენით 5 სათაური,შენი დავალებაა რომ ეს 5 სათაური წამოიღო ჯს ში tagName ის გამოყენებით და შეინახო ცვლადში,შემდეგ შენი დავალებაა რომ innerHTNL ის გამოყენებით შეცვალალო ყველა სათაურის შიგთავსი(ტექსტი) ცალ ცალკე(ინდექსების გამოყენებით რითიც თქვენ გინდათ, ამის შემდეგ როცა შეცვლით 5 ივე ს კონტენტს გამოიტანეთ 5 ივე სათაურის შიგთავსი კონსოლში გამოიყენეთ  innerHTML

let h1 = document.getElementsByTagName("h1")
h1[0].innerHTML = "goa1"
h1[1].innerHTML = "goa2"
h1[2].innerHTML = "goa3"
h1[3].innerHTML = "goa4"
h1[4].innerHTML = "goa5"


console.log(h1[0].innerHTML)
console.log(h1[1].innerHTML)
console.log(h1[2].innerHTML)
console.log(h1[3].innerHTML)
console.log(h1[4].innerHTML)


