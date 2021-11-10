const arr=[1,7,3,0,-5,7,3,9];
function loopLoop(arr)
{
   
    for(let i=0; i<arr.length; i++){
        console.log(arr[i]);
    }

    
}loopLoop(arr);

function arrayLength(arr){
    let i=0;
    while(arr[i] != undefined){
        i++;
    }
    console.log("size is:");
    console.log(i);

}
arrayLength(arr);

function arraySum(arr){
    sum=0;
    for(let i=0; i<arr.length; i++){
        sum=sum+arr[i];
    }
    console.log("Sum is:");
    console.log(sum);
}
arraySum(arr);

function arrayMulti(arr){
    multi=1;
    for(let i=0; i<arr.length; i++){
        multi=multi*arr[i];
    }
    console.log("multi is:");
    console.log(multi);
}
arrayMulti(arr);

