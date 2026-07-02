/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let sum1=0;
    let sum2=0;
    let str;
    for (let num of nums){
    sum1+=num;
        str=num.toString().split("");
    for (let i of str){
        sum2+=Number(i);
    }
    }
    return sum1-sum2;
};