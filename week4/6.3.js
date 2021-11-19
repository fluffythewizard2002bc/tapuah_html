function organizeStrings(a, b) {

    let word = a + b;
    let letters = word.split("");
    let letterSet = new Set(letters);
    let unsortedKeys = Array.from(letterSet);

    return console.log(unsortedKeys.sort((a, b) => a.localeCompare(b)).join('')); //1b

}
organizeStrings("ambqcdef", "labcxyz");