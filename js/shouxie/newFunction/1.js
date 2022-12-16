function Person(name, age) {
    // 构造
    // 基于原型的封装 {}
    this.name = name;
    this.age = age;
}

Person.prototype.sayHi = function() {
    console.log(`你好，${this.name}`);
}

const aTao = new Person('啊涛', 17);

/**
 * @func new的过程
 * @params constructor  ....
 * 1. js 基于对象 {}
 * 2. Person  this 构造的过程
 * 3. 手动返回 实例对象
 */
// ...args reset 运算符
function myNew(constructor, ...args) {
    // console.log(args, '?????')
    const obj = {};  // 基于对象
    // 借
    // const constructor = Array.prototype.shift.call(arguments);          // 从 arguments 中拿到第一个参数
    // arguments 能用下标访问， 但是没有数组的方法              它是一个 伪数组
    // console.log(typeof arguments, Object.prototype.toString.call(arguments))
    // console.log(arguments instanceof Array)
    // {}
    // Person 属性？
    //return
    // console.log(arguments);

    // constructor.call(obj, ...arguments);       // 虽然用了 call，   但是后面用了展开运算符
    constructor.apply(obj, args);
    // console.log(obj);
    obj.__proto__ = constructor.prototype;
    return obj;
}

let lu = myNew(Person, '卢总', 17);