# 手写vuex

- store 类
    单例 store
    state()  mutations
    constructor  options
    commit 方法
    install
- useStore
    app.use()
    provide store
    inject

- 模块化知识点
    1. require + module.exports  commonjs
        node
    2. import + export    es6   module
        export default  默认输出的只能是一次
        输出多个的话， 也可以
                                                                                        模块化的概念     一个文件就是一个模块
                                                                                                        一个函数一个功能
    3. 模块化语法的优先级更高
    4. 模块化语法更明确
        一次 default   n次 export
        对import 支持便捷
        import Vuex(default), { 只能用于export } from ' '


- es6 是 js 的重大更新
    - 让js 成为大型语言，适合企业级开发
        - 模块化
            代码多，  便于管理
        - class 关键字    get  set
            传统面向对象(原型式难理解)
            保护属性
        - extends 继承
        - let const  + 块级作用域
    - 代码更优雅，简洁
        []  {}  ...
        for  of