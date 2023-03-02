/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    flag:
    for(let i = 0; i < haystack.length; i++) {       //   遍历 haystack 的每一项
        for(let j = 0; j < needle.length; j++) {      //  每次遍历从以该项为起点，和 needle 的每一项依次进行比较
            if(haystack[i + j] !== needle[j]) {     // 若发现某一项有不相同，则跳出本次遍历，从下一项继续遍历
                continue flag;
            }
        }
        return i    //若内层循环执行完毕，而没有跳出，则表示相同，则返回 i 
    }
    return -1   // 若整个循环体过完都没有返回，说明不匹配，返回 -1
};

console.log(strStr("leetcode","leeto"))