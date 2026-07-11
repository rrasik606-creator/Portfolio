/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let result=arr.map(fn)
    function add(num){
        return num+1;
    }
    return result;
};