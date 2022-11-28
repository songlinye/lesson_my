# 函数

- 函数的地位
    1. 被执行
        - 封装的能力
        function add(a, b) {
            return a + b;
        }

- this 
    函数运行时创建的一个指针    指向谁呢？              四句话

    1. 指向是不固定的，  由运行的方式来决定

    2. add 作为普通函数被调用的时候                     1
        没有被谁调用， 返回的就是  运行环境         
        默认 window

        - 在严格模式下 'use strict';    此处的this指向undefined          2


    3. 作为对象的方法调用时候， this 指向对象           3

    4. 函数做为构造函数使用的时候    this 指向实例(即实例化的对象)              4

    5. 函数作为事件的回调函数来执行的时候  this  指向事件发生的元素



- 严格模式
    js 语言早期  开发的很快  语言有很多糟粕(zao po)   避开它？
    - 普通函数运行时   this 指向全局
    - 定义变量的时候   什么也不加，    全局


- 作用域
    1. 全局
    2. 函数局部
    3. 块级（es6 + let const）
    4. 变量一定会属于某个作用域









# 随记

- 函数可以被 new    被 new 的函数也称构造函数               实例化

- ArrayObject.forEach()    ()里面的参数为函数    遍历数组的每一个元素，并且将这个元素作为一个参数传递给里面的回调函数

- 查找表单用  document.forms['name属性']
    其他的用 document.querySelector()




- English 

    render  v. 提供；提交