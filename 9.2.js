function percentageOfWorld1(population){//6.4 looping_with_arrays
    return  Math.round((population*100/7900 + Number.EPSILON) * 100) / 100;
}

const population=[500,350,1478,25];

function populationPercentages(popu_arr){
    const percentages=[];
/*
    for(let i=0; i<popu_arr.length;i++){
        percentages.push( percentageOfWorld1(popu_arr[i]))
    }
    return percentages;
    */
   let i=0;
   while(i<popu_arr.length){
    percentages.push( percentageOfWorld1(popu_arr[i]))
    i++;
   }//i prefer for because you can keep i inside,
   return percentages;
}
console.log(populationPercentages(population));