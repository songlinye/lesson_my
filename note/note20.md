- 在JavaScript中，我们已知有5种基本数据类型：Undefined、Null、String、Number、Boolean。
    ES6 新增了 Symbol       ES10新增了  BigInt


- Symbol类型

    - 每个从Symbol()返回的symbol值都是唯一的。
    
    - 一个symbol值能作为对象属性的标识符；这是该数据类型仅有的目的。

    - eg.
            let var_symbol = Symbol();
            let other_symbol = Symbol();
            console.log(var_symbol === other_symbol);
            // false
            console.log(typeof var_symbol);
            // symbol
            console.log(var_symbol.constructor === Symbol)
            // true


- BigInt 

    - BigInt 是一种数字类型的数据，它可以表示任意精度格式的整数

    - JavaScript 所有数字都保存成 64 位浮点数，这给数值的表示带来了两大限制。
        - 一是数值的精度只能到 53 个二进制位（相当于 16 个十进制位），大于这个范围的整  数，JavaScript 是无法精确表示的，这使得 JavaScript 不适合进行科学和金融方面的精确计算。
        - 二是大于或等于2的1024次方的数值，JavaScript 无法表示，会返回Infinity。
    ES10引入了一种新的数据类型 BigInt，来解决这个问题。BigInt 只用来表示整数，没有位数的限制，任何位数的整数都可以精确表示。

    - 为了与 Number 类型进行区分，BigInt 类型的数据必须添加后缀n。

        12 	    // 普通Number
        12n     // BigInt
        
        // BigInt 的运算
        1n + 2n     // 3n

        // 与Number 类型进行运算
        1 + 1n      // Uncaught TypeError

    - BigInt 与普通整数是两种值，它们之间并不相等。
        12n === 12      // false

    - 由于 BigInt 与 Number 完全属于两种类型,并且不会进行隐式转换，所以没有办法进行混合运算。想要运算的话，必须将两种数据类型转换为同一种后，方可进行计算。
        BigInt(number)      // 将一个 Number 转换为 BigInt
        Number(bigint)      // 将一个 BigInt 转换为 Number

    - typeof 运算符对于 BigInt 类型的数据返回 bigint。
        typeof 12n      // 'bigint'

    - 创建一个 BigInt 的时候，参数必须为整数，否则报错