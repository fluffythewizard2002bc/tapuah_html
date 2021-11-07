function describeCountry(county, population, capitalCity) {
    return (console.log(`${county} has ${population} million people and its capital city is ${capitalCity}`));

}

let arr = [["india", "550", "new delhi"], ["israel", " 7", "jerusalem"], ["russia", "50", "moscow "]];

let arr1=["india", "550", "new delhi"];
let arr2=["israel", " 7", "jerusalem"];
let arr3=["russia", "50", "moscow "];
let arr4=[arr1,arr2,arr3];

let arr5=describeCountry.apply(this, arr1)+describeCountry.apply(this, arr2)+describeCountry.apply(this, arr3);


return (console.log(arr5));
