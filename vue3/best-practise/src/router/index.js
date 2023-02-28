import Home from '../pages/Home.vue'    //  页面级别组件   放在 pages 中              而 components 是页面中的某个组件
// 当页面路由很多时， 升级一下配置方案
// 首页页面加载时， 没有必要去引入并执行所有的页面的
// 当前会， 性能慢
// 路由的懒加载
// import About from '../pages/About.vue'           // 如果在这里引入，在首页就会把所有的页面组件都加载一遍
// import Other from '../pages/Other.vue'

import { 
    createWebHashHistory,   // 前端路由的形式  hash  history api
    // createWebHistory
    createRouter  // spa    路由实例        前端路由对象
} from 'vue-router'

const routes = [
    // 扩展性很好
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // component: About
        component: () => import('../pages/About.vue')
    },
    {
        path: '/other',
        name: 'Other',
        // component: Other
        component: () => import('../pages/Other.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),// 配置前端路由的形式
    routes  // 配置数组
})

export default router       //  向外暴露