/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
let count={};
for (let ch of s) {
    if (count[ch]) {
        count[ch]++;
    } 
    else {
        count[ch] = 1;
    }
    }
for(let ch of t){
    if(!count[ch]){
        return ch;
    }
    else{
        count[ch]--
    }
}

};