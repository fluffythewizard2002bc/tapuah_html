const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

/**a.1. Sort the array of strings from descending to ascending 
order
a.2. Sort the array of strings from ascending to descending 
order. */
console.log(foods.sort()); //1a

console.log(foods.sort((a, b) => b.localeCompare(a)));//1b


const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
];

/**b.1. Sort the array of strings from descending to ascending 
order.
b.2. Sort the array of strings from ascending to descending 
order. */
console.log(foodsWithUpperCase.sort((a, b) => a.localeCompare(b))); //1b

console.log(foodsWithUpperCase.sort((a, b) => b.localeCompare(a)));//2b


const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

/**c.1. Sort the array of strings from the longest word to the 
shortest word only using the sort function */

console.log(words.sort((a, b) => a.localeCompare(b))); //1c