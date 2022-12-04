var stuA = {
    name: '蔡总'
}

var stuB = {
    name: '刘总'
}

function sayHi(...args) {
    console.log(arguments, ...args);
    console.log(`你好，我是${this.name}`)
}

// stuA 和 stuB 都能 sayHi
// call / apply 改天换命， 手动指定 this 的指向                             
// sayHi.call(stuB);
// sayHi.call(stuA);           
// sayHi.apply(stuA)           
sayHi.call(stuA, 1, 2);       //  call 后面的参数是多个数
sayHi.apply(stuA, [1, 2])      // apply 第二个参数是数组
//      bind
// var func = sayHi.bind(stuB);
// func();



// this -> 调用对象stuA stuB
// Object.prototype.sayHi = sayHi;
// stuA.sayHi()



