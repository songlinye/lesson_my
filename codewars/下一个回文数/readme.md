- Number(string) 可以将字符串类型转为数字类型


- 对于对象来说，== 比较的是两个对象是否为同一个对象。
    数组属于对象类型，尽管数组元素是相同的，但这两个数组属于不同的对象，所以 == 比较为false。

                eg.     let array1 = [1, 2, 3];
                        let array2 = [1, 2, 3];
                        console.log(array1 == array2); //输出false


-  while 和 do while  都是满足条件继续循环，不满足退出