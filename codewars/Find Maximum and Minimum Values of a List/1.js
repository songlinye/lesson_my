// var min = function(list){
//     for(var i = 0; i < list.length; i ++){
//         if(list[i]>list[i+1]) {
//             list[0] = list[i+1];
//         }
//     }
//     console.log(list[0]);
// }

// var max = function(list){
//     for(var i = 0; i < list.length; i ++){
//         if(list[i]<list[i+1]) {
//             list[0] = list[i+1];
//         }
//     }
//     console.log(list[0]);
// }

// max([5])

// 查找列表的最大值和最小值


// var max = function(list){
    
//     return list[0];
// }



const min = function(list) {                //   可以用 const min = (list) => Math.min(...list);  表示
    return Math.min(...list);               
}
const max = function(list) {                //   可以用 const max = (list) => Math.max(...list);  表示
    return Math.max(...list);
}


console.log(max([8, 1, 3, 5, 9]));
console.log(min([8, 1, 3, 5]));