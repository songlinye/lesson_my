- 在for key in 中      
    for(let key in target) {
        ....
    }
    如果target 是对象， key 就是它的key 
    如果target 是数组 / 字符串， key 就是它的下标
    如果target 是Map, 不能用

- 在 for of 中
    for(let k of target) {
        ....
    }
    如果target 是数组 / 字符串， k 就是它的每一项
    如果target 是对象， 不能用
    如果target 是Map， k就是它的键值对
    
    Map 还可以
    for(let [key, val] of map) {
        console.log(key, val)    // 0 1 2
    }

    Map 不能赋初值