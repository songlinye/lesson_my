- 类数组
    有length属性  可以遍历  但是不具备数组的很多方法的对象子类型
    如Arguments（函数的内置对象）  NodeList

    - es6 设计箭头函数的原因
        1. this  增加了代码的复杂性， 对其他语言开发者不友好
        2. es6 设计的指导原则一  简洁优雅
    
    - 如何把类数组转成真正的数组
        可以使用数组的方法
        NodeList   div     html中  div         js中  runtime(运行时)   Node对象
        map  html  字符串数组  .join('')

        - 遍历一下 {}  push  []
            for(let i = 0; i < length; i++) 
        - 切割 slice()    
            借用数组的slice() 方法
        - Array.from
        - 展开运算符
        - concat + apply
            concat 返回值也是数组

        
    - 如何理解reduce ?
        1. es6中 除map外 最高频数组api考点
        2. for of 或者技术循环太机械   命令式编程
        3. map  reduce  filter  every  some  函数式编程
            useReducer()  reduce  把数组推掉
        4. 可读性更强



- JS 判断数组包含某个值
    蹦出api 是不友好的，    专业， 准确且全面
    - indexOf
        返回元素在数组中第一次出现的下标
        否则为 -1
    - includes
        数组是否存在某个值, boolean
    - find      
        满足条件的第一个元素的值
    - findIndex
















- 判断是否为数组的两个方法
    1. Array.isArray()
    2. Object.prototype.toString.call()


- JSON的定义
    JSON全称是JavaScript Object Notation,是一种轻量级的数据交换格式。
    JSON 是前后端数据交流的格式
            