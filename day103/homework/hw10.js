function replaceStringsWithTrue(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      arr[i] = true;
    }
  }
  console.log(arr);
}


replaceStringsWithTrue(["გიორგი", 14, "საბა", 90, "ირაკლი", 5]);