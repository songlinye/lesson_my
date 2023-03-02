# SPA 优质的现代用户体验
1. 不要通过a 标签跳转页面 白一下
    click   event.preventDefallut()

    index.html#page1    index.html#page2    index.html#page3
    在index.html后面加 #...      url的hash部分     不会刷新页面
    不同的url 来匹配不同的资源


2. url 的hash部分改变，请求新的内容
    并且页面不会重新刷新


3. url 分为以下几部分
    js  url 属于 BOM  location对象
    http://127.0.0.1:5500/js/router/hash/index.html?a=5#/page3
    location.protocol            http:
    location.host                127.0.0.1:5500
        location.hostname           127.0.0.1
        location.post               5500
    location.pathname            /js/router/hash/index.html
    location.search              ?a=5         
    location.hash                #/page3      改变时，不会去刷新











## DOM  BOM 
- DOM (Document )，简称文档对象模型。通过创建树来表示文档，描述了处理网页内容的方法和接口。用DOM API可以轻松地删除、添加和替换节点。

- BOM (browser object model)，简称浏览器对象模型。描述了与浏览器进行交互的方法和接口。
    BOM的核心是window，而window对象又具有双重角色，它既是通过js访问浏览器窗口的一个接口，又是一个Global（全局）对象。这意味着在网页中定义的任何对象，变量和函数，都以window作为其global对象。