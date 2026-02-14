// 2)შექმენი ფუნქცია gradeCategory(score)
// 90+ → "Excellent"
// 75–89 → "Good"
// 50–74 → "Average"
// 0–49 → "Fail"
// თუ უარყოფითი ან 100-ზე მეტი → "Invalid score"
// გამოიყენე მხოლოდ ternary ოპერატორები.
// გამოიძახე ფუნქცია სხვადასხვა არგუმენტებით რამდენჯერმე

function gradeCategory(score) {
    console.log(score < 0 || score > 100 ? "Invalid score" :score >= 90 ? "Excellent" :score >= 75 ? "Good" :score >= 50 ? "Average" :"Fail")
}

gradeCategory(122)
gradeCategory(2)
gradeCategory(24)
gradeCategory(74)
gradeCategory(91)
gradeCategory(-5)
