/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);         // 先排序
    let min = nums[0] + nums[1] + nums[2];  // 初始化
    for(let i = 0; i < nums.length - 1; i++) {
        let L = i + 1;
        let R = nums.length - 1;
        while(L < R) {
            let sum = nums[i] + nums[L] + nums[R];
            if(Math.abs(target - sum) < Math.abs(target - min))
                min = sum;
            if(sum > target) {
                R--;
            } else if(sum < target) {
                L++;
            } else {
                return min;
            }
        }
    }
    return min;
};
console.log(threeSumClosest([-1000,-5,-5,-5,-5,-5,-5,-1,-1,-1], -14));