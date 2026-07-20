/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
let sortedArray=nums.map((num)=> num*num).sort((a,b)=> a-b)
return sortedArray
};