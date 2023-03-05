// 先找到从大到小相对应的13个罗马数

// 键值对数组   const arr = [[], [], [], []...]

// for循环   for(const [ , ] of arr)    

    var intToRoman = function(num) {
        let ruoma = [];
        const valueSymbols = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];
        for(const [value, symbol] of valueSymbols) {
            while(num >= value) {
                num -= value;
                ruoma.push(symbol);
            }
            if(num === 0) {
                return ruoma.join("");
            }
        }
    };

    // console.log(intToRoman(93))