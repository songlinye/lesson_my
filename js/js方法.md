# 主要事件

- onmouseover()   鼠标经过事件

- onmouseout()   鼠标移开事件

- onfocus()      光标聚集事件

- onblur()      失焦事件

- onselect()    内容选中事件

- onchange()    内容改变事件

- onload()    加载事件


# 字符串对象方法

- replace()      替换               （note8）

- toUpperCase()             toLowerCase()

- charAt()   返回指定位置的字符

- indexOf()   查找指定字符串（字符）首次出现的位置

- split()  字符串分割

- parseInt()        可解析一个字符串，并返回一个整数     (note11)

- substr()          从字符串中提取从 startPos位置开始的指定长度的字符串。

- substring()    提取字符串中介于两个指定下标之间的字符。   两个参数：    起始下标  结束下标（可选）        不包括结束下标

         substring() 和 slice() 差不多， 唯一的区别就是 当第一个参数比第二个参数大时
            substring()交换参数位置，再进行输出； 而slice()为空

- slice()    提取字符串中介于两个指定下标之间的字符。             两个参数：    起始下标  结束下标（可选）        不包括结束下标
                该方法并不会修改原字符串，而是返回一个子字符串。

- match()       可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。             (note14.md)


# Math 对象方法

- Math.ceil()   向上取整            Math.floor()   向下取整

- Math.round()     把一个数字四舍五入为最接近的整数。      对于 0.5，该方法将进行上舍入。(如5.5 将舍入为 6)

- Math.random()         可返回介于 0 ~ 1（大于或等于 0 但小于 1 之间的一个随机数。

- Math.min()      Math.max()        如果任一参数不能转换为数值，则返回NaN         如果没有参数，则返回Infinity(无穷大)

- Math.map()        为数组中每个元素调用一个函数，并返回结果数组        不改变原数组
            eg.
                let arr = ["hello", "javascript"];
                let length = arr.map( item => item.length );        //将元素本身转换为元素的长度
                console.log( arr );       //["hello", "javascript"]
                console.log( length );        //[5, 10]

- Math.pow()      两个参数，第一个为底数，第二个为几次方

- Math.abs()    取绝对值 
    



# 数组对象方法


- flat()        实现数组扁平化
    - 括号中参数默认为1， 意思是将数组降维一次，  可写 Infinity   无数次

    - eg.    
        let ary = [1, [2, [3, [4, 5]]], 6];
        let ary1 = ary.flat()       // [ 1, 2, [ 3, [ 4, 5 ] ], 6 ]
        let ary2 = ary.flat(Infinity)       // [ 1, 2, 3, 4, 5, 6 ]

- some()       用于检测数组中的元素是否满足指定条件（函数提供）。    返回值是boolean值      其他的和find() 基本相同
    - some() 方法会依次执行数组的每个元素：
        - 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
        - 如果没有满足条件的元素，则返回false。
    
    - some() 不会对空数组进行检测。

    - some() 不会改变原始数组。

    - 语法和find()  相同

- find()        返回通过测试（函数内判断）的数组的第一个元素的  值   。    没有符合条件的元素则返回   undefined
    - find() 方法为数组中的每个元素都调用一次函数执行：
        - 当数组中的元素在测试条件时返回 true 时, find() 返回符合条件的元素，之后的值不会再调用执行函数。
        - 如果没有符合条件的元素返回 undefined

    - find() 对于空数组，函数是不会执行的。

    - find() 并没有改变数组的原始值。

    - 语法： array.find(function(currentValue, index, arr),thisValue)
        - 函数是必需的
        - currentValue   必需  当前元素
        - index         可选    当前元素的索引值
        - arr           可选    当前元素所属的数组对象
        - thisValue     可选

- findIndex()   返回通过测试（函数内判断）的数组的第一个元素的  下标 。  没有符合条件的元素则返回     -1  

- includes()      用于判断字符串/数组是否包含指定的子字符串/元素。  如果找到匹配的字符串则返回 true，否则返回 false。
    -  includes() 方法区分大小写。
    - 语法： string/arr.includes(searchvalue, start)      start 可选，表示从哪个位置开始查找，默认为0

- Array.from()      用于将类数组结构或可迭代对象转换为数组实例
    - 可以使用Array.from()方法进行数组的浅拷贝

- Array.isArray()     判断是否为数组

- concat()       用于连接两个或多个数组。          此方法返回一个新数组，不改变原来的数组。

