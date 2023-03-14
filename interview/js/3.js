// 手写Map



// thisArg 指定 callbackFn 内部的this 指向
Array.prototype.map = function(callbackFn, thisArg) {
    // this -> [1, 2, 3]
    if(this === null || this === undefined) {   // 确保原数组不是null或undefined，   防止出现的情况   Array.prototype.map.call(null / undefined)
        throw new TypeError('cannot read proerty map of null or undefined')
    }
    if(typeof callbackFn != 'function') {   // 确保第一个参数是函数
        throw new TypeError(callbackFn + 'is not a function')
    }
    // 显式类型转换  
    let O = Object(this);
    let T = thisArg;

    let len = O.length;
    let A = new Array(len);     // 跟以前的数组没有影响， 全新的内存分配
    for(let k = 0; k < len; k++) {
        // this[k]  遍历的每一项
        // k 下标
        // this  第三个参数
        if( k in O ) {  // 在O对象中 是否有 k?
            let kValue = O[k]    // 拿到每一项
            let mappedValue = callbackFn.call(T, kValue, k, O)
            A[k] = mappedValue
        }
    }
    return A
}


let nums = [1, 2, 3]
let obj = {val: 5}  // map  回调  指定它的this
let newNums = nums.map(function(item, index, array) {
    return item + index + array[index] + this.val;
}, obj)
console.log(newNums)