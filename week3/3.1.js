function nb_year(p0, percent, aug, p) {//number of years to population>= than p.
  let p1 = p0;
  let perc = percent / 100;
  let count = 0;
  while (p1 < p) {
    p1 += p1 * perc + 50;
    count += 1;
  }
  return count;
}//3.1
//console.log(nb_year(1000,2,50,1200));
