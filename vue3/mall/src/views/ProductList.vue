<template>
    <div>
        
    </div>
</template>


<script setup>
import { onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const route = useRoute()

onMounted(() => {
    // console.log(route)   // Proxy 只是当前路由对象的一个访问代理
    const { from } = route.query   // 通过 Proxy 这个代理对象去访问当前路由对象的query对象， 故可以直接拿到
    // console.log(from, '///')
})

</script>


<style lang='stylus' scoped>
</style>