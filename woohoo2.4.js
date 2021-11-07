
function today() {
    let currentDate = new Date()
   
    Date.prototype.monthNames = [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
    ];
    Date.prototype.dayNames = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday"];


    let day = Date.prototype.dayNames[currentDate.getDay()];
    let num = currentDate.getDate();//Date.prototype.getDate()
    let month = Date.prototype.monthNames[currentDate.getMonth()];
    let year = currentDate.getFullYear();

    return (console.log(`Today is ${day} ${num} of ${month}, ${year}`));

}
today();//Today is Sunday the 31 of January, 2021 

