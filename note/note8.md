

- span 标签没有 value 值

    在 js 中要对 span 标签的内容进行操作，应该用  innerText





- charAt()方法可返回指定位置的字符。返回的字符是长度为 1 的字符串。

语法： stringObject.charAt(index)



- indexOf()方法可返回某个指定的字符串值在字符串中首次出现的位置。

语法：  stringObject.indexOf(substring, startpos)



- split()方法将字符串分割为字符串数组，并返回此数组。

语法：   stringObject.split(separator,limit)



- substring()方法用于提取字符串中介于两个指定下标之间的字符

语法：  stringObject.substring(startPos,stopPos) 



- substr() 方法从字符串中提取从 startPos位置开始的指定数目的字符串。

语法： stringObject.substr(startPos,length)



- js 中的 replace 方法

    是一种正则表达式方法，用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串

    语法：  stringObj.replace(rgExp, replaceText)

        参数    reExp：可以是正则表达式对象(RegExp)，也可以是字符串(string)；
                replaceText：替代查找到的字符串。

        没有全局标志时，只能匹配一次
        g  全局标志      gi   忽略大小写
        
                eg.     var  str = '#home#home'
                        var newStr2 = str.replace(/home/g, 'home1')        //得到newStr2的结果为"#home1#home"





- English  

    replace   v.代替；取代