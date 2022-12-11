# 滴滴出行小程序模仿项目

- 本项目归滴滴出行所有， 只做学习所用， 请尊重原厂版权

- 界面模仿采用 markman 做标记
 1. 我们没有设计稿， 如何 1:1 还原小程序？
 2. 拍屏得到小程序截图
 3. 使用在线大小[转换工具](https://www.gaitubao.com/)， 将图片改成750
  以后在写项目的时候，直接量像素就可以写进去，因为小程序以750rpx作为设计稿标准大小
  帮我们自动适配，很好用
4. 使用[markman](http://www.getmarkman.com/),先标注，再写样式
  以后呢，上了班就不用了， 有设计师给你标好
  现在， 还是自己来LOL 吧


- 滴滴swiper 多页活动菜单功能
  1. 用户体验 less is more  摆在第一位
    菜单太多， 用户的密集恐惧症， 把重要的放在首页
    其他的可以多放一些
  2. class 类名用 {{}} 占位符 
  swiper bindchange 事件
    event 对象中
      event.detail.current 当前是第几个 swiper-item?
      menu_type
      this.setData()





- indicator-active-color    当前页面指示点颜色
     indicator-color        指示点颜色默认颜色（不包括当前）