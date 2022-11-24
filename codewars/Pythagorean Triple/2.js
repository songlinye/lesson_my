function isPythagoreanTriple(integers) {
    var arr1 = integers.sort((a, b) => a-b);        // 相当于   var arr1 = integers.sort(function(a, b) { return a - b;})
    // return (arr1[0]**2 + arr1[1]**2 == arr1[2]**2);
    return arr1[0]**2 + arr1[1]**2 === arr1[2]**2;
}

isPythagoreanTriple([5, 4, 3]);