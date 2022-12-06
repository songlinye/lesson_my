// const getSum = (a, b) =>(Math.abs(a - b) + 1) * (a + b) / 2


const getSum = (a, b) => {
    let n = Math.abs(a - b) + 1;
    let sum = n * (a + b) / 2;
    return sum;
}


console.log(getSum(0, 3));