//    match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。


var str="The rain in SPAIN stays mainly in the plaiN"; 
var n=str.match(/ain/g);    // [ 'ain', 'ain' ]
var m=str.match(/ain/gi);   // [ 'ain', 'AIN', 'ain', 'aiN' ]
console.log(n, m)