/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = x.toString();
    let arr1 = str.split("");
    let arr2 = [...arr1];
    arr2.reverse();
    for(let i = 0; i < arr1.length; i ++){
        if(arr1[i] != arr2[i]) {
            return false;
        }
    }
    return true;
};