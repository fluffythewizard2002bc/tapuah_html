const numbers = [1, -5, 666, 2, 400, 11];
/**1. Sort the array of numbers from descending to ascending 
order
2. Sort the array of numbers from ascending to decending 
order. */

console.log(numbers.sort((a,b)=>a-b)); //1

console.log(numbers.sort((a,b)=>b-a)); //2