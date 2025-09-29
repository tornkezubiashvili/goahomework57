function countStringsSumIntegers(arr) {
  let stringCount = 0;
  let integerSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      stringCount++;
    } else if (typeof arr[i] === "number" && Number.isInteger(arr[i])) {
      integerSum += arr[i];
    }
  }

  console.log("სტრინგების რაოდენობა:", stringCount);
  console.log("ინტეჟერების ჯამი:", integerSum);
}


countStringsSumIntegers(["გიორგი", 14, "საბა", 90.5, "ირაკლი", true]);