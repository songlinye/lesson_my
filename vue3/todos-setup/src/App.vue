<script setup>
//  vue3 setup 机制
// 组件可以降低开发的难度
// 组件可以复用  class 类  大写
import TodoList from './components/TodoList.vue'
// import 后面接是实例，名字随意取, 下面要用的时候可以照搬，也可以把驼峰式的要改小写加-
</script>

<template>
<h1>这是首页</h1>
<TodoList/>
</template>

<style>
</style>
