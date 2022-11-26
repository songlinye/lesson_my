var  str = '#home  #HOME  #home'
var newstr1 = str.replace(/home/, 'home111');  
console.log(newstr1);  //  #home111  #HOME  #home

var newstr2 = str.replace(/home/g, 'home111');     // 全局标志g    全文查找出现的所有匹配字符
console.log(newstr2);  //  #home111  #HOME  #home111

var newstr3 = str.replace(/home/gi, 'home111');         //   gi    全文查找、忽略大小写
console.log(newstr3);  //  #home111  #home111  #home111