function trimString(str) {

  let arr = str.split("");

  arr.shift();
  arr.pop();
  return arr.join("");
}//5.1
//console.log(trimString("ABCDE"));