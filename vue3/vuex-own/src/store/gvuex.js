import { reactive, inject } from "vue"

const STORE_KEY = '_store_'

function useStore() {
    return inject(STORE_KEY)  // 引用
}

// 因为createStore 在main.js 入口调用一次， 状态树是单一的， 数据是唯一正确的   CEO  主席
function createStore(options) {
    // 需要store 实例
    // install   app.use   vue 和周边生态的约定
    return new Store(options)   // 这句代码体现了面向对象封装思想
}



// js 为了像大型语言（如java）一样 面向对象能力的提升
// 但class 只是语法糖， 底层还是 function + prototype
class Store {
    constructor(options) {
        // this -> store
        // 两种方法访问状态
        // useStore + store.state.count
        // store.$options.state
        this.$options = options // store对象添加了$options 属性
        // _ 表示私有
        this._state = reactive({
            data: options.state()
        })
        this._mutations = options._mutations  // 编程规范上 mutations 不能改
    }
    // get方法  store.state
    get state() {
        return this._state.data
    }
    // set state(newVal) {
    //     console.log('???')
    //     this._state.data = newVal
    // }

    install(app) {
        // console.log('install')
        app.provide(STORE_KEY, this)
    }

    // type 对应 mutations key ?
    // payload 传参
    commit(type, payload) {
        const entry = this._mutations[type]
        console.log(entry,'///');
        entry && entry(this.state, payload)
    }
}


const PI = 3.1415926
const area = (r) => 2 * PI * r

// 在一个模块中只能有一次
export {
     createStore,
     useStore,
     PI,
     area
}