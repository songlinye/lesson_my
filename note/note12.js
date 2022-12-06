var mymap = new Map();
console.log(mymap);  
mymap.set("a","b");
console.log(mymap);
mymap.set(1,"c");
console.log(mymap);
console.log(mymap.get(1));
console.log(mymap.has("a"));
console.log(mymap.has("b"));