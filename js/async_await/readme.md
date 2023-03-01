# JS执行机制
- JS   为何而生？
    响应用户的交互， 事件， 简单
    JS 有必要设计成为多线程吗？   没有        JAVA C++ 多线程
    线程是程序运行的最小单元
    JS 设计为单线程 
        单线程   优点 够简单    缺点 脆弱
    同步代码尽快运行完， 耗时的任务怎么办？

- JS = 单线程 + Event Loop(机制)
    setTimeout  fetch  eventListener  异步的， 放入Event Loop 里

    同步代码快速运行，同步代码运行完之后， js 进入idle 状态 如有定时器，等3s  再进入单线程运行