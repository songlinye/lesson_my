import axios from './config.js'   // 引入 axios 标准

export function getDetail(id) {
    return axios.get(`/goods/detail/${id}`)    // axios.get 返回的是 promise
}