
// 暴力法   但是会超时

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(h) {
    let s = [];
    for(let i = 0; i < h.length; i++) {
        for(let j = i + 1; j < h.length; j++) {
            s.push((j - i) * Math.min(h[i], h[j]))
        }
    }
    return Math.min(...s)
};

console.log(maxArea([1, 5, 8]))