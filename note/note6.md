-  js过渡    transition

    - 为元素的一个属性的值到另一个值的变化中设置渐变过渡

    - 先设置相关属性值，然后再给相应属性添加transition
            eg. 
                // 此处为通过类名查找
                document.getElementsByClassName('box')[0].style.backgroundColor = "red"; 
                    //  此处 red 为字符串，要加引号         属性名为驼峰式
                document.getElementsByClassName('box')[0].style.transition = "background-color  3s";
                    // 属性名不为驼峰式


- document.querySelector()方法    用来获取元素

    - document.querySelector用于获取单个元素，当页面中出现多个相同class标签(或者多个相同标签(比如多个div))时，只匹配第一个元素。

    - document.querySelectorAll()获取多个元素，跟document.getElementsByClassName()一样返回一个数组

        eg.
            document.querySelector("#id");      通过id获取元素
            document.querySelector(".class");   通过clss获取元素
            document.querySelector("标签名");    通过标签名获取元素



query   v.n 查询

