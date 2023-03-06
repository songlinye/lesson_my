/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let arr = [];
    if(nums == null || nums.length < 3)     // 特殊情况
        return arr;
    nums.sort((a, b) => a - b);
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > 0)
            return arr;
        if(i >= 1 && nums[i] == nums[i - 1])      //     前一项运行完后，发现后一项和前一项相同，跳过
            continue;
        let L = i + 1;
        let R = nums.length - 1;
        while(L < R) {
            let sum = nums[i] + nums[L] + nums[R];
            if(sum < 0) {
                L++;
            } else if(sum > 0) {
                R--;
            } else {
                arr.push([nums[i], nums[L], nums[R]]);
                L++;
                R--;
                while(nums[L] == nums[L - 1]) { L++ }
                while(nums[R] == nums[R + 1]) { R-- }
            }
        }
    }
    return arr;
};

console.log(threeSum([-1,0,1,2,-1,-4]))