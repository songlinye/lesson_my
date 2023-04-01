

var arr1 = [1, 2, 3];
var arr2 = arr1;    //  引用式赋值
var arr3 = [...arr1];   //    es6 浅拷贝
//  如果不用深拷贝， reverse()方法颠倒数组，会改变原数组，由于数组是复杂数据类型，
//  原数组 arr1 改变会连带着 arr2 一起改变， 若想两个互不影响，需要用到拷贝
arr1.reverse();


console.log(arr1,arr2,arr3);