#  营销h5页面特效开发
- 招商银行


1.  !DOCTYPE html
        html5 版本的声明

2. rotateX(90deg)   推倒    顺时针                                                      X-Y平面垂直于水平面（相当于屏幕，z轴垂直于屏幕）
    rotateY    龙哥跳钢管舞
    rotateZ    轮胎
    perspctive    视点    眼睛离屏幕的距离    远近    大小              
            往里是   rotateZ的负值      往外是正值
    transform-style: perseve-3d

3. html  怎么看到静态页面 (用户体验   越快越好)
    html(结构) + css(样式)      js晚一点(交互   DOM操作)
    - 下载 html 文档
    - link   script image....
        启动下载 css  href              不会阻塞html下载    放到头部
            script  src           放到最后
            image  src

4. chrome 浏览器的内核         webkit
        id 浏览器        edge
        mozilla
        360  如果本地装了chrome    webkit
            否则 ms

    实验中的属性可能需要 添加 支持
    -webkit-backface-visibility:






js一般放在body的最后面，            //    阻塞性    影响DOM操作
    在head里面时，如果有js，那么js要放在前面（放在css前面）         //   为了适配



# 随记
- CSS3 backface-visibility属性
            backface-visibility 属性定义当元素不面向屏幕（如旋转元素转到后面）时是否可见
                visible: 背面可见
                hidden: 背面不可见
                    为了兼容性，一般要在前面加上前缀        eg.   -webkit-backface-visibility: hidden;


