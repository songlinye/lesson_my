let nums = [1, 2, 3];
let obj = {val: 5}
// 原数组不会受影响
// 命令式编程到函数式编程
// 第一个参数是要调用的函数， 第二个参数是执行函数时被用作this的值
// 函数参数有三个， 按需使用     第一个是当前元素，  第二个是当前元素的索引，  第三个参数是原数组   
let newNums = nums.map(function(item, index, array) {
    //没有返回值， 默认是undefined
    return item + index + array[index] + this.val    // 新数组第一项 1 + 0 + 1 + 5 = 7
}, obj)
console.log(newNums)