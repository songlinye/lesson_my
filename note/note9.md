- rpx
    适用于微信小程序，微信小程序规定所有屏幕的宽度均为750rpx

- pt 绝对单位   1英寸/72                                            在微信小程序开发中一般都用   rpx 和 pt        pt 一般用来设置字体大小

- rem 相对于根元素的fontSize

- em  相对于自身元素的font-size






- BEM           一种前端命名方法论          主要针对CSS            Block    Element    Modifier

    BEM规定是块和元素之间用 - 连接，元素和修饰符之间用 _ 连接


- BFC      Block Formatting Context    块级格式化上下文

        一个BFC区域只包含其子元素，不包括其子元素的子元素。

        如何让元素变成一个BFC区域
            1. display: inline-block
            2. overflow: hidden / auto / scroll
            3. 表格dan单元格  table-cell
        !!  4. 弹性布局 display: flex


- 浮动，绝对定位，固定定位，display:none     会让元素脱离文档流                        




- animation         css 动画
    
    语法： animation: name duration timing-function delay iteration-count direction;                (-webkit-animation:)

        !    animation-name   规定需要绑定到选择器的 keyframe 名称。   
        !    animation-duration   规定完成动画所花费的时间，以秒或毫秒计。
            animation-timing-function    规定动画的速度曲线。
            animation-delay     规定在动画开始之前的延迟。
        !    animation-iteration-count   规定动画应该播放的次数。           数字 n 或 infinite
            animation-direction     规定是否应该轮流反向播放动画。

        @keyframs animation-name {
            0% {}
            40% {}
            100% {}

            或者

            from {}
            to {}
        }




- English 

    infinite    a.极大地；无限的
    frames      n. 框架；支架
    keyframes    n. 关键帧