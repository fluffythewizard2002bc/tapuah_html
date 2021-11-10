/**
 * 
 * 1. Create an object called ‘mycountry’ for a country of your choice, 
containing properties ‘country’, ‘capital’, ‘language’, ‘population’ 
and ‘neighbours’ (an array)
2. Add a method to the object called 'describe' to the 'myCountry' 
object. With the help of the ‘this’ keyword, this method will log a 
string like this to the console:
‘Finland has 6 million people, their mother tongue is Finnish, they 
have 3 neighbouring countries and a capital called Helsinki’. 
3. Call the ‘descrbie method’.
4. Add a method called 'checkIsland' to the 'myCountry' object. 
This method will set a new property on the object, called 'isIsland'.
'isIsland' will be true if there are no neighbouring countries, and 
false if there are. Use the ternary operator to set the property
 
let myCountry = Object();

myCountry.country = "";
myCountry.capital = "";
myCountry.language = "";
myCountry.population = "4";
myCountry.neighbours = [""];*/

const mycountry = {
    country: "Peru",
    capitol: "???",
    language: "Peruvian",
    neighbours: ["Brasil", "Argentina", "Columbia"],
    population: 50,
    describe: function () {
        let len = this.neighbours.length;

        return console.log(this.country + ' has ' + this.population + ' million people, their mother tongue is ' + this.language + ' ,they have ' + len + ' neibhouring countries and a capital called ' + this.capitol);
    }
};

//let obj= new mycountry("england","london","english", 0,220);
let obj = Object.create(mycountry);
obj.describe();

//splice(",").join());
//console.log(Object.keys(arr));
mycountry.checkIsland = function () {
    console.log( this.isIsland = this.neighbours.length === false ? true : 0);
};
//console.log(mycountry.checkIsland()+"moo");
mycountry.checkIsland();
obj.checkIsland();
//console.log(mycountry.isIsland);