// str => arr => sort 
function isIsogram(str) {
    if (str === '') {
        return true;
    }
    str = str.toLowerCase();
    // console.log(str);
    arr = str.split("");
    // console.log(arr);
    arr.sort();          // ？  看是哪种排序算法   O(n^2)    O(nlogn)
    // 这里的时间复杂度是加法   O(nlogn) + O(n)  = O(nlogn)
    // console.log(arr);
    // 比较相邻的元素是否重复
    for(let i = 0; i < arr.length - 1; i ++) {
        if (arr[i] === arr[i + 1]) {
            return false;
        }
    }
    return true;
}

console.log(isIsogram('enCc'));