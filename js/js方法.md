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

- substring()    提取字符串中介于两个指定下标之间的字符。

- substr()          从字符串中提取从 startPos位置开始的指定长度的字符串。

- parseInt()        可解析一个字符串，并返回一个整数     (note11)


# Math 对象方法

- Math.ceil()   向上取整            Math.floor()   向下取整

- Math.round()     把一个数字四舍五入为最接近的整数。      对于 0.5，该方法将进行上舍入。(如5.5 将舍入为 6)

- Math.random()         可返回介于 0 ~ 1（大于或等于 0 但小于 1 )之间的一个随机数。

- Math.min()      Math.max()        如果任一参数不能转换为数值，则返回NaN         如果没有参数，则返回Infinity(无穷大)

- Math.map()        为数组中每个元素调用一个函数，并返回结果数组        不改变原数组
            eg.
                let arr = ["hello", "javascript"];
                let length = arr.map( item => item.length );        //将元素本身转换为元素的长度
                console.log( arr );       //["hello", "javascript"]
                console.log( length );        //[5, 10]

- - Math.pow()      两个参数，第一个为底数，第二个为几次方
    



# 数组对象方法

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
    - 从数组中删除任意个元素
    - 返回结果为被删除元素组成的新数组
    - 该方法会改变原数组，会将指定元素从数组中删除
    - 还可以给数组添加新的元素（位置为 第一个参数下标元素的前面）
    - 若不想删元素，可以让第二个参数大于第一个元素
                                                                （结尾元素下标为   第二个参数    即包括结束下标）

- sort()    数组排序    (note7)

- push()        可向数组的末尾添加一个或多个元素，并返回新的长度

- pop()        删除数组的末尾元素，并返回该元素

- shift()       删除数组的首位元素，并返回该元素

- unshift()     向数组的首位添加一个或多个元素，并返回新的长度

- forEach()     遍历数组的每一个元素，并且将这个元素作为一个参数传递给里面的回调函数                没有返回值，且不改变原数组

- map()     返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值        不改变原数组

- reduce()    接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。

                    let arr = [1,3,5,7,9]

                    let sum1 = arr.reduce((total,current,index)=>{
                        console.log(total,current,index);
                        return total+current;
                    })
                    console.log(sum1); 

                    let sum2 = arr.reduce((total,current,index)=>{
                        console.log(total,current,index);
                        return total*current
                    })
                    console.log(sum2);



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