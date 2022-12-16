# CSS 必考题BFC
    Block Formating Context
        Block 占据一行
    Flex Formating Context              flex   FFC
        row 不会换行
    我们看到的页面  哪些规则决定的呢？
    - 文档流
        正常文档流
        脱离文档流  
            display:none
            position 不为 static
            float
            父元素拿不到子元素的高度
            <!-- 父元素 定死高度 -->
            弹性布局 子元素在一行上显示， float 在一行

- 在正常文档流中
    float 会让元素离开文档流
    父元素不能知晓子元素的大小了
    更严重的问题是？   文档流会出问题，下面的盒子会盖到 float 元素
    一定要让父元素拿到高度
    在正常文档流中， 可以开启新的 BFC       
    html 是最大的BFC， 由浏览器自动创建给予
    - 在BFC 里，父元素高度会将浮动元素参与计算              
        （刚开始用 float 没有用是因为 container父元素 和 box子元素在同一个BFC中，所以计算不了，需要在父元素重新开启一个新的BFCs）
    - 创建BFC 的方法
        - overflow: hidden
        - display: inline-block
        - position: absolute fixed
        - 浮动
        - flex
        - display: table;
    

    - 在同一个 BFC 里， 垂直方向的距离，由 margin 决定
        相邻 margin 会重叠