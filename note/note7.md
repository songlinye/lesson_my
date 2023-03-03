- 创建一个函数

        const  add = function(x, y) {
            return x + y;       // 功能代码
        }
        相当于
        const add = (x, y) => x + y;                    //  自带 return 功能

        var arr1 = integers.sort((a, b) => a-b);     
        相当于   
        var arr1 = integers.sort(function(a, b) {
             return a - b;
        })





- js 中的 sort()方法

    sort() 方法用于对数组的元素进行排序。               （默认情况下该方法是将数组元素转换成字符串，然后按照ASC码进行排序）

    语法：arrayObject.sort(sortby)；参数sortby可选。规定排序顺序。必须是函数。

    正交负不

        比较函数应该具有两个参数 a 和 b，其返回值如下：     
　          若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。
　          若 a 等于 b，则返回 0。
　          若 a 大于 b，则返回一个大于 0 的值。

    返回值是排好序的新数组


-  一个数的多少次方   用  **  表示
     eg.    var x = 2 ** 3     //  x == 8 （2的三次方）



- return ( x + y == z);        返回 true 或 false
    return x + y === z;         返回 true 或 false




- for循环退出方式

    continue: 表示跳出本次循环，也就是不执行本次循环continue之后的操作
    break: 表示跳出当前的循环，针对整个循环体终止后续的遍历


- 嵌套 for 循环之跳出最外层循环

        在外层循环for之前定义一个标记（标识符：）                                    如在for循环上一句写上  flag:
        再在内层循环中满足条件的执行语句中写上 break/continue 标记;                   如    continue flag;


- 判断某个数是不是另一个数的倍数，可以用求余的方式




- Eenglish 

    integer   n. 整数
    continue   v. 持续