const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
];

//1  Create a function that returns all the names from the array.
const returnNames = (data) => {
    let result = [];
    data.forEach((instance) => {
        result.push(instance.name);
    });
    return result.join(" ");
}
//console.log(returnNames(data));

//2 Create a function that returns all the objects that are born before 1990.
const returnSomeObjects = (data, limit) => {
    let result = [];
    data.forEach((instance) => {
        let year = parseInt(instance.birthday.slice(-4), 10);
        //console.log(year);
        if (year < limit)
            result.push(instance);
    });
    return result;
}
//console.log(returnSomeObjects(data, 1990));
const objFoods = (data) => {
    
    let foods_fish = [];
    let foods_meat = [];

    data.forEach((instance) => {
        foods_fish = foods_fish.concat(instance.favoriteFoods.fish);
        foods_meat = foods_meat.concat(instance.favoriteFoods.meats);
    });

    //console.log(foods_fish);
    let setFish = new Set(foods_fish);
    let setMeat = new Set(foods_meat);

    let shortFish = Array.from(setFish);
    //console.log(shortFish);
    let shortMeat = Array.from(setMeat);


    const result = {};

    shortFish.forEach((item) => {
        let num = (foods_fish.filter(x=> x===item)).length;
        
        result[item]=num;

    });
    shortMeat.forEach((item) => {
        let num = (foods_meat.filter(x=> x===item)).length;
        
        result[item]=num;

    });
    //Object.entries(add).forEach(([key,value]) => { obj[key] = value })

    return (result);
}
console.log(objFoods(data));

  //3  Create a function that returns an object of all the different foods from all 
    //the objects as the key and the number of times that food is present in all the 
    //objects as the value
