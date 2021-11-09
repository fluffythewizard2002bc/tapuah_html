/*Regarding logical operators only:
passValid3(input); //outputs 2 outputs, we need only the first one.
passValidAdvanced(input); //outputs 3 outputs, we need only the first one.
it's doable but problematic.
*/

function passValid1(input) { //If Else
    if (input.length > 7)
        return "strong";
    return "weak";

}
function passValid2(input) { //a?b:x
    return (input.length > 7 ? "strong" : "weak");

}

function passValid3(input) {// Logical && || 
    input.length > 7 && console.log("strong") || (input.length < 7) && console.log("weak");
}

function isUppercase(input) {
    let ar = 0;
    let varArr = input.split('');
    for (let num of varArr) {
        if (num == num.toUpperCase())
            ar++;
    }
    if (ar)
        return true;
    return false;
}
function passValidAdvanced(input) {// character.toUpperCase()

    input.length > 7 && isUppercase(input) && console.log("Very Strong") ||
        input.length > 7 && console.log("strong") || (input.length < 7) && console.log("weak");
    console.log(`\n`);
}
function passValidMain(input) {
    console.log(`${passValid1(input)} if else`);
    console.log(`${passValid2(input)} trinery`);
    console.log(`${passValid3(input)} logi`); //outputs 2 outputs, we need only the first one.
    console.log(`\n`);
    console.log(`${passValidAdvanced(input)} advanced`); //outputs 3 outputs, we need only the first one.
}
/*
passValidMain("1238A");
passValidMain("1238123234A");
passValidMain("123456789");
*/