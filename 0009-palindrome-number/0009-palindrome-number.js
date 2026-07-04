/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str=String(x); 
    let result="";
    for(i=str.length-1;i>=0;i--){
        result+=str[i];
    }
    if(Number(result)==x){
        return true
    }
    else{
        return false
    }
};