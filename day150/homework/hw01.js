// 1)შექმენი კლასი Car, რომელსაც ექნება:

// properties: brand, model, year
// მეთოდი getInfo(), რომელიც აბრუნებს სტრინგს მანქანის შესახებ

class Car{
    constructor(brand,model,year){
        this.CarBrand = brand
        this.CarModel = model
        this.CarYear = year
    }
    getInfo(){
        return `Car name ${this.CarBrand} Car model ${this.CarModel}Car year ${this.CarYear}`
    }
}

let Cars = new Car("MERCEDES","CLS 63S", 2017)


console.log(Cars.getInfo())