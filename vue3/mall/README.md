# vue3 写商城
- 简历需要
- 完整的利用vue 全家桶
- 组件库



- vue3 语法
    - 过滤器 filters    相当于换了一种表现形式     只是一点小改动          （  而computed  data  ->  计算         大改动）
        格式转化    进制转换    汇率    语言
        入口(main.js)可以配置多个过滤器
        app.config.globalProperties.$filters={
            preifx(url) {
                if()    ......
            }
        }


- 设计模式
    DRY    Don't repeat yourself
    代码在复制重复的时候    停下来    将其封装成组件



- 工程化
    前端工程化   工程化脚本运行在服务器端 node         
    .vue    style   lang="stylus"       css 工程  stylus || less
    stylus   交给->    vite    使用->   npm i stylus    转译->   页面上的css
    vite.config.js  vite 配置文件     工程化定制


- 组件化思想
    state   状态对象，  响应式  数据驱动界面
    常规的组件数据都放到state 中， 由reactive({...})
    子组件和state 诞生依赖关系      热更新
    components 组件 有利于 页面级别组件或者大组件更好维护， template比较简洁
    维护好数据状态  正确
    - simple-header
        noback  props  提高了组件的复用和应用场景



- 商业应用npm包
    - vant   （有赞）   移动商城组件库       (element适用于PC端， vant适用于 移动端)
    - lib-flexible    移动适配库
    - vue-router     路由



- 架构（目录的意义）
    vite    工程化  项目模板
    - src   开发目录
        - assets    静态资源目录
            css     image
            main.css    base.css    @import  模块化
        - views     页面级别组件
        - common 文件夹
            通用， 和具体业务无关， 可以在任何页面， 任何项目
            style  通用的样式
                - mixin.styl
                    专门放通用的混合函数的地方
        - service     api
            定义接口的地方
            方便统一管理接口   axios  baseURL ...
            每个页面的接口一个独立的文件    方便维护



- 异步解决方案      （主要问题： 流程难控制）
    - promise pending   ->   fullfiled
    - 同步化
    - es8   async + await       当有多个异步任务要同步化的时候  thenable 要简化



- 全家桶
    - vue-router
        - redirect
            流程如下
            - path: '/'  ->  /home
            - 假如 component: Home.vue     http状态码200 成功
            - 但是 redirect
                没有直接给浏览器响应
                给浏览器发送了一个跳转指令
                在此发出请求？  地址 /home  +  http状态码 3XX


- stylus        
    - css 全新写法， 写起来更快， 很多高级功能              css的超级    本身不能运行   借助于vite

        - 1.  npm i stylus
                安装stylus    css 预编译器
                用全新的写法来写css,  stylus 帮我们自动编译成css
        - 2.  .vue  style  加上 lang="stylus"
    - 不用写{}:;   快       
        写了也没问题
    - 表达父子元素的元素
        缩进    自动加上父元素的限定
    - 混合mixin
        形式上是函数
        封装某个功能样式的集合
        混合到调用它的地方
    - 声明变量
    - scoped
        防止css 类名冲突
        给组件加data-v-hash唯一值
        选择器 加上 属性选择器
    - &.active
        & 引用上一级选择器



- main.js 入口文件，有哪些工作
    全局性的
    - 完整的vue 全家桶
        router  spa

    - 组件库
        vant  element3  element-plus
        按需加载
        css库文件

    - css 准备工作
        - main.css
            - reset
                - *, *:before, *:after       伪元素也要选中， *可能选不到伪元素
                - 移动端box-sizing: border-box  IE盒模型    更有利于布局
                - font-family   -apple-system(移动端)       微软雅黑(PC端)
                - 高分辨率手机   抗锯齿，让文字更清晰
                    text-rendering
                    -webkit-font-smoothing: antialiased;
            - 全局css 变量的声明     方便主题及样式的管理、复用

        - 图标字体库
            iconfont
            引入第三方  link               index.html里

        - 移动应用
            rem  适配  html  fontSize 动态   1rem = 设计稿的多少？    750px  
            第三方框架  lib-flexible
            Mobile Frist     80%
            PC   工作  管理  后台



- axios
    - 如接口请求里的顺丰
        更专业
        接口返回的数据， 再包一层  更好和更标准的使用， 更丰富的请求信息
        http 了解更多
        axios 把接口返回的数据放在data 中
    - 拦截器    interceptors
        axios  request/response
        return res.data
    
    - (在vue中，axios是一个基于promise的HTTP库，主要用于实现AJAX异步通信功能；axios可以在浏览器中发送XMLHttpRequests请求，可以在nodejs中发送http请求，还可以拦截请求和响应、转换请求和响应数据。)



- 骨架屏方案    用户体验优化
    skeleton    vant 提供了这个组件
    <van-skeleton :row="3" :loading="state.loading">
        中间的template部分（插槽）    当loading=true 时，显示出来
    </van-skeleton>   

    此处： 三行  显示与否和state.loading绑定    
      :row    : 表示后面是js运行区域，确保了传过去的row是数值类型



- 图片懒加载(面试必面!)

    性能优化第一等   减少http请求数 ！！！！！！！！

    - html 文件中       link  src  img  script  都会启动新的http 请求
        像公路一样有限制的
        请求并发数 越多， 页面加载越慢
    - 可视区内的图片加载
    - 非可视区的图片延迟加载， 可视区滚动到哪里，加载相应图片
    - vant 内置了Lazyload
        vue directives   指令集    自定义指令 v-lazyload
        （指令的本质： 命令组件或标签做相应的事情）
        更简单直观
    - 内置的图片是 base64 格式的      更小，可以放到css js 文件中， 不需要png那样的额外的文件， 有效地减少了并发数



- vue-router 细节考点
    - 懒加载
    - router-link   激活路由
        会有 .router-link-active 选择器
    - 路由的跳转
        - 全局对象router    可以通过vue-router 中的useRouter() 在组件里随时拿到
            可以对它进行push   go    currentRoute
        - 当前路由
            可以通过 Router.currentRoute() 拿到
            也可以通过vue-router 中的useRoute() 拿到 当前路由对象(route)
            route.params 有各种数据
        - useRoute() 使用一下      hooks函数 编程（所有use开头的函数的称呼）
            vue  vue-router  vuex  ...  都会提供 use 开头的函数，  方便我们的使用， 函数的方式
            它和 composition api 结合的很好
            



















npm init vite 

npm i
npm i vant 
npm i vue-router@next
npm i lib-flexible
npm i stylus