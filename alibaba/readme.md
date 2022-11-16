# 阿里巴巴双 1 1 界面开发

- 设计稿件
    750px  像素   一种尺寸   移动页面               （高清屏，两个发光点，375pt接受750px图片）
    iphone 的小尺寸375pt retina 屏幕   设计的标准

- 前端使命
    html + css + js    一像素不差地还原设计稿
    - 交互
    - css 实现视觉效果  css动画
    - 设计稿是静态的， 我们要做动态的
    - 兼容性     阿里 兼容性达到恐怖的99.99%

- css reset 
    1. 抹平不同浏览器的预设样式， 从0出发， 在所有浏览器上表现一致
    2. 利用 css inherit 继承   在 body 里面预设 font-size, font-family ...
        浏览器默认字体大小为16px

- rem 单位
    1. 在移动端， 为了兼容  少用甚至不用px
    2. 先给html标签设置 font-size
         37.5px 固定？
         等比例 1/10  去做栅格系统   布局
         如何在不同的设备上，让1rem = 设备宽度/10
    3. html 的 font-size 要动态设置
        window.innerWidth 拿到设备宽度
        document.documentElement.style.fontSize = + "px"



# 随记

-  rem单位
        指相对于根元素的字体大小的单位


## English
    
    responsive   a. 反应敏捷的
    
