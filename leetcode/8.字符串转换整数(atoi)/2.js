var myAtoi = function(s) {
    let n = parseInt(s, 10);
    if(isNaN(n)) {
        return 0
    } else if(n < Math.pow(-2, 31) || n > Math.pow(2, 31) - 1) {
        return n < Math.pow(-2, 31) ? Math.pow(-2, 31) : Math.pow(2, 31) - 1
    } else {
        return n
    }
}