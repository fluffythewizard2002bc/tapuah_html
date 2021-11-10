let arr=new Array(100).fill({song:"death"});
//console.log(arr);

//let arr2 = Array.from(Array(10).keys());
//arr2=Array.from(arguments, x => x + 1);
//console.log(arr2);


//const arr2=Array.from(Array(10).keys()].map(i=>i+1);
const arr2=[...Array(100).keys()].map(i=>i+1);
//for(let i=0; i<arr2.length;i++)
//    console.log(arr2[i]);


obj1=({"moo":100, b:35, a:22});
/*
for (const [key, value] of Object.entries(obj1)) {
    console.log(`${key}: ${value}`);
}*/

let val1=Object.values(obj1);
//console.log(val1);

let val2=[1,"stupid", "c"];
let obj2=Object.assign({}, val2);//['a','b','c']);
//console.log(obj2);
let val3=[1,2,3];
let obj3={1:"a", 2:"b"};
console.log(Array.isArray(val3));
console.log(Array.isArray(obj3));

let arrone=[1,2,3];
let arrtwo=arrone;
arrtwo[0]=0;
console.log("shallow");
console.log(arrtwo[0]);
console.log(arrone[0]);

let arr1=[1,2,3];
let arrdeep= [...arr1];
arr1[0]=0;
console.log("deep");
console.log(arrdeep[0]);
console.log(arr1[0]);