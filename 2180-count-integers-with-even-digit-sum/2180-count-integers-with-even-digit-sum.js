/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let str="";
    let split;
    let sum;
    let result=0;
    for(let i=1;i<=num;i++){
        str=String(i)
        split=str.split("")
        sum=split.reduce((a,b)=>{return a+Number(b)},0)
        if(sum%2==0){
            result++;
        }
        
    }
    return result;
};