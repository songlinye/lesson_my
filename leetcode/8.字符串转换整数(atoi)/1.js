/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let a = '';
    for(let i = 0; i < s.length; i++) {
        if(s[i] == ' ' && a.length == 0){
            continue;
        }
        if((isNaN(s[i]) && a.length == 0) && s[i] != '-' && s[i] != '+'){
            return 0
        }
        if((isNaN(s[i]) || s[i] == ' ') && a.length != 0) {
            break;
        }
        a = a + s[i]
    }
    if(isNaN(a[0]) && isNaN(a[1]))
        return 0
    a = Number(a)
    if(a > Math.pow(2, 31) - 1)
        a = Math.pow(2, 31) - 1
    if(a < Math.pow(-2, 31))
        a = Math.pow(-2, 31)
    return a
}

console.log(myAtoi("   -a4a2a 3456a22"))
