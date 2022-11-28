

// 封装     普通的相加函数
// add 函数声明在哪里？
'use strict';
function Test() {
    // this 由函数的运行方式决定
    console.log(this);
    this.x = 1;
}
// 函数可以被 new    被 new 的函数也称构造函数
const o = new Test();
console.log(o.x);

function add(x, y) {
    // 检验参数     this, arguments
    // 两个关键字对象
    console.log(this, arguments);
    return x + y;
}

let obj = {
    add: add
}



console.log(add(1, 2));     // 所有语言
obj.add();          // 作为普通函数被调用的时候