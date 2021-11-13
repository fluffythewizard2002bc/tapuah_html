function busCheck(arr) {
  sum = 0;
  if ((arr[0])[1] != 0)
    return "Error";
  for (let i = 0; i < arr.length; i++) {
    sum += (arr[i])[0] - (arr[i])[1];
  }
  return sum;
}//3.2
//console.log(busCheck([[1,0],[5,2],[3,2],[2,5]]));
//console.log(busCheck([[1,5],[5,2],[3,2],[2,5]]));

