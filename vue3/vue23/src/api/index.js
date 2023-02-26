//  职责是数据接口
import axios from 'axios'   // 哇塞的ajax 库       支持thenable，且兼容性好
// xhr 缺点： 不支持thenable   只支持回调函数          优点： 兼容性好
// fetch 优点： 支持thenable       缺点： 兼容性差

const instance = axios.create({
    baseURL: 'https://hacker-news.firebaseio.com/v0/'
})

function getTopStories() {
    // console.log('getTopStories')
    // promise 实例
    return instance.get('topstories.json?print=pretty')
}

function fetchItem(id) {
    return instance.get(`item/${id}.json?print=pretty`)
}

const API = {
    getTopStories: getTopStories,
    fetchItem: fetchItem
}

export default API