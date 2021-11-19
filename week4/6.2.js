function countDup(array) {
  let letters = array.split("");

  const wordNumArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

  //mission: if there's a and A combine both values to a.
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] !== letters[i].toUpperCase()) {//if a lower case exists
      for (let j = 0; j < letters.length; j++) {
        if (letters[i].toUpperCase() === letters[j] && i !== j) {//if an upper case of the same letter exists
          letters[j] = letters[j].toLowerCase();    //change it to lower case.
        }
      }
    }
  }
  
  let letterSet = new Set(letters);
  let letterKeys = Array.from(letterSet);

  const result = {};


  letterKeys.forEach((item) => {//counting occurances
    let num = (letters.filter(x => x === item)).length;
    result[item] = num;
  });
  
  let dup = result;
  

  const sortable = Object.fromEntries(
    Object.entries(dup).sort(([, a], [, b]) => b - a)
  );

  //console.log(Object.keys(sortable));
  if (sortable[Object.keys(sortable)[0]] < 2) {
    return console.log("0 # no character repeats more than once");
  }
  else {
    let outputStr = "";
    let totaloutput = 0;
    for (const [key, value] of Object.entries(sortable)) {
      if (value > 1) {
        outputStr += (`${key} occures ${wordNumArr[value]} times`);
        outputStr += " and ";
        totaloutput += 1;
      }
    }
    let out1=outputStr.split(" ");
    out1.pop();
    out1.pop();
 
    out1.unshift(` ${totaloutput} # `);
    return out1.join(' ');

  }
}
console.log(countDup("aabbcdEeE"));//-----------------------/*/*/*
