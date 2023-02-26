import { createApp } from 'vue'
import App from './App.vue'
// link  传统引入   
// js 使用import 引入了css          vite 的功劳
// 更加好统一管理  都用import 引入
import 'element-plus/dist/index.css'

// 在main.js 中全局引入 分两步
// 性能问题
import {
    // 按需加载
    ElCard, // 卡片组件
    ElButton    // 组件类
  } from 'element-plus'     // 亚洲啤酒厂

const app = createApp(App)
// ElButton 全局组件引入？
app
  .use(ElButton)    // 组件变成全局组件
  .use(ElCard)
app.mount('#app')
