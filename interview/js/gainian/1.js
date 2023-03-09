function sum(a, b) {
    // 借用数组的slice方法
    let args = Array.prototype.slice.call(arguments);   // call 将this指向arguments
    console.log(args);
    console.log(Array.prototype.toString.call(args))
}
sum(1, 2)