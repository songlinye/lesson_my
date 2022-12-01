let str = "How are you doing today"
// 获取最短的单词长度

//第一种  ---------- 这种是自己写的
// a = str.split(" ");
// console.log(a);
// var b = a[0].length;
// for(var i = 0;i<a.length-1;i++){
//     if(a[i].length>a[i+1].length){
//         b = a[i+1].length;
//     }
// }
// console.log(b);

//第二种 
console.log(Math.min(...str.split(" ").map(item => item.length)))
