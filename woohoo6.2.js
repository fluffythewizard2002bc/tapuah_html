/*
For each of the questions below, answer the question’s with this array:
1. Using a loop, iterate through this array and console.log all of the people.
2. Write the command to remove "Greg" from the array.
3. Write the command to remove "James" from the array.
4. Write the command to add "Matt" to the front of the array.
5. Write the command to add your name to the end of the array.
6. Using a loop, iterate through this array and after console.log-ing "Mary",
exit from the loop.
7.Write the command to make a copy of the array using slice.  The copy 
should NOT include "Mary" or "Matt".
8. Write the command that gives the indexOf where "Mary" is located.
9.Write the command that gives the indexOf where "Foo" is located (this 
should return -1).
10.Redefine the people variable with the value you started with. Using the 
splice command, remove "Devon" from the array and add "Elizabeth" 
const people = ["Greg", "Mary", "Devon", "James"];
and "Artie". Your array should look like this when you are done ["Greg",
"Mary", "Elizabeth", "Artie", "James"].
11.Create a new variable called withBob and set it equal to the people 
array concatenated with the string of "Bob".
*/
const people = ["Greg", "Mary", "Devon", "James"];

for (let i = 0; i < people.length; i++) {//1
    console.log(people[i]);
}
people.shift();//2
people.pop();//3
people.unshift("Matt");//4
people.push("Eli");//5

console.log("the pips are:");
for (let i = 0; i < people.length; i++) { //6
    console.log(people[i]);

    // if(people[i]==="Mary")
    //    break;
}
//const people = ["Matt", "Mary", "Devon", "Eli"];
let newArr = [];
newArr = people.splice(2); //7
console.log(newArr);
console.log("8:");
for (let i = 0; i < people.length; i++) { //8
    if (people[i] === "Mary")
        console.log(i);
}

function func() {
    for (let i = 0; i < people.length; i++) { //9
        if (people[i] === "MAary"){
            return console.log(i);
        }
    }
    return console.log("-1");
}
func();

const people2 = ["Greg", "Mary", "Devon", "James"];//10
people2.splice(2, 1);
//return console.log(people2);
people2.splice(2, 0, "Elizabeth");
people2.splice(3, 0, "Artie");
console.log("10:");
console.log(people2);

let withBob=people2.concat("Bob");//1
//console.log(withBob);
