//10)
let z = 1;

function test() {
  let z = 2;
  console.log(z);
}

test();
console.log(z);

//რატომ განსხვავდება შედეგი?

// განსხვავებული იმიტომ არის რომ პირველი და მეორე ცვლადს საერთო არაფერი აქვთ პირველი ცვლადი არის global scope მეორე ცვლადი კი block scope 