<template>
    <div class="navbar">
        <ul class="nav-list">
            <router-link class="nav-list-item" to="home">
                <i class="nbicon nblvsefenkaicankaoxianban-1"></i>
                <span>首页</span>
            </router-link>
            <router-link class="nav-list-item" to="category">
                <i class="nbicon nbfenlei"></i>
                <span>分类</span>
            </router-link>
            <router-link class="nav-list-item" to="cart">
                <i class="nbicon nbgouwuche"></i>
                <span>购物车</span>
            </router-link>
            <router-link class="nav-list-item" to="user">
                <i class="nbicon nblvsefenkaicankaoxianban-"></i>
                <span>我的</span>
            </router-link>
        </ul>
    </div>
</template>


<script setup>
// 把store 里的count 拿到这里来
import { onMounted } from 'vue'
import { useCartStore } from '@/store/cart.js'

const cart = useCartStore();
console.log(cart.count);
const { updateCount } = cart;

onMounted(() => {
    updateCount()
})

</script>


<style lang='stylus' scoped>
@import '../common/style/mixin.styl'
.navbar
    position fixed
    left 0
    bottom 0
    width 100%
    padding .13333rem 0     // 根元素font-size
    z-index 1000
    background-color #fff
    transform translateZ(0)
    -webkit-transform translateZ(0)
    .nav-list
        width 100%
        fj()
        padding 0
        .nav-list-item
            display flex
            flex 1
            flex-direction column
            text-align center
            color #666
            i
                text-align center
                font-size .58667rem
            span
                font-size .32rem
            &.router-link-active      // 点击router-link时, router-link 会自动加上router-link-active 类选择器
            // 直接用缩进， 可能会造成误解，认为这两个是兄弟元素上的选择器，而不是一个元素上的选择器
            // & 表示引用上一级选择器            
                color $primary
</style>