// Beginner Series #3 Sum of Numbers

// 给定两个整数沙，可以是正数或负数，找到它们之间和包含它们的所有整数的总和并返回它。如果两个数字相等，则返回器。abab



const getSum = (a, b) => {
    let sum = 0;
    if(a > b) {
        let c = a;
        a = b;
        b = c;
    }
    for(let i = a; i <= b; i ++) {
        sum += i;
    }
    return sum;
}

console.log(getSum(-1, 0))