var arr = [1, [2, [3, 4]], 5];     //  存的是数值

function flatten(arr) {
    return arr.toString().split(',').map((item) =>  { return +item})     //  此处的  +item 和 Number(item) 一样      + 是隐式类型转换
}

console.log(flatten(arr));