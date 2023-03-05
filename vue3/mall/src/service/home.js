import axios from './config.js' // axios 配置文件


// 此处不加 default， 因为是通过解构来引入，表示只引入了其中一个
// 如果引入的时候，没有加花括号(即不是解构)，则表示引入多个， export default 来引入
export function getHomeData() {     
    return axios.get('/index-infos')    // axios 是promise 实例    通过 axios 方式来发送请求
}