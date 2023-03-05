/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const MAX = Math.pow(2, 31) - 1;
    const MIN = -Math.pow(2, 31);
    if(dividend == MIN && divisor == -1) { // 商超出最大
        return MAX;
    }
    let sign = (dividend > 0) ^ (divisor > 0) ? -1 : 1;     // 异或求符号
    let num = 0;
    if(dividend > 0) { dividend = -dividend };      // 转为正数的话，最小值变正数会超出， 故全部转为负数
    if(divisor > 0) { divisor = -divisor };
    while(dividend <= divisor) {
        dividend -= divisor;
        num++;
    }
    return sign * num;
};

console.log(divide(7, -3))


//  时间复杂度为 O(n)    运行超时