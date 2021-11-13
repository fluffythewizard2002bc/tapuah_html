function findNextSquere(num) {
  if (Math.sqrt(num) % 1)
    return -1;
  return (Math.sqrt(num) + 1) ** 2;
}//2.3
//console.log(findNextSquere(121));