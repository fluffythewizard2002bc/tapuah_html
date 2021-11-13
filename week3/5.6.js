function maskify(str) {
  let arr = [];
  if (str.length < 5)
    return str;
  for (let i = 0; i < str.length - 4; i++) {
    arr.push('#');
  }
  for (let i = str.length - 4; i <= str.length - 1; i++) {
    arr.push(str[i]);
  }
  return arr.join('');

}//5.6
//console.log(maskify("1234bcd"));