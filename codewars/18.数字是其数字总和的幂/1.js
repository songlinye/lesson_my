let arr = [];
for(let i = 2; i < 100; i ++) {
    for(let j = 2; j < 42; j ++) {
        let product = Math.pow(i, j)
        if(product.toString().split("").reduce((total,current) => total + parseInt(current),0) === i) {
            arr.push(product)
        }
    }
}
arr = arr.sort((a, b) => a - b);
const powerSumDigTerm = (n) => arr[n - 1];



console.log(powerSumDigTerm(2));