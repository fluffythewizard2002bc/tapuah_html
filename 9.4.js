/**
 * 
 * Write a function that has one argument, a positive integer. 
Lets call it N.
The function should console log a step shape.
With N levels using the # character. Make sure the step has
spaces on the right hand side if empty!
Note:
Examples:
steps(2) 
‘# ‘
‘##
 */
function steps(num) {
    let arr = ["'"];
    for (let i = 0; i < num; i++) {
        arr.push("#");
        arr.push(["'"]);
        console.log(arr.join(''));
        arr.pop();
    }

}
steps(3);
steps(5);