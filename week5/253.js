const wonderWoman = {
    name: "Diana Prince"
}
const batman = {
    name: "Bruce Wayne"
}
const superHeroes = [wonderWoman, batman];

function printName() {
    console.log(`my name is ${this.name}`);
}

function printHeroes(superHeroes, printName) {

    return superHeroes.forEach(hero => printName.apply(hero, printName.bind(hero)));

};

printHeroes(superHeroes, printName);
//add your code here