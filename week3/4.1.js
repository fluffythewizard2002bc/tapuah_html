function fiboNazi(num) {

  let i = 2;
  if (num === 0)
    return 0;
  if (num === 1 || num === 2)
    return 1;
  let valF = 1;
  let valS = 1;
  let help = 0;
  while (i <= num) {
    help = valF;
    valF = valF + valS;
    valS = help;
    i += 1;
  }
  return valS;

}//4.1
//console.log(fiboNazi(5));