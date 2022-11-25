//  Disemvowel Trolls

function disemvowel(str) {
    // arr = str.split("a");   // 变成数组
    // console.log(arr);
    // str = arr.join("");     //变回字符串
    // console.log(str);
    // arr = str.split("e");   // 变成数组
    // console.log(arr);
    // str = arr.join("");     //变回字符串
    // console.log(str);
    var parameter = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    for(let i = 0; i < parameter.length; i ++) {
        str = (str.split(parameter[i])).join("");
    }
    return str;
  }
//   disemvowel("bac def hijk lmn opq");