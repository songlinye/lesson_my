

- 开始刷算法时，暴力破解，   n 重循环
- 需要些套路
    - 转变成  排好序相邻元素（O(n)）是否相等判断
- 把时间复杂度降下来
    O(n^2)
    O(nlogn)  +  O(n)
    O(n) ?    用空间换时间     hashMap {}


- 对象的属性的调用   ，  一般都是常量  用  对象.属性  ，  但如果是变量   就用 对象[属性]






- toLowerCase() 方法用于把字符串转换为小写。

- toUpperCase() 方法用于把字符串转换为大写                  

            当需要忽略单词中字母的大小写时，可以用这两种方法将单词中的字母全部转换为大写或者小写再操作



- charAt() 方法可返回指定位置的字符。

    语法： stringObject.charAt(index)

        参数 index 为必需，表示字符串中某个位置的数字，即字符在字符串中的下标

    字符串的第一个字符的下标是 0 

    如果参数不在 0 与 string.length 之间， 则返回一个空字符串



- indexOf() 方法可返回数组中某个指定的元素位置。
                可返回某个指定的字符串值在字符串中 首次 出现的位置。          区分大小写
    
    第一个参数是要匹配的元素（必选）

    第二个参数是开始查找的位置（可选）

    如果没找到，则返回 -1


            eg.     let food= ["番茄", "胡萝卜", "排骨", "苹果"];     //数组中
	                let a = food.indexOf("苹果");
	                console.log(a)          // 3

                    let str="Hello world!";
                    console.log(str.indexOf("Hello"));   // 0   
                    console.log(str.indexOf("l"));       // 2
                    console.log(str.indexOf("l", 2));    // 2
                    console.log(str.indexOf("l", 4));    // 9



