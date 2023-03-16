<template>
    <div>
        add
        {{ profile.loginUserName }}  {{ profile.nickName }}
    </div>
</template>


<script setup>
import { computed } from 'vue'
import { useUserStore } from '@/store/user.js'
// 如何从中央取profile状态到页面组件？
const userStore = useUserStore();   //  和 useRouter  hooks  很像
console.log(userStore.profile.loginUserName, '------')

const profile = computed(() => userStore.profile)
console.log(profile)

</script>


<style lang='stylus' scoped>
</style>