/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let x=0;
    let y=0;
    for(let i of moves){
        if(i=="R"){
            x++;
        }
        else if(i=="L"){
            x--;
        }
        else if(i=="U"){
            y++;
        }
        else if(i=="D"){
            y--;
        }
    }
    if(x==0&&y==0){
        return true;
    }
    else{
        return false;
    }
};