<script setup>
import { reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router' // hooks 
import { useUserStore } from '@/store/user.js'

const { isLogin } = useUserStore()
console.log(isLogin, '//////////')
const router = useRouter()
// 路由跳转前 做件事
// 路由守卫  （像生命周期）
router.beforeEach((to, from, next) => {  //  from 当前页面信息    to 将要跳转的页面信息
  // console.log(from, to, '////')
  if (to.meta.isLogin) { // 需要登录权限才能访问
    next('/login')
  } else {
    next()
  }
  if(to.meta.index > from.meta.index) {
    // 从主页面 去子页面
    state.transitionName = 'slide-left'
  } else if(to.meta.index < from.meta.index) {
    // 子页面回到主页面
    state.transitionName = 'slide-right'
  } else {
    // 平级
    state.transitionName=''
  }
})

const state = reactive({
  transitionName: 'slide-left'
})

onMounted(() => {
  // updateLogin()
})
</script>

<template>
  <!-- <transition :name="state.transitionName">
    <router-view class="router-view"/>
  </transition> -->
  <router-view v-slot="{Component}">
    <transition :name="state.transitionName">
      <component :is="Component" />
    </transition>
  </router-view>
</template>


<style>
.slide-left-enter-active, 
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active
{
  height: 100%;
  /* 提前告知浏览器，即将会有transform 渐变   性能优化 */
  /* 当有3d效果时，确保背面是隐藏的，只能看到一面 */
  will-change: transform;
  transition: all 500ms;
  position: absolute;
  backface-visibility: hidden; 
}
.slide-right-enter-from {
  opacity:0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
};
.slide-left-enter-from {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active{
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>