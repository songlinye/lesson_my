/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const MAX = Math.pow(2, 31) - 1;
    const MIN = -Math.pow(2, 31);
    if(dividend == MIN && divisor == -1) { 
        return MAX;
    }
    let sign = (dividend > 0) ^ (divisor > 0) ? -1 : 1;     
    let num = 0;
    if(dividend > 0) { dividend = -dividend };    
    if(divisor > 0) { divisor = -divisor };
    while(dividend <= divisor) {
        let x = divisor;
        let k = 1;
        while(dividend <= x + x) {   
            x += x;
            k += k;
        }
        dividend -= x;
        num += k;
    }
    return sign * num;
};

console.log(divide(7, -3))


//  时间复杂度为 O(logn * logn)