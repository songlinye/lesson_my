//   Sum of Digits / Digital Root

const digitalRoot = (n) =>{
    // console.log("执行一次函数")
    let sum = 0;
    n.toString().split("").map((item) => Number(item)).map((item) => sum+=item)
    // console.log('此时sum=' + sum);
    if(sum > 9) {
        return (digitalRoot(sum));          // 这里要加 return ，不然没有返回值
    } 
    return sum;
  }

console.log(digitalRoot(132189));

