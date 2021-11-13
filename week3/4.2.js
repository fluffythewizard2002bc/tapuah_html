function triboNazi(seq, num) {
  let first;
  let seconed;
  let third;
  let help1;
  if (num === 0)
    return [];
  if (seq[1] != seq[2]) {//001
    seconed = 0;
    first = 0;
    third = 1;
    help1 = 0;
  } else {
    first = 1;
    seconed = 1;
    third = 1;
    help1 = 0;
  }
  for (let i = 0; i < num - 3; i++) {
    help1 = third;
    third = third + seconed + first;
    first = seconed;
    seconed = help1;
  }
  return third;
}//4.2-
//console.log(triboNazi([0, 0, 1], 5));
//console.log(triboNazi([1, 1, 1], 5));
