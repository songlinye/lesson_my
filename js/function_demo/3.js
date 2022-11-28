"use strict"
// 变量的作用域
var name = '龙'     // 全局     window
// this     指向    调用方式
// js 变量属于  属于作用域
function func() {
    var y1 = 2;
    y2 = 4;     //  不加 var let，      全局变量      不好！
    var name = 'jay'      // func 内部    局部变量
    {
        let x = 1;  //  
        var z = 3;   //  es5    不支持块级作用域
        let name = '涛';
    }
    console.log(y, z);
}
console.log()