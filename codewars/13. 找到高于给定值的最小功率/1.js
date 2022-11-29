// 有问题   
// 计算机能读懂的是二进制，进行运算的时候，实际上是把数字转换为了二进制进行的 这个过程 丢失了精度

function findNextPower (val,pow_) {
    var a = Math.pow(val, 1/pow_);
    console.log(a);
    // if(a % 1 == 0) {
    //     return (a + 1) ** pow_;
    // } else {
    //     return Math.ceil(a) ** pow_;
    // }

}

console.log(findNextPower(4782969, 7))

