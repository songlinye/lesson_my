const findNextPower = (val,pow_) => {
    for(let i = 1; i <= val; i ++) {
        if(Math.pow(i, pow_) > val) {
            return Math.pow(i, pow_)
        }
    }
}
console.log(findNextPower(2,1))