function longestStringWord(str) {
  let arr = str.split(" ");
  let max=arr[0];
  for(let i=1; i<arr.length;i++){
    if(arr[i].length>max.length)
      max=arr[i];
  }
  return max;
}
//5.8
console.log(longestStringWord("stupid dead cat is dead"));