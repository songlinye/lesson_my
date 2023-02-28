var mymap = new Map();
console.log(mymap);  
mymap.set("a","b");
mymap.set("e");     //  插入
console.log(mymap);
mymap.set(1,"c");
console.log(mymap);
console.log(mymap.get(1));    //  获取
console.log(mymap.has(1));
console.log(mymap.has("a"));   //  查找判断
console.log(mymap.has("b"));
mymap = new Map();      // 清空
console.log(mymap);