// 生成对象
// 猫这个类的模板？
// var Cat = {
//     name:'',
//     color:''
// }

// // 基于 Object 对象
// var cat1 = {};  // new Object
// cat1.name = "大毛";
// cat2.color = "黄色";

// // 封装起来哦
// var cat2 = {};
// cat2.name = "二毛";
// cat2.color = "黑色";

// 一个函数   首字母是大写的,   他就是一个类
function Cat(name,color) {
    this.name = name;
    this.color = color;
}
//实例化的过程
var cat3 = new Cat('三毛','灰');
var cat4 = new Cat('四毛','绿');
console.log(cat3)
