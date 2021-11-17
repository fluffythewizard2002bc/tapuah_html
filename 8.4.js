const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

/**count over all the letters and return an object with the 
letter as the key and the letter count as the value. */

function countOccur(array) {
  let letters = array.join(" ").split("");

  let letterSet = new Set(letters);
  let letterKeys = Array.from(letterSet);

  const result = {};

  letterKeys.forEach((item) => {
    let num = (letters.filter(x => x === item)).length;
    result[item] = num;
  });
  delete result[" "];//getting rid of spaces.
  return result;
}
console.log(countOccur(array));

