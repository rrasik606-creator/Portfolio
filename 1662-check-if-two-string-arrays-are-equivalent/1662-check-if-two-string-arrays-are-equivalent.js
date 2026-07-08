/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let w1="";
    let w2="";
    for(let item1 of word1){
        w1+=item1.split("").join("");
    }
    for(let item2 of word2){
         w2+=item2.split("").join("");
    }
    if(w1==w2){
        return true;
    }
    else{
        return false;
    }
};