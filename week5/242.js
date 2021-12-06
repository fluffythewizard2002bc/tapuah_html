function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
    this.pokemonName = pokemonName;
    this.pokemonType = pokemonType;
    this.pokemonAttackList = pokemonAttackList;
}

let pokemons = [
    new Pokemon("dog", "fluffy", [
        "fetch",
        "dig",
    ]),
    new Pokemon("cat", "fluffy", [
        "purr",
        "scratch",
    ]),
    new Pokemon("fish", "cold", [
        "blub",
        "sprinkle",
    ]),
];

Pokemon.prototype.callPokemon = function() {
    console.log(`I choose you, ${this.pokemonName}`);
};

Pokemon.prototype.attack = function(attackNumber) {
    console.log(
        `${this.pokemonName} used ${this.pokemonAttackList[attackNumber]}`
    );
};

pokemons.forEach((pokemon) => {
    pokemon.callPokemon();
    pokemon.attack(0);
});