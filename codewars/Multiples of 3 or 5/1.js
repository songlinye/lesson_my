// 3 或 5 的倍数


// function solution(number){
//   var sum = 0;
//   flag:
//   for(let i = 0; i <= number - 1; i ++) {
//     let x = Math.floor(i/3);
//     let y = Math.floor(i/5);
//     for(let j = 1; j <= x; j ++) {
//         if(i == 3 *j) {
//             sum += i;
//             continue flag;
//         }
//     }
//     for(let j = 1; j <= y; j ++) {
//         if(i == 5 * j) {
//             sum += i;
//         }
//     }
//   }
//   return sum;
// }

function solution(number){
    var sum = 0;
    // flag:
    for(let i = 0; i < number; i ++) {
        // if(i%3 == 0) {
        //     sum += i;
        //     continue flag;
        // }
        // if(i%5 == 0) {
        //     sum += i;
        //     continue flag;
        // }
        if(i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    }
    return sum;
  }
  
  solution(16);
