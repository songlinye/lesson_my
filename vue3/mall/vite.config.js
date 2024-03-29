import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// vite.config.js   运行环境 node  服务器端
// path 是node 的内置路径模块
import { resolve }  from 'path' 
console.log('vite的配置文件')
// https://vitejs.dev/config/

// node的超级变量   __dirname    项目根目录的物理路径     (C:\Users\ASUS\Desktop\workspace\lesson_my\vue3\mall)
console.log(__dirname, resolve(__dirname, 'src'))
export default defineConfig({
  plugins: [vue()],
  // 路径字符串  resolve?  解析有效的路径， 文件系统是否有这个文件
  // vite 介入路径功能  新的能量
  resolve: {
    // 短路径， 别名， 快捷方式
    alias: {  // 只能在js中引入，不能在css中引入
      '@': resolve(__dirname, 'src'),  // @  ->  src 目录所在的物理绝对位置
      '~': resolve(__dirname, 'src/components')
    }
  }
})