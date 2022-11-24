function isPythagoreanTriple(integers) {
    var x = Math.max(...integers);
    var sum = 0;
    for(let i = 0; i < 3; i ++) {
        if(integers[i] == x) {
            integers[i] = 0;
            break;
        }
    }
    // console.log(integers);
    for(let i = 0; i < 3; i ++) {
        sum += integers[i] ** 2;
    }
    // console.log(sum);
    if(x * x == sum) {
        return true;
    } else {
        return false;
    }
  }

isPythagoreanTriple([3, 4, 5]);