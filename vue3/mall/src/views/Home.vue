<template>
    <div id="home-wrapper">
        <header class="home-header wrap">
            <router-link to="/category">
                <i class="nbicon nbmenu2"></i>
            </router-link>
            <div class="header-search">
                <span class="app-name">新蜂商城</span>
                <i class="nbicon nbSearch"></i>
                <router-link
                    class="search-title"
                    to="/product-list?from=home"
                >
                山河无恙，人间皆安
                </router-link>
            </div>
            <router-link class="login" to="/login">登录</router-link>
        </header>
    </div>
</template>
<script setup>

</script>
<style lang="stylus" scoped>
// @import 引入一个模块， 为css 提供模块化
@import '../common/style/mixin' 
// 可以一次性设置width height 的mixin 混合
// stylus 提供了tab 缩进   为css 提供了模块化的能力
.home-header
    position absolute
    top 0
    left 0
    line-height 1.33333rem
    padding 0 .4rem
    font-style .4rem
    color #fff
    z-index 10000
    wh(100%, 1.33333rem)
    fj()
    .nbmenu2
        color $primary
    .header-search
        display flex
        width 74%
        box-sizing content-box   
        // 标准盒模型  设置宽高时 指的是内容，   要加上padding和border， 才是盒子的大小
        // box-sizing: border-box   IE盒模型    宽高就是盒子大小
        height 0.53333rem
        line-height 00.53333rem
        margin 0.26667rem 0
        padding 0.1333rem 0
        color #232326
        border-radius 0.53333rem
        background rgba(255, 255, 255, .7)
        .app-name
            padding 0 0.26667rem
            color $primary
            font-size 00.53333rem
            font-weight bold
            border-right .026667rem solid #666
        .icon-search    // ???
            padding 0 .26667rem
            font-size .45333rem
        .search-title
            font-size .32rem
            color #666
            line-height 0.56rem
    .login
        color $primary
        line-height 1.38667rem
</style>