function getSum(arr1, arr2){
    let sum = 0;
    for (let i=0; i < arr1.length; i++){
    sum += arr1[i];
    }
    for (let i=0; i < arr2.length; i++){
    sum += arr2[i];
    }
    return sum;
   }
   console.log(getSum([1,2,3],[5,66,23]));//comma added in betweem the [][].

   /**The bug is on line 10, a comma "," is missing between the two array parameters.
    * I used my eyes.
    * there is not such data structure as [][], also the function is expected to recieve two varaibales.
    * I'll add the comma. didn't help.
    * used the built in debuger, line 2 sum is const and therefore cannot be used as a counter.
    * I'll change it to let.
    * I've noticed that the function lacks a return, i'll add a return on line 9.
    * I've added a consol.log to be able to see the ouput in the terminal.
    * 
    */