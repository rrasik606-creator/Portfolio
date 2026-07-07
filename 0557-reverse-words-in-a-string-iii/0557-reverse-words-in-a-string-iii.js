/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let result="";
    let split=s.split(" ");
    let itemsplit="";
    for(let item of split){
      itemsplit=item.split("").reverse().join("")
      result+=itemsplit+" ";
    }
    return (result.toString().trim());
};
