/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let array=[];
    let product;
    let sum;
    let result;
    for(let i of String(n)){
        array.push(i)
    }
    product=array.reduce((accumulator,currentItem)=>{
       return accumulator* currentItem
    },1);
    sum=array.reduce((accumulator,currentItem)=>{
        return accumulator+Number(currentItem);
    },0)
    result=product-sum;
    return result;
    
};