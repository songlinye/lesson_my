function isIsogram(str){
    if (str === '') {
        return true;
    }
    str = str.toLowerCase();
    let arr = str.split('');
    let obj = {}; // 空间的分配 

    for (let i = 0; i < str.length; i++) {
        let char = arr[i];
        if (obj[char] == 1) { // 重复出现               对象的属性的调用   ，  一般都是常量  用  对象.属性  ，  但如果是变量   就用 对象[属性]
            return false;
        } else {
            obj[char] = 1  // 第一次
        }
    }
    return true;
}


console.log(isIsogram('enCc'));