/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    let array=[];
    let sum;
    for(let i=1;i<num;i++){
        if(num%i==0){
            array.push(i);
        }
    }
    sum=array.reduce((accumulator,currentitem)=>{return accumulator+currentitem},0)
    if(sum==num){
        return true;
    }
    else{
        return false;
    }
};