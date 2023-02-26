// 路由的配置页面
import { 
    createRouter,   // 创建路由
    createWebHistory,  // 路由的一种形式    history api  /      优点  新    缺点  兼容性   基本上都支持了       推荐这一种
    createWebHashHistory  // 路由的另一种形式     哈希          优点 兼容性
 } from 'vue-router'

 import Home from '../pages/home.vue'
 import About from '../pages/about.vue'
 import Posts from '../pages/posts.vue'

 // 配置页面和url 的关系
 const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/posts',
        name: 'Posts',
        component: Posts
    }
 ]
// vue-router
 const router = createRouter({
    history: createWebHistory(),    // 路由形式  推荐
    // history: createWebHashHistory(),    // 路由形式
    routes // 配置数组
 })

 export default router