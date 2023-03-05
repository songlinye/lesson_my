
//  slice() 在 数组和字符串中都是 返回两个下标之间的元素        参数：  初始下标   结束下标（不包括）

let s1 = 'abcde';
let s2 = s1.slice(0, 2);
console.log(s1, s2);
let arr1 = [1, 2, 3, 4, 5];
let arr2 = arr1.slice(0, 2);
console.log(arr1, arr2)


console.log("\n\n")


// substring() 和 slice() 差不多， 唯一的区别就是 当第一个参数比第二个参数大时,      
//  substring() 交换参数位置，再进行输出；
//  而slice() 为空
let s3 = "abcde";
let s4 = s1.slice(0, 2);
let s5 = s1.substring(0, 2);
let s6 = s1.substring(2, 0);
console.log(s3, s4, s5, s6)

console.log("\n\n")

// 字符串的substr() 方法 和数组的splice() 方法都是返回相应的元素，     参数：    初始下标   项目数
//  区别是     substr() 不会改变原字符串， 而splice() 方法会改变原数组
let str1 = "abcdef";
let str2 = str1.substr(3, 2);
console.log(str1, str2);
let a1 = [1, 2, 3, 4, 5, 6];
let a2 = a1.splice(3, 2)
console.log(a1, a2)