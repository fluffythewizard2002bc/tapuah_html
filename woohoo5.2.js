
function weird(language) {

    switch (language) {

        case "mandarin":
        return "MOST number of native speakers!";
          
        case "english":
        return "2nd place in number of native speakers";
          
        case "english":
        return "3rd place";
          
        case "spanish":
        return "Fourth place";
           
        case "hindi":
        return "Fourth place";
           
        case "arabic":
        return "5th most spoken language";
           
        default:
        return "Not in the top 5";
    }
}
console.log(weird("hindi"));
console.log(weird("english"));
console.log(weird("mandarin"));
console.log(weird("hebrew"));