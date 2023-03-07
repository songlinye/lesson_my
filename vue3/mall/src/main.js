import { createApp } from 'vue'
import App from './App.vue'
import {
    Swipe,
    SwipeItem,
    Skeleton,
    Lazyload,
    ActionBar,
    ActionBarIcon,
    ActionBarButton
} from 'vant'
import 'vant/lib/index.css'
import './assets/main.css'  // reset
import 'lib-flexible/flexible'  // 完成字体的动态设置，  移动端适配就做好了
import router from './router'   // 启用路由
// - 启用全家桶
//     router
//     store

// 按需加载vant 组件

// css reset

// html fontSize? rem    自适应

const app = createApp(App)

app
    .use(Swipe)
    .use(SwipeItem)
    .use(Skeleton)
    .use(Lazyload)
    .use(ActionBar)
    .use(ActionBarIcon)
    .use(ActionBarButton)
    // .use()
    .use(router)  // 当我们在做SPA 时， 路由接管一切     有了路由  才有pages  才有组件                   SPA 单页应用
    

// vue 过滤器
app
    .config
    .globalProperties
    .$filters = {
        prefix(url) {
            if(url && url.startsWith('http')) {
                return url
            } else {
                url = `http://backend-api-01.newbee.ltd${url}`
                return url;
            }
        }
    }

app.mount('#app')
