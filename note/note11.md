# parseInt() 

- parseInt() 函数可解析一个字符串，并返回一个整数。

- 语法：    parseInt(string, radix)             radix	可选。表示要解析的数字的基数。该值介于 2 ~ 36 之间。

- 当参数 radix 的值为 0，或没有设置该参数时，parseInt() 会根据 string 来判断数字的基数。

            如果 string 以 "0x" 开头，parseInt() 会把 string 的其余部分解析为十六进制的整数。
            如果 string 以 0 开头，那么 ECMAScript v3 允许 parseInt() 的一个实现把其后的字符解析为八进制或十六进制的数字。
            如果 string 以 1 ~ 9 的数字开头，parseInt() 将把它解析为十进制的整数。

- 只有字符串中的第一个（段）数字会被返回。

- 开头和结尾的空格是允许的。

- 如果字符串的第一个字符不能被转换为数字，那么 parseInt() 会返回 NaN。

- 在字符串以"0"为开始时旧的浏览器默认使用八进制基数。ECMAScript 5，默认的是十进制的基数。