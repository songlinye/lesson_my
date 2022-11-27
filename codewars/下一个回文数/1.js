
const nextPal = (val) => {
    do 
    {
        val ++;
        var str = val.toString();
        var arr = str.split("");
        var num = Number(arr.reverse().join(""));       //  Number()
    } while(num !== val)
    return val;
}

console.log(nextPal(202));