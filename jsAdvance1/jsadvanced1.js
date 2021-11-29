//input array of chars.             <2>
//output: reversed array.

function reversarr(array) {
    return array.reverse();
}
//console.log(reversarr(["a", "b", "c"]));

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
//console.log(reversarrRecursion(["a", "b", "c"]));


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
//console.log(fiboRec(5));


//fuck to real: a^x===n

function factorial(a, n) {
    if (n <= 1)
        return 0;
    return (factorial(a, n / a) + 1);
}

function binSearch(arr, left, right, val) {

    let mid = left + Math.floor((right - left) / 2);

    if (right > left) {

        if (arr[mid] === val) {

            return mid;

        } else {

            if (arr[mid] > val) {

                return binSearch(arr, left, mid - 1, val);

            } else {


                return binSearch(arr, mid + 1, right, val);
            }
        }

    } else if (right < left) {
        return -1;
    }

}
//console.log(binSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0, 9, 5));





//decode.   <7>
/**
● 1 <= s.length <= 30
● s consists of lowercase English letters, digits, and square brackets '[]'.
● s is guaranteed to be a valid input.
● All the integers in s are in the range [1, 300]} str 
 */
function deCode(str) {

    if (str.length === 0) //exit 
        return "";

    let wholenum = 0,
        num = 0,
        i = 1 / 10,
        letter = "";
    /**
     * Making sure wholenum recives valid digits only, 
     * it is updated with the real num only after we reached while.
     */
    do {
        wholenum = wholenum * i + num;
        letter = str.shift();
        num = parseInt(letter, 10);
        i *= 10;
    } while (!Number.isNaN(num));

    if (wholenum)
        return deCode(str).repeat(wholenum) + deCode(str);

    else
    if (letter === '[')
        return deCode(str);

    else if (letter === ']')
        return "";

    else
        return letter + deCode(str);
}
let str = "3[a2[c]]"; //Output: "accaccacc"
console.log(deCode(str.split("")));
let str1 = "2[abc]3[cd]ef"; // Output: "abcabccdcdcdef"
console.log(deCode(str1.split("")));
let str2 = "abc3[cd]xyz"; // Output: "abccdcdcdxyz"
console.log(deCode(str2.split("")));
