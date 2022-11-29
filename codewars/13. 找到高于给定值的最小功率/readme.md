- Math.pow()
    两个参数，第一个为底数，第二个为几次方



-  
        const add = (x, y) => x + y;                    //  自带 return 功能                        箭头函数

        相当于
        const add = (x, y) => { return x + y; }


- 计算机能读懂的是二进制，进行运算的时候，实际上是把数字转换为了二进制进行的 这个过程 丢失了精度
    console.log(9 ** 7);      //  9 的 7 次方是 4782969
    let a = 4782969 ** (1 / 7);
    let b = Math.pow(4782969, 1/7);
    console.log(a, b);      // a 和 b 的值都是 8.999999999999998