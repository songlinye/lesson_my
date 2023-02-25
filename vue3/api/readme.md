# 为什么喜欢vue ？
    - 丰富的指令
        v-if(um=unmounted)  v-show(display:none)
        v-model  双向绑定
        v-on:click
        v-bind:
        v-html  输出含有html的内容
        Vue 默认会把html作为字符来显示，而不会转义成正真的html
        肯定有原因?
    
    - 修饰符
        @click.prevent
        @submit.prevent
        @keydown.enter

    - 计算属性 computed
        view 更纯粹， 可读性更好
        帮助我们缓存计算结果， 当data 发生改变的时候，
        如果我们不用计算属性， 用的是表达式的话， 就算是无关的数据，也会重新计算渲染
        界面的更新是局部，而不是全部更新
        性能优化

- v-model 确实好用
    input   开销  性能不好        change ?

- computed 与 watch 的区别
    1. computed属性  一定要有返回值的
        而watch 只是监听
    2. computed 在 mounted 之前自动执行一次
        而watch 只有在数据改变的时候才会执行










default   n. 默认值