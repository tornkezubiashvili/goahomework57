function countEvenOdd(n) {
  let i = 1;
  let evenCount = 0;
  let oddCount = 0;

  while (i <= n) {
    if (i % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
    i++;
  }

  console.log(`რიცხვი ${n}: კენტი = ${oddCount}, ლუწი = ${evenCount}`);
}

countEvenOdd(10);
countEvenOdd(15);
countEvenOdd(7);