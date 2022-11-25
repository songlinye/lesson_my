//  元音计数


function getCount(str) {
    var newstr = str.replace(/[aeiou]/g, '');
    // console.log(newstr);
    return str.length - newstr.length;
    // console.log(str.length - newstr.length);
  }
//   getCount('abc def ghi jk')