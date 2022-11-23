// pop
// 返回值为被弹出的元素的值
const arr = [1, 2, 3];
// console.log(arr.pop());
// console.log(arr);
// 变量的类型由值决定
Array.prototype.pop = function() {
    // 拿到最后的元素
    let x = this[this.length-1];
    this.length--;
    // 返回
    return x;
}
console.log(arr.pop());
console.log(arr);