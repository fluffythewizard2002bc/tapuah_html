function nameToInitials(str) {
  let arr = str.toUpperCase().split(" ");
  let arr2 = [];
  arr2.push((arr[0])[0]);
  arr2.push(".");
  arr2.push((arr[1])[0]);
  return arr2.join("");

}//5.5
//console.log(nameToInitials("big mojo"));