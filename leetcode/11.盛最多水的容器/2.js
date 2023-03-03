
// 双指针法

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(h) {
    let max = Math.min(h[0], h[h.length - 1]) * (h.length - 1);     // 计算初始首尾时的面积
    for(let i = 0, j = h.length - 1; i < j;) {      // 两个指针置于数组首尾
        if(h[i] < h[j]) i++;
        else j--;
        let s = Math.min(h[i], h[j]) * (j - i);
        max = Math.max(max, s)
    }
    return max;
};

console.log(maxArea([1, 5, 8]))