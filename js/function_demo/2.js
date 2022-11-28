// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
        // sayhello() {

        // }
// }



// js 独特的面向对象方式
'use strict'
var name = '世龙';
var age = 17;

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function() {
    console.log(`hi,我是${this.name},今年${this.age}`)
    console.log('hi, 我是' + this.name + ', 今年' + this.age);
}

// 实例化过程中   会运行构造函数    给对象添加属性   共享类的方法

// 当一个函数被通过 new 的方式来调用时，就称为构造函数
const jay = new Person('杰', 18);      
jay.sayHello();
console.log(jay.name);

const hu = new Person('胡', 18);         // 做为构造函数被运行
hu.sayHello();      // 做为对象的方法被运行

// const fn = jay.sayHello;
// fn();       // 做为普通函数被运行
