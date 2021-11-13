function whatCentury(num) {
  let x = num / 100;
  if (x % 1)
    return x + 1 - x % 1;
  return x;
}//2.6
//console.log(whatCentury(1901));
//console.log(whatCentury(1899));