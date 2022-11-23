// 数组 优势是   以O(1)的时间访问到 第i个元素
const arr = [1, 2, 3];
//push方法返回值是数组的length
// console.log(arr.push(4),'/////')

Array.prototype.push2 = function(num) {
    // this.length 就是加入元素的位置
    this[this.length] = num;
    // 如何拿到 arr ?
    //当一个对象调用一个方法，在该方法里面，this指向这个对象
    return this.length;
}
arr.push2(4);
console.log(arr.push2(4))
console.log(arr);