- CSS Rule
    1. 盒子模型   content + padding + border + margin
    2. 背景颜色调试大法
    3. css 布局方式的一种       定位
        - 离它最近的 position: relative 元素定位
        - 如果没有，就一直往外查找，直到body
    4. block  块级元素  盒子能力  占整个一行  设置宽高  把兄弟元素挤下去
        inline  行内元素  没有盒子能力  自身内容撑起来的  不能设置宽高
        inline-block  既能设置宽高  又不会把兄弟元素挤下去
    5. display: flex;  弹性布局

- 垂直居中
    1. 父子元素
        父元素  relative(不是必须的)
        子元素  absolute
    2. 要不要确定子元素的大小
        transform    rotate | translate | scale
        变基

- 方法？
    - 定位 + margin负值
        相对于父元素    一定要得到大小  （不如transform）
    - 定位 + transform
        相对于自身移动
    - calc    将父元素的一半减去子元素的一半        （calculate的缩写，是计算属性）
        缺点是性能不好
    - 弹性布局
        优点是不用定位
        缺点是太新了，兼容性不好
    




- English

wrap   v. 包;裹；用...包裹
flex   v. 弯曲
justify  v. 证明正当；调整使全行排满；使每行排齐
justify-content 调整内容
align   v. 排列；校准；使整齐
calculate   v. 计算




