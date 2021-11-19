function isItAnIsogram(word){
if(word.length===0)
    return true;

let letters = word.toUpperCase().split("");
let letterSet = new Set(letters);
let letterKeys = Array.from(letterSet);

if(letterKeys.length===word.length)
    return true;
return false;

}
console.log(isItAnIsogram(""));
console.log(isItAnIsogram("abcDef"));
console.log(isItAnIsogram("aBcDefb"));
