<template>
    <div class="product-detail">
        <simple-header name="商品详情"></simple-header>
    </div>
</template>


<script setup>
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router'  // 没r      useRoute 可以拿到当前的路由
import { getDetail } from '@/service/detail'
import SimpleHeader from '@/components/SimpleHeader.vue'

// router 是所有(路由)route的集合
const route = useRoute();  // 当前的路由

const state = reactive({
    detail: {}
})


onMounted(async() => {
    // console.log(route);
    const { id } = route.params
    // console.log(id)
    const { data } = await getDetail(id)  //异步变同步       不用 async  await ，  则下面得不到数据   因为请求数据是异步，会先执行下面的同步代码
    // console.log(data)
    state.detail = data
})
</script>


<style lang='stylus' scoped>
</style>