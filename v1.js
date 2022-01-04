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
    
    let trusts = [];
    let isTrusted = new Map();
    for(const e of trust){
        trusts.push(e[0]);
        isTrusted.set(e[1], (isTrusted.get(e[1]) ?? 0) + 1);
    }
    for(const [key, value] of isTrusted){
        if(value === n-1 && trusts.includes(key) === false){
            return key;
        }
    }
    return -1;
};
// Runtime: 180 ms, faster than 18.30% of JavaScript online submissions for Find the Town Judge.
// Memory Usage: 48.5 MB, less than 17.24% of JavaScript online submissions for Find the Town Judge.