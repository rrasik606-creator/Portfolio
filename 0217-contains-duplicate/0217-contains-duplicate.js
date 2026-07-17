/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
 let duplicate=new Set();
 for(let num of nums){
    if(duplicate.has(num)){
        return true;
    }
    else{
        duplicate.add(num)
    }
 }   

     return false;

};