<template>
    <header class="simple-header">
        <i v-if="!noback" class="nbicon nbfanhui" @click="goBack"></i>
        <i v-else>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>
        <div class="simple-header-name">{{ props.name }}</div>
        <i class="nbicon nbmore"></i>
    </header>
    <!-- 占位 -->
    <div class="block"></div>   
</template>


<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
    name: {
        type: String,
        value: ''    // 默认值
    },
    noback: {
        type: Boolean,
        value: false
    }
})

const goBack = () => {
    router.go(-1)
}
</script>


<style lang='stylus' scoped>
@import '../common/style/mixin';

.simple-header
    position fixed
    top 0
    left 0
    z-index 10000
    fj()
    wh(100%, 1.17333rem)
    line-height 1.17333rem
    padding 0 .26667rem
    color #252525
    background #fff
    .simple-header-name
        font-size .37333rem
.block
    height 1.1733rem
</style>