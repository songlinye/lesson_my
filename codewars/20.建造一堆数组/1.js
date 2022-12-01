function findNb(m) {
    let sum = 0;
    for(let i = 1; ;i ++) {
        sum += i ** 3;
        if(sum === m) {
            return i;
        }
        if(sum > m) {
            return -1;
        }
    }
}
console.log(findNb(91716553919377))