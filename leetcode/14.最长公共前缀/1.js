/**
 * @param {string[]} strs
 * @return {string}
 */

// 初始化s = strs[0]， 再依次和数组之后的每一项两两比较求公共前缀

// 考虑边界问题   strs.length == 0

var longestCommonPrefix = function(strs) {
    if(strs.length === 0)
        return ""
    let s = strs[0];
    for(let i = 1; i < strs.length; i++) {
        let n = 0;
        for(let j = 0; j < s.length; j++) {
            if(s[j] === strs[i][j]) {
                n++;
            } else {
                break;
            }
        }
        if(n === 0) 
            return ""
        s = s.substr(0, n);
    }
    return s
};

console.log(longestCommonPrefix(["cir","car"]))