/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
let sort=nums.map((num)=> num*num).sort((a,b)=> a-b)
return sort
};