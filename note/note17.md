# 什么是节流
    如果短时间内大量触发同一事件，那么在函数执行一次之后，该函数在指定的时间期限内不再工作，直到过了这段时间才重新生效。
    
- 如 Vue商城项目mall 
    - 在nextTick 方法中监听scroll 事件    在nextTick 中
        - window.addEventListener('scroll',() => { 执行代码})
            这种没用节流，滑动时事件大量触发
            这里不仅要做事件监听，还要做状态的设置，状态设置完还要对DOM进行更新

        - 故需要用到节流
            在Vue中
            1. npm i lodash   安装
            2. import _ from 'lodash'  引入
            3. 将执行代码包裹进一个函数
                const setHeaderScroll = () => { 执行代码 }
            4. window.addEventListener('scroll', _.throttle(setHeaderScroll, 100))   0.1 秒内最多执行一次
        