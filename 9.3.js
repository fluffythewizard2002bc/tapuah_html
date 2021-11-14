const food = ["Noodle", "Pasta", "Ice-cream", "Meat",
    "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives",
    "Hamburgers"];
/**
 * Create a function that takes these two arrays as 
arguments.
Compare these two arrays using 2 for loops and return the 
items that are the same. If none are the same return false.
 */
function moo(arr1, arr2) {
    let same = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j])
                same.push(arr2[j])
        }
    }
    if (same.length) {
        let arrSame = [];
        let mySet = new Set(same);
        mySet.forEach(v => arrSame.push(v));
        for (let a = 0; a < arrSame.length; a++)
            console.log(arrSame[a]);
        return;
    }else
        return false;
}
console.log(moo(food, food1));
console.log(moo(["food"], ["food1"]));