//  Anagram Detection
var isAnagram = function(test, original) {
    if (test.length !== original.length) {
        return false;
    }
    test = test.toLowerCase();
    original = original.toLowerCase();
    let arr1 = test.split("");
    let arr2 = original.split("");
    arr1 = arr1.sort();
    arr2 = arr2.sort();
    for(let i = 0; i < arr1.length; i ++) {
        if(arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
};
console.log(isAnagram('abc','bca'));
