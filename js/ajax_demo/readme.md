# 同学列表
    - 前后端分离
        table
        后端 ？

        GET HTTP Method
        /student
        返回 json 数据


- npm init -y 项目变成一个后端项目
    npm install（可以简写成 i ） json-server                
    package.json   dev: "json-server --watch student.json"                      package.json 是项目描述文件
    npm run dev


- JSON-Server 是一个 Node 模块，运行 Express 服务器，你可以指定一个 json 文件作为 api 的数据源

 
- http 请求分为 GET 和 POST         FORM表单的动作
    fetch(url, {
        method: 'POST',                          GET 表示 获取列表          POST 表示 添加新数据
        body: JSON.stringify(student),
        headers: {
            'Content-Type': 'application/json'
        }
    })


    当对一个地址发送 get 请求的时候， json-server 认为你想获取资源，他就会把资源发送给你
    当对一个地址发送 post 请求的时候， json-server 认为你想要添加一条数据


JSON 是前后端数据交流的格式


api
localStorage.setItem()
localStorage.getItem()
JSON.stringify()    将某个对象转换成 JSON 字符串形式
JSON.parse()    将JSON数据转换为 JavaScript 对象。







package.json 是项目描述文件






storage    n. 存储