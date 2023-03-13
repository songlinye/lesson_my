// 路由对象
// 路由类型的设置
// 路由数组的配置
// 路由的懒加载
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {

            path: '/',    // 根路径
            // redirect 在http中是3XX 跳转的状态码    
            // 当 先访问首页的时候，接收到了vue-router的跳转指令，它向浏览器发送 3XX 的http状态码，并且值为/home,浏览器就继续执行下面home的路由配置
            redirect: '/introduce'  // 跳转
        },
        {
            path: '/introduce',
            name: 'introduce',
            component: () => import('@/views/Introduce.vue')
        },
        {
            path: '/add',
            name: 'add',
            meta: {
                login: true
            },
            component: () => import('@/views/Add.vue')
        },
        {
            path: '/login',
            name: 'login',
            meta: {
                login: true
            },
            component: () => import('@/views/Login.vue')
        }
    ]
})


export default router