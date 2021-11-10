function lencalc(arr){
    const stringLen=[];
    for(let i=0; i<arr.length; i++)
        stringLen.push(arr[i].length);
    return stringLen;

}
console.log(lencalc(["boo", "doooo", "hoo","ro"] ));