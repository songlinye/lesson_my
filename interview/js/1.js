let ary = [1, [2, [3, [4, 5]]], 6];


// 1
// 递归
// let result = []
// let fn = function(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         let item = arr[i]
//         if(Array.isArray(item)) {
//             fn(item)
//         } else {
//             result.push(item)
//         }
//     }
// }
// fn(ary)
// console.log(result)



// 2
// function flatten(ary) {
//     return ary.reduce((pre, cur) => {
//         return pre.concat(Array.isArray(cur)?flatten(cur):cur)
//     }, [])
// }
// console.log(flatten(ary))




// 3
// let str = JSON.stringify(ary);  //  序列化
// ary = str.replace(/(\[|\])/g, '').split(',').map(item => +item)    
// console.log(ary)
// 1.  / /  正则的格式 
// 2. g  全局，不停下来，一直匹配  
// 3. ()  分组  匹配的各种可能放到这个分组里
// 4. |  或   
// 5.  \   转译  （因为中括号[]在正则表达式中本来就有意义）  6. [  ]   匹配项




// 4
// let str = JSON.stringify(ary);  //  序列化
// str = str.replace(/(\[|\])/g, '')
// console.log(str)
// str = '[' + str + ']'
// console.log(str)
// ary = JSON.parse(str)   // 反序列化
// console.log(ary)



// 5
// es10 内置 flat API
// ary = ary.flat()        // [ 1, 2, [ 3, [ 4, 5 ] ], 6 ]   只打开了一层
// ary = ary.flat(Infinity);   // es10(2019) 提供的flat  API      缺点： 兼容性
// console.log(ary)




// 6
// 先引入 lodash库
// console.log(_.flatten(ary))





// 7
while(ary.some(Array.isArray)) {
    ary = [].concat(...ary)  // 这里不能加中括号  [...ary]    ??????
}
console.log(ary)