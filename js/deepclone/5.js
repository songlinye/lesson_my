// commonjs
const clone = require('./clone');   // 从当前文件夹的clone.js文件中   引入   clone函数
// import from
const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
};


const obj = clone(target);
console.log(obj);