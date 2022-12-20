/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let nums3 = nums1.concat(nums2);
    let m = nums1.length;
    let n = nums2.length;
    nums3.sort((a, b) => a - b);
    // console.log(nums3);
    if((m + n) % 2 === 1) {
        return nums3[Math.ceil((m + n)/2) - 1];
    } else {
        return (nums3[(m + n)/2 - 1] + nums3[(m + n)/2])/2;
    }
};

console.log(findMedianSortedArrays([1, 3], [2, 4]))