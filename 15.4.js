function calcAverage(arr) {
  var sum=0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum/3;
}
console.log( calcAverage([85, 90, 92]));

/***
 * sum isn't =0, the sum isn't divided by three.
 **/