function toCamelCase(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {

    if (str.charAt(i) === '-' || str.charAt(i) === '_') {

      arr.push(str[i + 1].toUpperCase());
      i++;
    } else {
      arr.push(str[i]);
    }
  }
  return arr.join('');
}//5.3
//console.log(toCamelCase("Kill_all_scum"));