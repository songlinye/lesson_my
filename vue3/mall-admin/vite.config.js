import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// es6 模块化
import { resolve } from 'path'
// 文件  路径  属于哪个版块？   OS(操作系统)的io模块
// alias
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 路径别名
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
