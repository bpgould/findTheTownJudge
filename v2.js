/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
 var findJudge = function(n, trust) {
    if(trust.length === 0 && n!==1){
        return -1;
    }
    else if(trust.length === 0 && n === 1){
        return 1;
    }
    
    let possibleJudge = [...Array(n+1).keys()].slice(1);
    let isTrusted = new Map();
    
    for(const e of trust){
        if(possibleJudge.indexOf(e[0]) !== -1){
        possibleJudge.splice(possibleJudge.indexOf(e[0]), 1);
        }
        isTrusted.set(e[1], (isTrusted.get(e[1]) ?? 0) + 1);
    }
    for(const e of possibleJudge){
        if(isTrusted.get(e) === n-1){
            return e;  
        }
    }
    return -1;
};
// Runtime: 141 ms, faster than 27.59% of JavaScript online submissions for Find the Town Judge.
// Memory Usage: 47.1 MB, less than 35.01% of JavaScript online submissions for Find the Town Judge.