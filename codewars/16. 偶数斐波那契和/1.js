// Even Fibonacci Sum


const fibonacci = (max) => {
    let x = 0;
    let y = 1;
    let sum = x;
    while(y < max) {
        if(y % 2 ===0){
            sum += y;
        }
        let z = x + y;
        x = y;
        y = z;
    }
    return sum;
}
console.log(fibonacci(5));   


