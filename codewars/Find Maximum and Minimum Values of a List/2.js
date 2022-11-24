// 数组
var number = [1,2,3,4,5,6]
console.log(...number) //1 2 3 4 5 6
console.log(number)
var arr = number;
console.log(arr)
//对象
var man = {name:'chuichui',height:176}
console.log({...man}) // {name:'chuichui',height:176}
console.log(man)


var hebing0 = [number,arr]      
var hebing = [...number,...arr];        //  合并数组
console.log(hebing0);
console.log(hebing);

var arr2 = [...'hello'];   //字符串转数组
console.log(arr2);



