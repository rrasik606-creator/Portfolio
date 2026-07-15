/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
   let sum=String(x).split("").reduce((a,b)=>{return a+Number(b)},0) 
   if(x%sum==0){
    return sum;
   }
   else{
    return -1;
   }
};