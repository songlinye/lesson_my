var addTwoNumbers = function(l1, l2) {
    l1.reverse();
    l2.reverse();
    let a = Number(l1.join(""));
    let b = Number(l2.join(""));
    let sum = a + b;
    let l3 = sum.toString().split("");
    l3.reverse();
    return l3;
};


console.log(addTwoNumbers([9,9,9,9,9,9,9],[9,9,9,9]));

// join 不改变原数组