// Find the odd int



function findOdd(A) {
    let arr = A.sort();
    let sum = 1;
    let char = arr[0];
    for(let i = 0; i < arr.length - 1; i ++) {
        if(arr[i] !== arr[i+1]) {
            if(sum%2 === 1) {
                return char;
            }
            char = arr[i+1];
            sum =1;
        } else {
            sum ++;
        }
    }
    return arr[arr.length-1];
}
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));