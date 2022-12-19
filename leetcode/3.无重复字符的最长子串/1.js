/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let arr1 = s.split("");
    let arr2 = [];
    let max = 0;
    for(let i = 0; i < arr1.length; i ++) {
        let index = arr2.indexOf(arr1[i]);
        if( index !== -1) {
            arr2.splice(0, index + 1);
        }
        arr2.push(arr1[i]);
        max = Math.max(arr2.length, max);
    }
    return max;
};


console.log(lengthOfLongestSubstring("vdvf"));