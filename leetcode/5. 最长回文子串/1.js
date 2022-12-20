/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let str = '';
    var helper = function(m, n) {
        while(m >= 0 && n < s.length && s[m] === s[n]) {
            m --;
            n ++;
        }
        if(n - m - 1 > str.length) {
            str = s.slice(m + 1, n);
        }
    }
    for(let i = 0; i < s.length; i ++) {
        helper(i, i);
        helper(i , i + 1);
    }
    return str
};


console.log(longestPalindrome('abcdeacadec'))
