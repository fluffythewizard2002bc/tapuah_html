const string3 = "stupid@... dog stupid father stupid kid";
const string4 = "stupid dog stupid father stupid kid";

function capitalize(string1) {
    const arr1 = string1.split('');

    let output1 = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] != " ")
            output1 += arr1[i].toUpperCase();

    }
    return (output1);
}



function sortWords(string1) {

    let str1 = string1.split('').sort().join('');
    return str1;
}

function checkString(s) {
    let arr = s.split('');
    return new Promise((resolve, reject) => {

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] != " " && arr[i].toUpperCase() === arr[i].toLowerCase()) {
                reject("check is false");
            }
        }

        resolve("check is true");
    });
}



checkString(string3)
    .then((result) => console.log(result, sortWords(capitalize(string3))))
    .catch((error) => console.log(error));


checkString(string4)
    .then((result) => console.log(result, sortWords(capitalize(string4))))
    .catch((error) => console.log(error));