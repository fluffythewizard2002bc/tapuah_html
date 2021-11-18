
function insert(str, index, value) {
  return str.substr(0, index) + value + str.substr(index);
}
function accum(str) {
  let str2 = "";

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i).toUpperCase() === str.charAt(i)) {
      str2 += str.charAt(i);
    } else {
      str2 += str.charAt(i).toUpperCase();
    }

  }//abcD>>ABCD
  //return str2;

  let j = 1;
  let total = "";
  for (let i = 0; i < str2.length; i++, j++) {

    let letter = str.charAt(i).toLowerCase();
    let letters = letter.repeat(i);
    let start = str2.substring(i, j);

    start += letters;
    start += "-";
    total += start;
  }

  return '"'+total.slice(0, -1)+'"';


}
//console.log(accum("abcd"));
//console.log(accum("cwAt"));