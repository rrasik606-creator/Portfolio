/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
let sqnums=nums.map((num)=> num*num)
let sort=sqnums.sort((a,b)=> a-b)
return sort
};