- es6 提供的新的数据类型？
    BigInt   Symbol

    Symbol()


- 两种新的数据结构
    解决特定问题， 语言内置了  
    1. Set         (元素不能相同)  去重        add    size 
        类似Array 容器
        [1, 2, 3, 1]
        [1, 2, 3]


    2. Map   HashMap 哈希表   key => val                Map 不能赋初值   没有 length
        JSON Object   key 一定是 string / Symbol    
        HashMap       key  可以是任何类型， 可以是对象
