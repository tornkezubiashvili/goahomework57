function oddSum(start, end) {
    let total = 0;

    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) { 
            total += i;
        }
    }

    if (total > 50) {
        console.log ("დიდი ჯამი")
    } else {
       console.log ("პატარა ჯამი")
    }
}


(oddSum(1, 20));  