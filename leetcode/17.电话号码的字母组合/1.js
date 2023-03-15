/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length === 0) return []       // 1. 考虑边界问题
    let arr = [];
    const map = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };  // 2. 不是哈希表，哈希表不能赋初值
    const dfs = (curstr, i) => {  // 3. 声明函数，准备递归
        if(i > digits.length - 1) {
            arr.push(curstr);
            return; //4. 结束当前分支
        }
        const letters = map[digits[i]];
        for(const letter of letters) {
            dfs(curstr + letter, i + 1);  // 5. 递归    curstr + letter不能写在外面(上一行)
        }
    }
    dfs('', 0);  // 6. 递归开始
    return arr
    };
    
    
    
    console.log(letterCombinations('23'))