- join()        用于把数组中的所有元素放入一个字符串。元素是通过指定的分隔符进行分隔的。
                    若不给join()方法传入任何值，或传入 undefined，则使用逗号隔开
                    eg.  
                    var a = ["x", "y", "z"].join()      //  a = x,y,z
                    var b = ["x", "y", "z"].join("")    //  b = xyz


- reverse()     用于颠倒数组中元素的顺序。

- slice()    从数组中返回选定的元素             两个参数：    起始下标  结束下标（可选）        不包括结束下标
                该方法并不会修改数组，而是返回一个子数组。

- splice()
    - 语法：   array.splice(index, num, char)           index 开始下标（包括）        num 删除的项数      char 插入的项
    - 从数组中删除任意个元素
    - 返回结果为被删除元素组成的新数组
    - 该方法会改变原数组，会将指定元素从数组中删除
    - 还可以给数组添加新的元素（位置为 第一个参数下标元素的前面）
    - 若不想删元素，让 num 为 0
                                                                

- sort()    数组排序    (note7)     改变原数组

- push()        可向数组的末尾添加一个或多个元素，并返回新的长度

- pop()        删除数组的末尾元素，并返回该元素

- shift()       删除数组的首位元素，并返回该元素

- unshift()     向数组的首位添加一个或多个元素，并返回新的长度

- forEach()     遍历数组的每一个元素，并且将这个元素作为一个参数传递给里面的回调函数                没有返回值，且不改变原数组

- map()  (必考！)    返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值        不改变原数组   interview/js/map

- reduce()    接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。

                    arr.reduce(function(prev,cur,index,arr){                      // arr 原数组  init 初始值
                        ...
                    }, init);

                        let arr = [1,3,5,7,9]

                        let sum1 = arr.reduce((total,current,index)=>{
                            console.log(total,current,index);
                            return total+current;
                        }, 0)
                        console.log(sum1); 

                        let sum2 = arr.reduce((total,current,index)=>{
                            console.log(total,current,index);
                            return total*current
                        })
                        console.log(sum2);

- fliter()      创建⼀个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。   （会遍历数组的每一项）
                        filter() 不会对空数组进⾏检测, 不会改变原始数组

                        arr.filter((item, index, arr) => {})       第⼀个参数是数组中当前元素的值,第⼆个参数为元素索引值,第三个参数为数组本⾝

                    let arr1 = [1, 2, 3, 4, 5, 6]
                    let arr2 = arr1.filter(item => {
                        return item % 2 == 0
                    })
                    console.log(arr2) // [2, 4, 6]


# 计时器

- setTimeout()

- setInterval()

- clearInterval()


# JS 中的 toString() 方法的作用   （其中的几种）

1. 可以返回该数字对应进制的字符串
            eg.   console.log(13.toString(2))     // 13转为二进制'1101'

2. 返回一个包含该值的 string 对象
            eg. myNumber = 100
                myNumber.toString() // result: '100'

                noNumber = NaN
                noNumber.toString() // result: 'NaN'

                decNum = 122.33
                decNum.toString() //  result: "122.33"

                数组可以直接用 toString() 方法，消除深度，每一项逗号隔开       codewars ~ 25   

3. 检测对象的类型
            eg.     Object.prototype.toString.call(arr)  == "[object Array]"


# querySelector()

- 返回文档中匹配指定CSS选择器的第一个元素             
                    
                    而 document.querySelectorAll() 可获取多个元素，跟document.getElementsByClassName()一样返回一个数组
        
- 语法： document.querySelector(CSS selectors)

    - eg.   const a = document.querySelector("#abc")     // a绑定到id为abc的选择器
            document.querySelector("#id");      通过id获取元素
            document.querySelector(".class");   通过clss获取元素
            document.querySelector("标签名");    通过标签名获取元素

# Number()    将字符串转类型转为数字类型

# toFixed()     可把 Number 四舍五入为指定小数位数的数字。而且会把数字转换为字符串

#  localStorage.setItem()    localStorage.getItem()     JSON.parse()        JSON.stringify()

- localStorage.setItem() 本地存储一个东西，   第一个参数是名字,  第二个参数是值
    只能存字符串，不能存对象，如果是对象，存进去拿不出来

- localStorage.getItem()  从本地取一个东西

- JSON.stringify()    将某个对象转换成 JSON 字符串形式        序列化

- JSON.parse()    将JSON数据转换为 JS 对象。            反序列化

- eg.
    let o = {a:1, b:2, c:3}
    localStorage.setItem('item', JSON.stringify(o))   
    localStorage.getItem('item')        // '{"a":1,"b":2,"c":3}'
    JSON.parse(localStorage.getItem('item'))        // {a: 1, b: 2, c: 3}