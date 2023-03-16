const people = new Set();  // 实例化了Set   内置数据结构             
// 绝对不会出现重复的结构  // 可以使用数据的一些方法，可以被遍历   // 没有length属性， 有size属性
people.add('Wes');
people.add('世龙');
people.add('赖总');
people.add('世龙');
// console.log(people);


for(let person of people) {
    console.log(person)
}

const students = new Set(['Wes', 'Kara', 'Tony']);
const dogs = ['Snickers', 'Sunny'];
const dogSet = new Set(dogs);
console.log(students, dogs, dogSet)