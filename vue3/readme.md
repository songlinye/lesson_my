# Vue的世界

    -   vue 是一个现代前端MVVM设计模式的开发框架
          template       view 视图层   简写v      组件化
          data         model  模型层   简写m          数据驱动
         什么叫做vue的组件   可以把  v层和m层结合， 生成  html字符串    这种开发模式叫做vm   vm就是把数据和模板自动关联起来   vm
         

    可以从小程序迁移过来
    - 组件思想  components
        wxml + wxss + js 可复用的组件
        页面由组件构成， 比标签高一个级别
    - 数据驱动思想  不需要找DOM节点， setData() 自动更新 ？
    - wx:for 指令   v-for
    - 路由
        /pages + app.json tabbar 目录下就是路由
        wx.navigator({
            url: ''
        })
        vue ? vue-router

- 现代web App单页应用   SPA Single Page Application   10年  6年
    vue   https://unpkg.com/vue@next  
    - 根节点 启动我们的Web App

- Vue 
    1. 现代当红的前端框架   好学， 简单
    2. 组件化， 数据驱动   思想
    3. Vue 是（独立的）命名空间
        Vue.
    4. Vue.version  vue 最新版 vue3
    5. 对照小程序， 迁移学习
        - template  wxml
            模板 {{}} 组件  指令 ....
        - js    data() {

        }

- v-on:click    @click  代替                               v-on 事件监听指令
    this.content = ''      this.$data.content=''  代替              this  直接使用 data 里的数据
    vue ?    比 react 更友好，方便入门，学习成本低
    API 设计人性化
    


- Vue 底层源码
    1. data {}  如何被监听，  重新编译模板？    Proxy  es6
    2. Vue 世界为什么要杜绝 DOM编程  #app ?
        DOM 编程慢....


- 占位符与数据绑定的区别
    普通的html 里输出的占位符   {{}}
    标签属性 或 组件的props 里     数据绑定
    - v-bind:value  绑定值  :value   v-bind省略   单向数据绑定
        v-on:input  绑定事件    v-on  简写为 @
    - 单向数据？
        v-bind:value   +   v-on:input    复杂  出现在   表单元素中
    - 双向数据绑定
        v-model  = v-bind:value  +  v-on:input
        api 更友好


- 生命周期    MVVM
    Model   View

    - create 创建阶段     在内存中
        创建之前会先监听事件和生命周期钩子函数                         beforeCreate
        数据的绑定(   {{}}  )和响应式( get  set  defineProperty )                          created

    - mount 阶段     从内存中 去到页面真实DOM上
        template 编译成 dom string     （模板的编译）                         beforeMount
        dom string -> app.mount('#app')     （挂载过程中执行渲染，执行DOM树的构建）                               mounted

    - 组件不是静态  (如5.html中的counter)
        事件
        数据请求
        this.$data.counter
        this.counter                                        beforeUpdate        生成了  new dom string

        new dom string  ->  DOM 显示                            updated


    - unmount
        命令 卸载   beforeUnmount
        unmounted 已经卸载， DOM removeChild



- vue 数据模型   ( model层 )
    data  私有数据
    props  传参
    computed  计算属性


- 父子组件间的生命周期
    局部和整体的概念来处理






# English 

template  n. 样板;模板;
version   n. 版本
attribute   n. 属性;特征;性质;定语
component   n. 组件;组成部分
enumerable  a. 可枚举的
freeze    v.n. 冻结
observe  v. 监听
observer  n. 观察者
react   v. 反应
reactive  a.反应的，响应的
init     初始化
cycle    n. 周期
compile    v. 编译













npm init vite
命名
vue
JS

找到相应项目录重新打开集成终端
npm i     // 安装依赖
npm run dev     
网址
npm run build  打包 生成 dist文件夹


       vue                     npm i
        vue-router              npm i vue-router@next         
        vuex                    npm install vuex --save
        element3                npm i element3












在服务器端   由node 生产

全部运行在 node环境

是后端环境，不能像前端环境一样直接 open with live server
npm init vite    安装vite包     在package.json 可以看到vite的版本号
npm run dev    让脚本run起来  就会去运行vite

vite 这个工程化套件运行起来之后， 首先找到 根目录下的vite.config.js（该文件对vite进行配置），看看有什么需要做的
如果没有配置，vite.config.js则会让其进行默认行为，默认找到根目录下的index.html作为首页，在index.html中，把入口文件（main.js）加载运行
  src下的main.js作为入口文件，在里面new了vue, 并且挂载到index.html中的app这个根节点上， 然后把各个文件（如router,views等）进行依赖、编译
如果有配置，则会走配置
等把所有东西编译到一起，生成了最终js之后， vite.config.js就会把 最终js 换一个运行环境，换到前端   所以就看到了整个页面



npm run build   打包
  生成了dist文件夹，在里面的index.html 中就可以直接 open with live Server,看到前端页面