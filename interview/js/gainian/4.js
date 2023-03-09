function sum(a, b) {
    // apply 把this 指向后面的参数，是一个集合，就是[]这个数组集合，而不能用call，call的参数是展开的
    let args = Array.prototype.concat.apply([], arguments);   
    console.log(args)

    return args.reduce((sum, current) => sum + current)
}
console.log(sum(1, 2))


let A = [1, 2]
let B = [3, 4, 5]
let C = Array.prototype.concat(A, B)    // 这样也能用
console.log(C)


