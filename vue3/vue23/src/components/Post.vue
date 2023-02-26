<template>
     <div class="card mt-1">
        <div class="spinner-border p-2 m-2" role="status" v-if="state.loading">
            <span class="visually-hidden">Loading...</span>
        </div>
        <div class="card-body text-start" v-if="!state.loading">
            <h5 class="card-title">
                <a :href="detail.url">{{ props.detail.title }}</a>
            </h5>
            <p class="card-text text-end">
                Score: <b>{{ props.detail.score }}</b>
                <br>
                by: <i>{{ props.detail.by }}</i>
                <br>
            </p>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive, defineProps } from 'vue'

const state = reactive({
    loading: true
})
const props = defineProps({
    detail: Array
})
onMounted(setTimeout(() => {
    state.loading = !state.loading
}, 2000))
</script>