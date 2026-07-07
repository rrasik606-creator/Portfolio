/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let divisiblearray=[];
    let nondivsiblearray=[];
    let sumdiv;
    let sumnodiv;
    let result;
    for(let i=1;i<=n;i++){
        if(i%m==0){
          divisiblearray.push(i) ;
        }
        else{
         nondivsiblearray.push(i);   
        }
    }
    sumdiv=divisiblearray.reduce((accumulator,currentitem)=>{ return accumulator+currentitem},0)
    sumnodiv=nondivsiblearray.reduce((accumulator,currentitem)=>{ return accumulator+currentitem},0)
    result=sumnodiv-sumdiv
    return result
};