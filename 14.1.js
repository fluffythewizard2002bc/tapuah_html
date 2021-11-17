/**Write the following functions using the reduce built-in function. 
1. max
2. sum of even numbers
3. average */


let arr = [5, 3, 2, 8, 1];
function maxStuff() { //1

  let maxval = arr.reduce((a, b) => {
    if (a > b) {
      return a;
    }
    return b;

  });
  return maxval;
};
//console.log(maxStuff());


let numbers = [1, 3, 5, 7, 4, 8];
//----------------------------------

const sumOfEven = numbers.filter((a) => {//2
    if (a % 2 === 0){
       return a;
    }
   }
  ).reduce( (b, a) => b + a);

//console.log(sumOfEven);

//----------------------------------//3
const avg = numbers.reduce((acc, num) => acc + num / 2);
  console.log(avg);