const storm = {
    // add code here
    superPower: "flying",
    print: printSuperPower
}

function printSuperPower() {
    console.log("my superpower is " + this.superPower);
}

storm.print();