function unique(arr) {//instead of with Sort, i wanna do it in O(N)
  let i = 0;
  if (i < arr.length - 2) {
    if (arr[i] === arr[i + 1])// first two equal, we look for the odd.
      while (i < arr.length - 1) {
        if (arr[i] != arr[i + 1])
          return arr[i + 1];
        i += 1;
      }
    if (arr[i] != arr[i + 1])//one of them is the odd.
      return arr[i + 1] === arr[i + 2] ? arr[i] : arr[i] === arr[i + 2] ? arr[i + 1] : arr[i];
  }
}//2.4
//console.log(unique([1,2,2,2,2]));
//console.log(unique([2,2,2,3,2]));