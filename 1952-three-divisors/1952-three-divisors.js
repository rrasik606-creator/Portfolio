/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
    let count=0;
    for(i=0;i<=10**4;i++){
       if(n%i==0){
           count++;
       }
    }
    if(count==3){
        return true
    }
    else{
       return false
    }
};