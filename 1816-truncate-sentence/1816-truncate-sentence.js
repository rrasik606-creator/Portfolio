/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let split=s.split(" ")
    let result="";
    for(let i=0;i<k;i++){
        result+=" "+split[i];
    }
    return result.trim();
};