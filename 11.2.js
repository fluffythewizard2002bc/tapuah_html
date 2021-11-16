
//1
let numbers = [1, 4, 9];

const doubleValues = (arr) => (arr.map(function (number) {
    return number * 2;
}));
//console.log(doubleValues(numbers));/console.log(numbers);




//2
const onlyEvenValues2 = numbers.map(function (e) { let arr2 = []; if (e % 2 === 0) arr2.push(e); return arr2 });
//console.log(onlyEvenValues2);
//console.log(typeof(onlyEvenValues2));

let onlyEvenValues1 = (arr) => arr.map(function (e) { let arr1 = []; if (e % 2 === 0) arr1.push(e); return arr1; });
//console.log(onlyEvenValues1(numbers));
//console.log(typeof(onlyEvenValues1));

function onlyEvenValues3(arr) {
    let arr3 = [];
    arr.forEach(function (e) { if (e % 2 === 0) { arr3.push(e); } });
    return arr3;
};
//console.log(onlyEvenValues3(numbers));
//console.log(typeof(onlyEvenValues3));




const showFirstAndLast = (arr) => {//3
    let result = [];

    arr.forEach((value) => {
        if (typeof value !== 'string' || !value.length) {
            return;
        }
        if (value.length === 1) {
            result.push(value);
        }
        else {
            result.push(value[0] + value[value.length - 1]);
        }
    });
    return result;
}
let a0 = [1, "abc", "ab", "5", "abcd", "a"]; //3
//console.log(showFirstAndLast(a0));



const vowlCount = (str) => {//4
    let result = [];
    const charArray = Array.from(str);
    charArray.forEach((char) => {
        if ("aeiou".includes(char)) {
            if (result[char]) {
                result[char]++;
            } else {
                result[char] = 1;
            }
        }
    });
    return result;//4
};
const string = "lajhak bukarawa unoiooo ciby";
//console.log(vowlCount(string));



const capitalizeAll = (str) => {//5
    let result = [];
    const wordArray = str.split(" ");
    wordArray.forEach((word) => {
        let capiWo = (word).toUpperCase();
        result.push(capiWo);
    });
    return result.join(" ");//5
}
//const string4="big muzzy like apples";
//console.log(capitalizeAll(string4));



const shiftLetters = (str) => {//6
    let result = [];
    const letterArray = str.split("");
    letterArray.forEach((letter) => {
        let charcode = letter.charCodeAt(0);
        if (charcode > 96 && charcode < 123) {
            if (charcode === 97) charcode = 122;
            else charcode -= 1;
        }
        else {
            if (charcode > 64 && charcode < 91) {
                if (charcode === 65) charcode = 90;
                else charcode -= 1;
            }
        }
        result.push(String.fromCharCode(charcode));
    });
    return result.join("");//6
};

//console.log(shiftLetters("abc ABC Z def z"));


const swapCase = (str, func) => {//7
    let result = [];
    let num = 0;
    const wordArray = str.split(" ");
    wordArray.forEach((word) => {
        let wo = word;
        if (num % 2) {
            wo = func(word);
        }
        num++;
        result.push(wo);
    });
    return result.join(" ");//7
}

    //const arr7 = "abc def moo";
    //console.log(swapCase(arr7,capitalizeAll));
