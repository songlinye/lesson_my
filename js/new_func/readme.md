- git log              

    由于提交记录过多， 自动进入到 vi 的编辑状态     (git base)
    j 上移
    k 下移
    q 退出
    o 新行
    wq 保存并退出
    i 编辑状态


- 变量提升和暂时性死区

    编译阶段 早于运行阶段
    var      let（不可以在声明前使用，let 声明的变量会进入暂时性死区）     走两条不同的路
    js语言的特点，在代码运行前确立作用域
    所有的变量属于作用域管理的
    js 里面的变量 是有作用域的  VO{ name }
    变量提升  不好的


- this 终极话术
    this 永远指向最后调用它的那个对象



- this 指向谁？         最后由谁调用，就指向谁

    1. 普通函数                     window
    
    2. 普通函数  严格模式           undefined

    3. 对象的方法                   对象

    4. new                         实例

    5. 事件处理函数                 事件发生的对象

- 如何指定this

    6. call  apply   手动指定 this 指向第一个参数           立即运行
        借用方法    除了指定 this 还可以传参
        call  call传递的参数是序列1，2，3，4
        apply apply传递的参数是集合型[1，2，3，4]

    7. bind  返回一个被指定了 this 的函数
        未来被调用时 this 指向那个对象
    
    8. that = this 作用域链     专业的前端

    9. 箭头函数     内部没有 this  找到外层的 this




- git base

    - pwd      查看当前所在位置

    - cd     进入下一级目录

    - cd ..    返回上一级目录

    - dir    查看当前目录下所有的子文件










- English

    global  a. 全球的；全面的；全局的
    scope   n. 范围
    arrow   n.箭，箭头
