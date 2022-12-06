const twoSum = (nums, target) => {
    var mymap = new Map();
    for(let i = 0; i < nums.length; i ++) {
        if(mymap.has(target - nums[i])) {
            return [mymap.get(target - nums[i]), i];
        } else {
            mymap.set(nums[i], i);
        }
    }
}