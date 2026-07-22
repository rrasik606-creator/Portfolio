/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let result=0;
for(let item of sentences){
  let word=item.split(" ").length;
  if(word>result){
    result=word
  }
}
   return result
};