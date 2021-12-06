const hero = {
    health: 5,
    power: 68,
    getStrength: function() {
        if (this.health <= 5) {

            return this.power - 10;
        } else {

            return this.power;
        }
    }
}

function whoIsStronger(getStrength) {
    const myStrength = 82;
    if (getStrength() < myStrength) {
        return console.log("I am stronger");
    } else return console.log("You are stronger");
}

whoIsStronger(hero.getStrength.bind(hero));
//the reason was that this was global, had no health attribute.