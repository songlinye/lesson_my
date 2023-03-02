- 你知道css 变量吗？
    - css 4(next)  新功能
    - 复用变量， 全局修改一次， 所有地方相应都改
    - :root  根选择器
    -   --blur  命名风格带 --
    - var(--blur)  使用它
    - js 来修改     document.documentElement.style.setProperty('--blur', '修改值')
            document.documentElement 找到HTML，用来修改全局变量
                如果要修改局部变量，只需要找到相应的元素



- HTML5 考点
    - 语义化    section  footer  header  article  SEO
    - 本地存储  localStorage
    - FORM 的新控件
        使用更丰富的表单控件，通过type的设置，更加方便收集用户信息
        input type="text|number|range"
    - 拖拽能力  html5 



- 消息提醒组件的样式逻辑
    css 变量    好处是可以自身解决 样式逻辑
    1. 消息 = 0     sup 隐藏
    2. 消息 > 0     sup 显示
    3. sup 宽度是变化的
    4. 99+ 怎么做？

- 不依赖js     css 变量独自解决了样式逻辑           好处  性能

- .style.setProperty('var_name', value)
    可以创造更加丰富的界面特效






- font-size 默认为 16px
    1rem 默认等于 根元素字体大小 16px