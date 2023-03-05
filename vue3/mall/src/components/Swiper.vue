<template>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#1baeae">  <!-- autoplay 多久轮播   indicator-color 指标颜色 -->
        <van-swipe-item v-for="(item, index) in list" :key="index">
            <img :src="item.carouselUrl" alt="" />      <!-- src 要绑定 -->
        </van-swipe-item>
    </van-swipe>
</template>


<script setup>
// Vue 渐进式的开发框架
const props = defineProps({
    list: {
        type: Array,
        value: []
    }
})
</script>


<style lang='stylus' scoped>
.my-swipe
    img
        width 100%
        height 100%
</style>