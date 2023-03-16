// js 想要发展成一门系统级别的大型语言  如java那样
// 脚本 script     dom + Ajax  前端的业务
// js 单线程      promise  async await 

const people = new Set([1, 2, 3, 1]);   //  Array       去重
console.log(people, people.size)    // 没有length属性
for(let person of people) {
    console.log(person)
}