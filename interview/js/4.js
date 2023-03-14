// 手写 call

// 手写的时候， es6版本会比老版本更优雅

Function.prototype.call = function(context, ...args) {
    context = context || window
    let fn = Symbol('fn')     // 唯一值
    // 给context 动态添加了fn属性
    context.fn = this;    // 绝对不会覆盖context上的属性

    let result = context.fn(...args)
    delete context  // 让context 干净   代码洁癖
    return result
}

const me = {name: 'Jack'}
function say() {
    console.log(` My name is ${this.name}`)
    return 111
}
console.log(say.call(me, 1, 2, 3))





// let obj = { 
//     val: 5,
//     a: function()  {
//         console.log(this.val)
//     }

// }

// obj.a()