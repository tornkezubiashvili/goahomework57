function findMax(arr) {
    if (arr.length === 0) {
        console.log("მასივი ცარიელია");
    } else {
        let maxNum = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > maxNum) {
                maxNum = arr[i];
            }
        }
        console.log("უდიდესი რიცხვი:", maxNum);
    }
}


findMax([5, 12, 3, 20, 7]); 