

const removeSmallest = (numbers) => {
    if(numbers.length === 0) {
        return [];
    }
    let arr1 = [...numbers];
    let arr2 = [...numbers];
    arr1.sort((a, b) => a - b);
    let n = numbers.indexOf(arr1[0]);
    arr2.splice(n, 1);
    return arr2;
}


console.log(removeSmallest([5, 3, 2, 1, 4]))






