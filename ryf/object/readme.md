# 一起读技术文章， 提升我们的认知

1. c 语言   过程式  函数 main() 
    js 基于（面向）对象？
    面向？    基于？
    object-based

2. js 原来没有 class 关键字
    var es5       let const es6以后
    es6(2015年) 才有了 class 关键字
    js 不是一种真正的面向对象编程语言, 而是基于对象的语言， 这个对象就是 Object 
    Object 是所有对象的原型

3. 除了简单数据类型， 都是对象
    任何对象都有一个__proto__私有属性去说明它基于哪个对象创建的

4. js 本没有类，    早期连 class 关键字都没有
    但是内置了一个 Object 对象，
    其他所有对象都基于这个空对象进行创建
    在这个对象的构建过程（属性和方法集合），用一个函数来封装
    new Person() 得到了    基于对象的新的对象

5. 基于对象， 生成实例对象的原始模式 一步步创建的
    缺点是满 重复

6. 函数封装对象的时候
    缺点是

7. js 使用构造函数的方式来创建类
    以 new 的方式运行
    对象构建过程的封装  this 指向 实例
    另外 class 有的 instanceof 也有
    并且兄弟对象之间基于的对象一致

8. js 基于对象
    - __proto__  Object                         obj.__proto__ == Object.prototype
    - instanceof                                obj instanceof Object          ture
    - obj.constructor                               obj.constructor == Object

9. js 中创建类 写个构造函数就完成了

10. js JS 如何构建类的
    - 类就是属性和方法集合的模板，  抽象的
    - 先使用构造函数， 定义实例属性的构造过程， 每个对象属性是不一样的，
        归实例自己所有    this      具象
    - 由于 实例们共有的属性和方法， 没有必要放在构造函数里面， 因为
    - 每个函数都有一个 portotype 属性， 专门用来设计 共享的属性或方法对象
        原型对象
    











# 随记

- 对象.__xxx__        这里的两个下划线表示私有属性

- English   

    oriented    n. 朝向，面向...的
    program     n. 程序；编程