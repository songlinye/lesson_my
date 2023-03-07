<template>
    <div class="product-detail">
        <simple-header name="商品详情"></simple-header>
        <div class="detail-content">
            <div class="detail-swipe-wrap">
                <van-swipe class="my-swipe" indicator="#1baeae">
                    <!-- 以后循环的key 尽量不要绑定数组自身的index, 因为一旦涉及增删之类的操作，就得整个数组都要改动 -->
                    <van-swipe-item v-for="(item, index) in state.detail.goodsCarouselList" :key="index">
                        <!-- <img :src="item" alt=""> -->   
                        <img v-lazy="item" alt="">  <!-- 图片懒加载 -->
                    </van-swipe-item>
                </van-swipe>
            </div>
            <div class="product-info">
                <div class="product-title">
                    {{ state.detail.goodsName }}
                </div>
                <div class="product-desc">免邮费 顺丰快递</div>
                <div class="product-price">
                    <span>￥{{ state.detail.sellingPrice }}</span>
                </div>
            </div>
            <div class="product-intro">
                <ul>
                    <li>概述</li>
                    <li>参数</li>
                    <li>安装服务</li>
                    <li>常见问题</li>
                </ul>
                <div class="product-content" v-html="state.detail.goodsDetailContent"></div>
            </div>
        </div>
        <van-action-bar>
            <van-action-bar-icon icon="chat-o" text="客服"></van-action-bar-icon>
            <van-action-bar-icon icon="chat-o" text="购物车" :badge="3"></van-action-bar-icon>
            <van-action-bar-button type="warning" text="加入购物车"></van-action-bar-button>
            <van-action-bar-button type="danger" text="立即购买"></van-action-bar-button>
        </van-action-bar>
    </div>
</template>


<script setup>
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router'  // 没r      useRoute 可以拿到当前的路由
import { getDetail } from '@/service/detail'
import SimpleHeader from '@/components/SimpleHeader.vue'
import { showLoadingToast, closeToast } from 'vant'

// router 是所有(路由)route的集合
const route = useRoute();  // 当前的路由

const state = reactive({
    detail: {},
    loading: true
})


onMounted(async() => {
    // console.log(route);
    const { id } = route.params
    // console.log(id)
    showLoadingToast({
        message: '加载中...',
        forbidClick: true
    })
    const { data } = await getDetail(id)  //异步变同步       不用 async  await ，  则下面得不到数据   因为请求数据是异步，会先执行下面的同步代码
    // console.log(data)
    state.detail = data
    closeToast()
})
</script>


<style lang='stylus' scoped>
@import '../common/style/mixin'
.product-detail
    .detail-content
        height calc(100vh - 1.33333rem)
        overflow hidden
        overflow-y auto
        .detail-swipe-wrap
            .my-swipe
                img
                    width 100%
        .product-info
            padding 0 .26667rem
            .product-title
                font-size 0.48rem
                text-align-last left
                color #333
            .product-desc
                font-size .37333rem
                text-align-last left
                color #999
                padding .13333rem 0
            .product-price
                fj()
                span:nth-child(1)
                    color #f63515
                    font-size .58667rem
                span:nth-child(2)
                    color #999
                    font-size .426667rem
.van-action-bar-button--warning
    background linear-gradient(to right, #6bd9d9, $primary)     // 渐变
.van-action-bar-button--danger
    background linear-gradient(to right, #0dc3c3, #098888) 
</style>    