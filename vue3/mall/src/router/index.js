// 路由对象
// 路由类型的设置
// 路由数组的配置
// 路由的懒加载
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue' // 页面级别组件    路径 ../  相对路径

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {

            path: '/',    // 根路径
            // redirect 在http中是3XX 跳转的状态码    
            // 当 先访问首页的时候，接收到了vue-router的跳转指令，它向浏览器发送 3XX 的http状态码，并且值为/home,浏览器就继续执行下面home的路由配置
            redirect: '/home'  // 跳转
        },
        {
            path: '/home',
            name: 'home',
            meta: {
                index: 1
            },
            component: Home
        },
        {
            path: '/category',
            name: 'category',
            meta: {
                index: 1
            },
            component: () => import('@/views/Category.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/Login.vue')
        },
        {
            path: '/cart',
            name: 'cart',
            meta: {
                index: 1
            },
            component: () => import('@/views/Cart.vue')
        },
        {
            path: '/user',
            name: 'user',
            component: () => import('@/views/User.vue')
        },
        {
            // 动态路由   url  params   ?id= queryString
            path: '/detail/:id',                            // 如果少了:  如/detail/id 则是静态路由，只是二级路由，而不是动态的，
            name: 'detail',
            meta: {
                index: 3
            },
            component: () => import('@/views/Detail.vue')
        },
        {
            path: '/product-list',
            name: 'product-list',
            meta: {
                index: 2
            },
            component: () => import('@/views/ProductList.vue')
        }
    ]
})


export default router