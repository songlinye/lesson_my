<template>
  <div>
    <!-- router-link 取代 a  preventDefault ...    vue-router封装   为单页应用， 而a ... 会破坏单页应用       -->
    <router-link to="/">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/posts">Post</router-link>
  </div>

  <!-- 路由对应的组件显示的位置 -->
  <router-view></router-view>
</template>