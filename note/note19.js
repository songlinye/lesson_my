let arr = ['a', 10, 50, 'asd', 0]   
let obj = {a: 9, b: 4, c: 6}
let str = 'xyz'
let map = new Map()
map.set('a', 1)
map.set('b', 5)
console.log(map)

for(let key in arr) {
    console.log(key)    // 0 1 2 3 4
}

for(let key in obj) {
    console.log(key)    // a b c
}

for(let key in str) {
    console.log(key)    // 0 1 2
}




for(let key of arr) {
    console.log(key)    // a 10 50 asd 0
}

for(let key of str) {
    console.log(key)    // x y z 
}

for(let key of map) {
    console.log(key)    // [ 'a', 1 ]    [ 'b', 5 ]
}
for(let [key, val] of map) {
    console.log(key, val)    //a 1    b 5
}