function clone(target) {
    let cloneTarget = {};   // 新的内存
    for(const key in target) {
        // target[key] 类型，   简单数据类型， 浅拷贝
        //                      复杂数据类型，  引用式赋值         需要递归
        cloneTarget[key] = target[key];
    }
    return cloneTarget
}
let obj = {a: 1, b: 2, c: 3, d: {e:5}}
const o = clone(obj);
o.b = 3; 
obj.d.e = 6 // 相互影响
console.log(obj, o)