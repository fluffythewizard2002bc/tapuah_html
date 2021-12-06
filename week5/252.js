const mahmood = {
        name: 'mahmood',
        print: function() {
            console.log(this.name, new Date());
        },
        printAgain: function() {
            setTimeout(mahmood.print.bind(mahmood), 3000);
        }
    }
    //mahmood.printAgain();
    //mahmood.printAgain.apply(mahmood, mahmood.printAgain);
    //mahmood.printAgain.bind(mahmood)();
    //mahmood.printAgain.call(mahmood, mahmood.printAgain);
mahmood.printAgain.apply(mahmood, mahmood.print());