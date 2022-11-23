const arr = [1, 2, 3];
// 末尾添加一个元素
// 在末尾添加多个元素
// 返回值是数组的新的长度
Array.prototype.push = function() {
    // 重写
    // this 面向对象内部，  方法里 this 指向实例后的对象
    // 如何得到所有的参数   []  arguments
    // console.log(arguments,'????');
    // 所有复杂数据类型  typeof object
    // [object Array]
    // console.log(typeof arguments, Object.prototype.toString.call(arguments))
    // console.log(arguments.length);
    for(let i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];   //这里的 this.length 是动态的变化的，不用 this.length+i
    }
    return this.length;
}
arr.push(4, 5, 6);
console.log(arr);