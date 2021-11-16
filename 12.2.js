const candyStore = {
    candies: [
        {
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4
        },
    ],
    cashRegister: 200
}
/** Implement the following getCandy function:
The function should return the candy element with the specified id. (1) */
function getCandy(candyStore, id) {
    let result = {};
    candyStore.candies.forEach(element => {

        if (element.id === id) {
            result = element;
        }

    });
    return result;
    //your code
}
//console.log(getCandy(candyStore, id));
/** Implement the following getPrice function:
The function should return the price (number) of the candy with the specified 
id (2) */
function getPrice(candyStore, id) {
    let result = {};
    candyStore.candies.forEach(element => {

        if (element.id === id) {
            result = element.price;
        }

    });
    return result;
    //your code 
}
//console.log(getPrice(candyStore, "5hd7y"));
/**Implement the following addCandy function:
The function should add a new candy to the candy list in candyStore with a 
default amount of 1. The function will not return anything. (3) */
function addCandy(candyStore, id, name, price) {
    let result = {};
    result["name"] = name;
    result["id"] = id;
    result["price"] = price;
    result["amount"] = 1;
    candyStore.candies.push(result);
    //your code 
}
addCandy(candyStore, "abx4f", "mars", 7);
//console.log(getCandy(candyStore,"abx4f"));
//console.log(candyStore.candies);

/**Implement the following buy function: The function should add the candy 
price to the cashRegister, and decrease the amount property of the relevant 
candy (4) */

function buy(candyStore, id) {
    
    candyStore.candies.forEach(element => {

        if (element.id === id) {
            candyStore.cashRegister += element.price;
            element.amount--;
        }

    });
    

    //your code 
};

//buy(candyStore,"as12f");
//console.log(candyStore);
