function toWeirdCase(str) {
  let arr = [];
  let lowerCaseArr = str.toLowerCase();

  for (let i = 0; i < lowerCaseArr.length; i++) {
    if (i % 2) {
      arr.push(lowerCaseArr[i].toUpperCase())
    } else {
      arr.push(lowerCaseArr[i]);
    }
  }
  return arr.join("");
}//5.4
//console.log(toWeirdCase("Stupid Retarded Cat"));
