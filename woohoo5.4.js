/*
1. If the color is yellow, pink or orange return from the function “light color”.
2. If the color is blue, purple, brown return from the function “dark color”.
3. If the color is none of the above return “Unknown color” */

function weird(color) {

    switch (color) {

        case "yellow":
        case "pink":
        case "orange":
        return "light color";
          
        case "blue":
        case "purple":
        case "brown":
        return "dark color";
           
        default:
        return "unknown color";
    }
}
console.log(weird("pink"));
console.log(weird("blue"));
console.log(weird("mandarin"));
