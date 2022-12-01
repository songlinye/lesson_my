


// js 没有 class，  不是传统面向对象OOP
// constructor
// js中 function 代替 class 实现类的封装
// 基于对象
function Person(name, age) {            //构造函数
    this.name = name;
    this.age = age;
}
//实例化
const xlz = new Person('小玲子',16);
console.log(xlz.name)