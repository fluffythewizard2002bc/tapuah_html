function getnum(num) {
    const myPromise = new Promise((resolve, reject) => {

        if (num > 10) {
            resolve("Got the data");
        } else {
            reject("didn't get the data, sending error message");
        }
    });
    return myPromise;
}

//console.log(getnum(9));

getnum(-1).then((success) => {
        console.log("success", success);
    })
    .catch((error) => {
        console.log(error);
    });

getnum(9).then((success) => {
        console.log("success", success);
    })
    .catch((e) => {
        console.log(e);
    });