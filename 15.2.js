
function findSmallest(a, b, c) {
    if (a > b && b > c) {
        return c;
    } else if (a > c && c > b) {
        return b;
    } else if (b > c && c > a) {
        return a;
    } else if (b > a && a > c) {
        return c;
    } else if (c > b && b > a) {
        return a;
    } else if (c > a && a > b) {
        return b;
    }
}
console.log(findSmallest(52, 66, 2));

/**
 * ReferenceError: findSmalest is not defined, an "l" is missing.
 *
 * added a console.log to see if the output is correct. realised it prints the largest value.
 *
 * The expression is evalueted from left to right.
 * if a > b is true it results in 1, then a>b>c is actually 1 > c,
 * [comparison between a number and a boolean value will result
 * in internal type conversion of Boolean value to a number
 *  (true becomes 1 and false becomes 0)].
 * Since Boolean comparison isn't the same as math comparison, i'll change line 2 to
 * a>b && b>c and line 4. i'll change line 5 to b,
 * and add all the options.
 *
 *
 */