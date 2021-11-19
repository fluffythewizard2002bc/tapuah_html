//ForEach:
let arr = [1, 4, 9, 16, 25, 36];
let arr2 = [];
arr.forEach((val) => {//multiply by two all the elements.
    arr2.push(val * 2);
});
console.log(arr2);
//Filter
arr2 = [];
arr2 = arr.filter((val) => {//leave only the odd numbers
    if (val % 2)
        return val;
});
console.log(arr2);
//Map
arr2 = arr.map(Math.sqrt);// square root of each element.
console.log(arr2);

/**********NINJA********** */
function forFilter(array, condition) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        if (condition) {
            arr[i].push = (array[i]);
        }
    }
    return arr;
}

function forForEach(array, func) {
    for (let i = 0; i < array.length; i++) {
        func(array[i]);
    }
    return;
}

function forMap(array, func) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        arr[i] = (func(arr[i]));
    }
    return arr;
}
