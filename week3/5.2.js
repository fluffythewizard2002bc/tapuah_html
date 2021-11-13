function repeat_str(num, chr) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(chr);
  }
  return arr.join("");
}//5.2
//console.log( repeat_str(5,'$') );