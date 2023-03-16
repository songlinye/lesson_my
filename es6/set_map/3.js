// 哈希表           O(1)时间复杂度    key => val            对象字面量{}   是根据弱化后的哈希表提出的          dictionary

const dogs = new Map();     

dogs.set('Snickers', 3)
// 在对象字面量 {}  中，   语法是   dogs.Snickers = 3
dogs.set('Sunny', 2)
dogs.set('Hugo', 10)
let obj = {name: 'wes bos'}
dogs.set(obj, 11)
// console.log(dogs)

dogs.forEach((val, key) => console.log(key, val))   // forEach第一个参数是value, 第二个参数是key   先后顺序不能错

console.log('\n')

for(const dog of dogs) {
    console.log(dog)
}

console.log('\n')

for(const [key, val] of dogs) {
    console.log(key ,val)
}