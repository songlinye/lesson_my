- Promise是什么
    Promise是异步编程的一种解决方案，它是一个容器，里面保存着某个未来才会结束的事件的结果。
    它有三种状态，只有异步操作的结果才能决定当前的状态，不受外界因素的影响。




# fetch()

- 如果我们想从 API中获取数据或将数据发布到服务器，必须要用到Fetch API。fetch()为我们提供了一种通过请求和响应发送和接收 HTTP 请求的方法，
    fetch() 函数是一个全局函数，最常用于与 API 交互。

- 我们在使用Fetch API获取 URL的数据时，最基本的用法只需要一个参数(url)。当我们运行 Fetch 时，它会有一个返回值，返回的是promise

    - fetch('www.dev.com')
        .then(res => {      })
    
        res包含一些很有意思的内置函数，如下：

            res.text() ：返回 URL 的文本内容。如果是网站，则返回 HTML。

            res.json() ：返回格式化的 JSON 数据。

            res.blob() : 返回 blob 数据。

            res.arrayBuffer()：返回数组缓冲区数据

            res.formData() ：返回 formData 数据。

- Fetch 的一个常见用途是获取数组的响应。如果想从 JSON 格式的 API 中获取响应，我们可以使用 res.json()。
    例如，以下代码将从 URL 返回一个 JSON 对象，假设 URL 正在发送有效的 JSON：
    let apiResponse = fetch("https://fjolt.com/api")
        .then(res => res.json())
        .then((data) => {    return data; })

- fetch() 实现异步请求

    - 当我们使用 Fetch 时，它会转到我们定义的 URL，收集信息并将响应返回。 这不是即时的，因为加载 URL 并将其取回需要时间。
      如果我们单独运行 Fetch，控制台日志将返回一个 Promise，而不是来自我们想要的 URL 的响应

       - 在fetch() 函数运行时，JavaScript并不会等待响应。如果我们想要访问响应，我们必须明确告诉 JavaScript 需要等待。

            - 等待 fetch() 有两种方法：

                1. 可以在 then 循环中使用 then 并操作 fetch() 的响应。
                    从fetch()调用中访问数据的一种方法是将其链接到Fetch上，从而允许我们从URL访问响应。
                    fetch()的内容可以在then()回调函数内操作，但不能在回调函数外操作。
                        eg.   
                            let apiResponse = fetch("https://fjolt.com/api")
                                .then(res => res.json())
                                .then((data) => {
                                    console.log(data);
                                    return data;
                                })

                2. 可以使用 await，并在使用其内容之前等待 Fetch 返回。
                    如果我们想在 then 函数之外使用 fetch() 的内容，则必须使用 await。
                    如果我们使用 await，可以在函数或代码的任何地方使用它来获取 API 的响应，并在其上使用任何响应函数，例如 text() 或 json()。 例如：
                        eg.
                            async getAPI() {    
                                let apiResponse = await fetch("https://fjolt.com/api");    
                                let response = apiResponse.json();        
                                console.log(response);
                                }
                            getAPI();

        





















- fetch的返回是一个promise

- fetch的使用

    - 基本使用
        fetch('www.dev.com')
        .then(response => response.json())
        .then(data => console.log(data));
    
    - fetch 的基本参数 
        fetch('url',init)       //url 请求的地址 init 对你请求发出的一些基本配置，初始化    
        init就是内容里写 请求的方法，请求的请求头，和请求体的编写。

        - 如
        fetch('www.dev.com',{
            medth:'POST',
            headers:{
            'Content-Type': 'application/json'
            }，
            body:JSON.stringify(data) 
        })
        .then(resp=>resp.json())
        .then(data => console.log(data))