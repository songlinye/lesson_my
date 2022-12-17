// Maximum and minimum




function max(){
    let arr1 = [...arguments];
    let str = arr1.toString();
    let arr2 = str.split(",");
    let arr3 = arr2.map(Number);
    let a = arr3.some((el) => Number.isNaN(el));
    if(!a) {    // 全是数字
        arr3.sort((a, b) => b - a);
        return arr3[0];
    }
    return NaN;
}

function min(){
    let arr1 = [...arguments];
    let str = arr1.toString();
    let arr2 = str.split(",");
    let arr3 = arr2.map(Number);
    let a = arr3.some((el) => Number.isNaN(el));
    if(!a) {    // 全是数字
        arr3.sort((a, b) => a - b);
        return arr3[0];
    }
    return NaN;
}


console.log(max(6,1,'2',[3,[4]]));