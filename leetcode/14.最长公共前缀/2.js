/**
 * @param {string[]} strs
 * @return {string}
 */

// 1.js 中的 n 和 j 可以表示一个

var longestCommonPrefix = function(strs) {
    if(strs.length === 0)
        return ""
    let s = strs[0];
    for(let i = 1; i < strs.length; i++) {
        let j;
        for(j = 0; j < s.length; j++) {
            if(s[j] != strs[i][j])
                break
        }
        if(j === 0) 
            return ""
        s = s.substr(0, j);
    }
    return s
};

console.log(longestCommonPrefix(["cir","car"]))