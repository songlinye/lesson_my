- 内置了很多好用的组件
    方便复用
    swiper> swiper-item 组件

- wxml 里    {{}} 叫做模板
        花括号里面的值会在页面上显示出来

        页面上如果有多个循环片段需要输出的话
        wx:for 指令 slides(这个值随便取)     wx:key 唯一值
        每次遍历时  item

- css 在哪写？
    page/xxx.wxss    业务样式，更具体页面相关
    如果有些通用样式呢？    放到 app.wxss 上

- 模块化   面向对象思想
    - 一个文件一件事

- 事件 bindtap   移动端 tap 事件   
    事件处理函数在 Page({

    }) 声明就可以了
                   （ 移动端tap事件 相当于   PC端的onlick事件 ）

- wx.navigateTo({

})
wx 命名空间   源源不断的微信查克拉能量




- 相对单位 rpx  
  - 小程序独有的单位
  - 可以根据屏幕宽度进行自适应，规定屏幕宽度为750rpx


- import 与 @import 的区别
  - import 在 JS 中去引用 CSS 文件
        import "地址"
  - @import 在 CSS 中去引用 CSS 文件
        @import "地址"






- English