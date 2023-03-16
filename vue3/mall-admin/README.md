# vue3 商城管理后台     Admin


- mall 移动商城
    用户用的   移动端
    vant + axios + 全家桶
    PDD  pv  10亿 + uv



- mall admin
    同事用(小编， 运营)
    上架商品
    上架活动
    swiper   幻灯片的内容
    权限
    同事



- 全家桶开发理解



- vite 是如何启动项目的      npm run dev 运行的流程
    1. package.json    script 脚本  
        dev   development   开发阶段      src/
        build   开发完了，  打包上线作准备       dist/

    2. vite  最快的工程化
        index.html 作为首页  在3000端口运行(如果3000端口被占用，则换一个)   http-server

    3. src/main.js 作为单点入口文件
        vite  特别之处，  (在index.js中)script type="module"  js 支持es6 的模块化
        实例化 vue  app
        并把App 组件挂载到 #app 节点上
        
    4. 基于模块依赖， 把代码组织起来


- redirect 细节
    1. locahost: 3000/
        HTTP 请求响应式的
        - index.html 已发送到浏览器并显示
        - App.vue 已挂载
    2. router
        / redirect
        302    /introduce

    header                +           main.content
    导航 nav （App.vue）  +    router-view  （ 页面级别组件）

- 路由守卫
    1. 鉴权
        to  +  token  +  login meta
    2. document.title  +  name  配置的标题       utils config.js
    3. layout  布局状态  login 不需要侧边栏
    4. 用户直接从非 / 进入，  分享点击
        state.currentPath = to.path


- 表单组件
    el-form
    el-form-item
    el-input
    容器组件
    子组件  受控组件 
    - label-position    
    - :rules="state.rules"    在el-form 容器组件中统一设置
        数组  每个input 的输入规则    
    - :model="state.formData" 表单就为收集数据而来
        {
            "username": ,
            "password": 
        }
        el-form-item  prop="username"
            el-input  v-model="state.formData.username"
    - ref="loginForm"
        el-form组件也是对象     这个对象上的方法
        

- vue 登录
    1. 选择哪种登录方案
        cookie(不安全)    jwt    token(主流)
        token(令牌环)    服务器端签发    
        token含有几个东西      有效期  域名限制
        前端在axios接口请求中默认带上请求头  axios.defaults.headers['token'] = getLocal('token') || ''
    
    2. vue-router  app.vue 全局
        路由守卫  GetLocal + require login  -> login

    3. 头像及昵称这些信息？
        - /profile  API     登录  {name: age, avatar:}



- 用户信息 数据 页面显示的各种需求
    1. 当前组件请求， 当前组件显示，  私有状态
        onMounted  async  ->  await  api  axios  ->  state  reactive  ->  bind  自动更新
    2. 共享用户数据 怎么办？
        - pinia   把数据托管一下    数据中央管理
            全家桶老三 pinia   银行    共享数据
        - localStorage


- pinia 的使用流程     财务 更专业的管理共享状态  store
    1. 小型项目没有必要 （几个页面， 接口和请求   就够了）
    2. 全家桶中的数据管理， 难
        - main.js 入口文件  use() 启用createPinia()
        - user.js   用户状态模块        (store下的)  
            const useUserStore = defineStore('user', () => {
                const profile(状态初始值) = {}
                const setProfile(修改状态的方法) = () => {}
                return {
                    状态的初始值，
                    修改这个状态的方法          走正规流程
                }
            })
        - 使用共享状态的地方   
            const userStore = useUserStore();
            读这个状态   userStore.profile
            写这个状态   userStore.profile = { ... }    NO！！
                userStore.setProfile()  ....    YES！！！
















































- 一个ajax请求  按照http协议来分析   分为 请求头 和 请求体
    请求头里面分为两部分，   请求行  请求头(里面有各种的KeyValue, 如这次请求发送的是什么格式的内容，里面有没有token，里面有没有cookie)
    请求行分为三部分，    请求的方法( get / post )   url    HTTP版本号




-  npm i vue-router@next pinia element-plus axios stylus js-md5 lodash 


 

- js-md5单向加密算法