function clone(target) {
    if(typeof target === 'object') {
        let cloneTarget = Array.isArray(target)?[]:{};  // 解决引用式赋值的问题  开辟新的内存
        for(const key in target) {
            cloneTarget[key] = clone(target[key])
        }
        return cloneTarget
    } else {
        return target
    }
}


const target = {
    field1: 1,
    field2: undefined,
    field3: 'ConardLi',
    field4: {
        child: 'child',
        child2: {
            child2: 'child2'
        }
    }
};

const o = clone(target);
o.field4.child2.child2 = 'newchild2'
console.log(o, target)