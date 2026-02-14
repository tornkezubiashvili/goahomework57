// 4)შექმენი ფუნქცია numberStatus(num)
// თუ ლუწი და დადებითია → "Positive Even"
// თუ ლუწი და უარყოფითია → "Negative Even"
// თუ კენტი და დადებითია → "Positive Odd"
// თუ კენტი და უარყოფითია → "Negative Odd"
// თუ 0 → "Zero"
// გამოიძახე ფუნქცია სხვადასხვა არგუმენტებით რამდენჯერმე

function numberStatus(num){
    console.log(num == 0? "Zero" : num % 2 == 0 && num > 0?"Positive Even": num % 2 == 0 && num < 0?"Negative Even":  num % 2 !== 0 && num > 0?"Positive Odd": "Negative Odd")
}

numberStatus(0)
numberStatus(24)
numberStatus(23)
numberStatus(-24)
numberStatus(-23)