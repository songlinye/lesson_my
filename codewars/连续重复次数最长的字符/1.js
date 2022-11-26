//  Character with longest consecutive repetition
function longestRepetition(s) {
    if (s === "") {
        return ["",0];
    }
    let sarr = s.split("");
    let char = sarr[0];
    let max = 1;
    var a = 1;
    for (let i = 0; i < sarr.length - 1; i ++) {
        if(sarr[i] !== sarr[i+1]) {
            a = 1;
        } else {    // 相等
            var char1 = sarr[i];
            a ++;
            if(a > max) {
                max = a;
                char = char1;
            }
        }
    }
    return [char,max];
  }

console.log(longestRepetition("cacccaaaccddd"));