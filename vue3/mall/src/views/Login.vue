<template>
    <div>
        <simple-header :name="state.type==='login'?'登录':'注册'" ></simple-header>   
        <!-- <img src="https://s.yezgea02.com/1604045825972/newbee-mall-vue3-app-logo.png" alt="" class="log"> -->
        <div class="login-body login" v-if="state.type==='login'">
            <van-form @submit="onSubmit">
                <van-field
                    v-model="state.username"
                    name="username"
                    label="用户名"
                    placeholder="请输入用户名"
                    :rules="[{required: true, message:'请输入用户名'}]"
                >

                </van-field>
                <van-field
                    v-model="state.password"
                    type="password"
                    name="password"
                    label="密码"
                    placeholder="请输入密码"
                    :rules="[{required: true, message:'请输入密码'}]" 
                > <!-- rules是数组的原因，如果需要加多种功能，继续加对象 -->
                </van-field>
                <van-field
                    center
                    clearable
                    label="验证码"
                    placeholder="输入验证码"
                    v-model="state.verify"
                >
                    <template #button>      <!-- #button  找到表单的最右边部分 -->
                        <vue-img-verify ref="verifyRef" />  <!-- 2. 将ref 放到要标注的组件上 -->
                    </template>
                </van-field>
                <div style="margin:16px">
                    <div class="link-registr">立即注册</div>
                    <van-button round block native-type="submit" color="#1baeae">登录</van-button>   <!-- native-type="submit" 提交按钮 -->
                </div>
            </van-form>
        </div>
        <div class="login-body register" v-else></div>
    </div>
</template>


<script setup>
import { reactive, ref, onMounted } from 'vue'       // ref接收简单值
import SimpleHeader from '@/components/SimpleHeader.vue'
import vueImgVerify from '@/components/VueImageVerify.vue'
import { showFailToast } from 'vant'
import md5 from 'js-md5'

// ref 标注组件或DOM节点     vue 查找 组件或者DOM 的方式   不能用DOM
const verifyRef = ref(null) // 1. 声明一个ref 对象  初始值为null


const state = reactive({
    type: 'login',
    username: '',
    password: '',
    verify: ''
})

const onSubmit = async(values) => {
    // console.log(verifyRef.value,'////')
    // console.log('-------',values)
    state.imgCode = verifyRef.value.state.imgCode || ''
    if(state.verify.toLowerCase() != state.imgCode.toLowerCase()) {
        showFailToast('验证码有误')
        return
    }
    if(state.type == 'login') {
        console.log(md5(values.password, '////'))
        // const { data } = await login({
        //     "loginName": values.username,
        //     // 密码不能明文传输
        //     "possword": values.password  // 错的
        // })
    }
}

onMounted(() => {
    console.log(verifyRef.value.state.imgCode, '???')
})
</script>


<style lang='stylus' scoped>
</style>