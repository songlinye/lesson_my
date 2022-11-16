# CSS 选择器


- p.abc {
    background: red;
  }
    此实例中，具有 class="abc"的<p>元素的背景为红色

- id名称不能以数字开头，类名不能以数字开头

- 通用选择器 （ * ）选择页面上所有的HTML元素     

                                    css reset 样式重置尽量不要用 *  因为会消耗性能

- 分组选择器 选取所有具有相同样式定义的HTML元素
    h1, h2, p {
        background: red;
    }
        此实例中，<h1>元素、<h2>元素和<p>元素的背景为红色

- 相邻兄弟选择器   选取紧跟在另一个元素后元素，而且二者有相同的父元素
    h1 + p {
        background: red;
    }
        此实例中，紧跟在<h1>元素后面的<p>元素的背景为红色




# 随记

## JS 中的 toString() 方法的作用   （其中的几种）

    1. 可以返回该数字对应进制的字符串
            eg.   console.log(13.toString(2))     // 13转为二进制'1101'

    2. 返回一个包含该值的 string 对象
            eg. myNumber = 100
                myNumber.toString() // result: '100'

                noNumber = NaN
                noNumber.toString() // result: 'NaN'

                decNum = 122.33
                decNum.toString() //  result: "122.33"

## 字符串模板

- 语法：
        把字符串写在``里面，${变量、表达式、函数}

        eg.
            var obj ={ 
                        name: '张三',
                        age: 20       
                    }
            // 传统打印
            console.log("我的名字叫" + obj.name + ",今年" + obj.age + "岁");
            // ES6
            console.log(`我的名字叫${obj.name},今年${obj.age}岁`);

## Math.min() 方法       
                                    Math.max() 方法恰好相反
- 返回给定值中最小的数

    - 如果任一参数不能转换为数值，则返回NaN
      如果没有参数，则返回Infinity(无穷大)

    - 有效参数：  整数， 浮点数， 数字字符串

## map()

- 为数组中每个元素调用一个函数，并返回结果数组
    eg. 
            let arr = ["hello", "javascript"];
            let length = arr.map( item => item.length );        //将元素本身转换为元素的长度
            alert( arr );       //hello, javascript
            alert( length );        //5, 10

## JS数组方法   join()方法

- join() 方法用于把数组中的所有元素放入一个字符串
    元素是通过指定的分隔符分割的

- 语法： 
        arrayObject.join(separator)
            参数 separator 可选，指定要使用的分隔符
                若不给join()方法传入任何值，或传入 undefined，则使用逗号隔开

        eg.  
            var a = ["x", "y", "z"].join()      //  a = x,y,z
            var b = ["x", "y", "z"].join("")    //  b = xyz




# English
    
    separator   n. 分离器


