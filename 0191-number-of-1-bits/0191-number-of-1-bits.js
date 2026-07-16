/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let count=0;
    let array=n.toString(2).split("");
    for(let item of array){
        if(item==1){
            count++
        }
    }
    return count;
};