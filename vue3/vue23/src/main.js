import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'    // 位于 node_modules 目录下的文件不用写相对路径，直接引入

createApp(App).mount('#app')
