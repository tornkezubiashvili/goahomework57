function average(arr) {
  if (arr.length === 0) {
    console.log("მასივი ცარიელია");
  } else {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    let avg = total / arr.length;
    console.log("საშუალო:", avg);
  }
}


average([5, 10, 15, 20]);