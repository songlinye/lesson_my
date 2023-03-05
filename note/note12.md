# JS 中的 map 

- Map 是JavaScript中的数据结构，它允许存储【键，值】对，其中任何值都可以用作键或值；


- Map集合中的键和值可以是任何类型，并且如果使用集合中已存在的键将值添加到Map集合中，新值将替换旧值。


- Map.set()方法

    1. 为Map对象添加一个指定键(key)和值(value)的新元素，也可以用于更新现有键的值

    2. map.set(key, value)


- Map.get()方法

    1. 用来获取一个Map对象指定的元素，返回的是键所对应的值，如果不存在则会返回undefined

    2. map.get(key)


- Map.has()方法

    1. 该方法主要用来检查Map中是否存在具有指定键的元素     注意检索的是键！

    2. Map.has(key)

    3. 返回布尔值
