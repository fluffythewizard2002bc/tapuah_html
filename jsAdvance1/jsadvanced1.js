//input array of chars.             <2>
//output: reversed array.

function reversarr(array) {
    return array.reverse();
}

function reversarrFor(array) {
    let arr2 = [];
    let j = array.length - 1;
    for (let i = 0; i < array.length; i++, j--)
        arr2[i] = array[j];
    return array.reverse();
}
//console.log(reversarrFor(["a", "b", "c"]));

let arr3 = [];

function reversarrRecursion(array) {

    if (array.length == 0)
        return;
    arr3.push(array.pop());
    reversarrRecursion(array);
    return arr3;
}
console.log(reversarrRecursion(["a", "b", "c"]));


//                  <3>
//Fibonazi.
/*
F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
 */
function fiboRec(num) {
    if (num === 1 || num === 0)
        return 1;
    return fiboRec(num - 1) + fiboRec(num - 2);
}
console.log(fiboRec(5));