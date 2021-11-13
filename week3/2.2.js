function binToDeci(arr) {
  let value = 0;
  let j = 0;
  for (let i = arr.length - 1; i > -1; i--, j++) {
    value += arr[i] * (2 ** j);
  }
  return value;
}//2.2
//console.log(binToDeci([1,1,1,1]));