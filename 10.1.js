function isString(str, func) {
    if (typeof (str) === 'string')
        return func(str);
}

function func(str) {
    console.log(str);
}

function firstWordUpperCase(str, func) {
    let arr = [];
   
    arr.push(str.split(" "));
    //console.log((arr[0])[0]);
   
    let str3 = ((arr[0])[0].toString()).toUpperCase();
    arr[0].shift();
    arr[0].unshift(str3);

    console.log(arr);
    let str5=(arr[0].join(" "));
    func(str5);
    
}
firstWordUpperCase("Big Muzzy", func);

function func(str) {
    //console.log("fun");
    console.log(str.split(" ").join("-"));
    
}/*
const toUpperCasestr2 = (str, func) => {
    const arr = str.split(' ');
    arr[0] = arr[0].toUpperCase();
    let newStr = arr.join(' ');
    return func(newStr);
}

const dashFunc = (str) => {
    return str.replace(/' '/g, '-');
}
const slashFunc = (str) => {
    return str.replace(/' '/g, '/');
}


const calculate = (num1, num2, func ) => {
    return func(num1, num2);
}

const summation = (num1, num2) =>  num1+ num2;
const subtraction = (num1, num2) =>  num1 - num2;
*/