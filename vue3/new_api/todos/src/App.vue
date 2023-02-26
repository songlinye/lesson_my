<template>
  <div>
    <!-- <h1 @click="add">{{ count }}  ------- {{ state.count }}</h1> -->
    <h1 @click="add" class="red">{{ count }}</h1>
  </div>
</template>
<script setup>
import { ref } from 'vue';
// ref 响应式   接收简单值
let count = ref(1);
console.log(count,'///')
// let state = reactive({  //  reactive  响应式   接收对象
//   count: 1
// })
function add() {
  count.value++
}

</script>
<style>
  .red {
    color: red;
  }
</style>