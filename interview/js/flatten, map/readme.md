- js 面试准备思路
    1. 覆盖高频考点
    2. 全面 准确 深度的介绍       （如不能只说一个api）


- 扁平化
    将多层级数组转化为一维数组

    1. 递归思想
    2. API
    3. 业务需求
        多维数组 -> 一维数组


- localStorage   本地存储    html5 重要功能
    - cookie  身份状态  随着http每次发送        更小  < 4KB
        HTTP 无状态协议 Stateless    cookie 弥补这个缺憾
        1. 每次请求响应是独立的
             优点：  快   服务器响应简单
        2. 没有事务记忆能力
            基于请求响应   公平
            登录    购物车  评论    点赞         cookie  字符串  a=1;b=2    domain

        HTTP 头部信息       
        url长度
        域名    同一个域名下的所有请求都会带上cookie    服务器端解析cookie
        对请求的性能有影响
    
    - localStorage  不需要每次http请求都发送
        本地存储  domain
        大小也有限制   大概5MB       用户设置   草稿箱  首页列表

        JSON.stringify()    序列化 (因为localStorage不能太大，所以需要把一些无关的东西去掉)
        JSON.parse()        反序列化


- 扁平化
    js开发中经常需要把一个多维数组一维化，  flatten

    1. 遍历 + Array.isArray递归，   传统解决

    2. reduce 可以优化命令式， 解决更优美
        []默认值，代替了上面的result       pre 放的是已经扁平化的部分数组    cur  通过Array.isArray 判断是否递归

    3. 将数组序列化后（JSON.stringify()）， 得到字符串， 正则替换掉[]
         接着使用split 切割  ，再用map把每一项的类型改成数字类型
        4.  或 最外层加[]   反序列化（JSON.parse()）一下  得到一维数组

    5. es10  Array.flat(Infinity)

    6. 为了兼容性， 不重复造轮子， lodash 库

    7. while + some + ...展开运算符


- reduce  map  some  filter  find           高阶函数（如果函数的参数是函数， 或者返回值是函数）
    - 闭包   高阶函数    返回值是函数
    - map...   参数是函数
    - map   
        es6 数组的api
        基于一个数组， 每一项执行一个函数， 返回值组成一个新的数组 （主要用于数组的变形）
        1. 数组中的每一项都调用一个提供的函数， 返回的结果， 组成新的数组
        2. 全新的函数式编程风格， 更好理解
        3. 原来的数组不会受到影响






