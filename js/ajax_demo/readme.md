# 同学列表
    - 前后端分离
        table
        后端 ？

        GET HTTP Method
        /student
        返回 json 数据


- npm init -y 项目变成一个后端项目
    npm install（可以简写成 i ） json-server
    package.json  dev: "json-server --watch student.json"
    npm run dev


- http 请求分为 GET 和 POST         FORM 动作
    fetch(url, {
        method: 'POST',                          GET 表示 获取列表          POST 表示 添加新数据
        body: JSON.stringify(student),
        headers: {
            'Content-Type': 'application/json'
        }
    })









package.json 是项目描述文件






storage    n. 存储