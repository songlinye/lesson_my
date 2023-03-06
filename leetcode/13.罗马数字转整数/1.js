/**
 * @param {string} s
 * @return {number}
 */


// slice() 不会改变原数组

// while 满足条件继续执行，不满足退出
var romanToInt = function(s) {
    let sum = 0;
    const valueSymbols = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];
    for(const [value, symbol] of valueSymbols) {
         while(s.indexOf(symbol) === 0) { // 匹配到的只有在首位才行
            sum += value;
            s = s.slice(symbol.length);   // 把匹配到的首字符串去掉
         }
         
         if(s.length === 0) {
            return sum;
         }
    }
};

console.log(romanToInt("VII"))