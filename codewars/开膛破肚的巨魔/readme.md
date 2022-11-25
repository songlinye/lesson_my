- js 中的 replace 方法

    是一种正则表达式方法，用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串

    语法：  stringObj.replace(rgExp, replaceText)

        参数    reExp：可以是正则表达式对象(RegExp)，也可以是字符串(string)；
                replaceText：替代查找到的字符串。

        没有全局标志时，只能匹配一次
        g  全局标志      gi   忽略大小写
        
                eg.     var  str = '#home#home'
                        var newStr2 = str.replace(/home/g, 'home1')        //得到newStr2的结果为"#home1#home"