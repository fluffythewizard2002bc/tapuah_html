
function shortestStringWord(str) {
  let arr = str.split(" ");
  let min=arr[0];
  for(let i=1; i<arr.length;i++){
    if(arr[i].length<min.length)
      min=arr[i];
  }
  return min.length;

}//5.7
//console.log(shortestStringWord("stupid dead cat is dead"));