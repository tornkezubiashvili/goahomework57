function findMin(arr) {
    if (arr.length === 0) {
        console.log("მასივი ცარიელია");
    } else {
        let minNum = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < minNum) {
                minNum = arr[i];
            }
        }
        console.log("უმცირესი რიცხვი:", minNum);
    }
}


findMin([5, 12, 3, 20, 7]); 