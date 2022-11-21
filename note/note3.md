
# flex 弹性布局

- 容器的属性

    - flex-direction    决定主轴的方向
        row(默认) | row-reverse | column | column-reverse

    - flex-wrap         是否换行
        nowrap(默认) | wrap | wrap-reverse 

    - flex-flow     是 flex-direction 属性和 flex-wrap 属性的简写形式
        row nowrap(默认)
    
    - justify-content       定义主轴上如何对齐
        flex-start(默认) | flex-end | center | space-between | space-around
    
    - align-items           定义交叉轴上如何对齐
        flex-start | flex-end | center | baseline | stretch(默认)

    - align-content       定义多根轴线的对齐方式，若只有一根轴线，该属性不生效  
        flex-start | flex-end | center | space-between | space-around | stretch(默认)

- 项目的属性

    - order     决定该项目第几个被移到最后，值越大越晚被移到后面
        属性值设整数（正负都行）

    - flex-grow     项目如何分配剩余空间    该项目占 y / x，y 为 flex-gorw 的值，x 为设置了flex-grow属性的项目的个数
        属性值设正整数

    - flex-shrink   定义了项目的缩小比例
        属性值设非负整数（默认为1）
            每个项目都取1，空间不足等比缩小
            一个项目取0，其他取1，空间不足，设0项目不变，设1项目等比缩小
    
 *   - flex-basis    定义了分配多余空间之前，项目占据的主轴空间          
        默认为 auto

 *   - flex          是 flex-grow、flex-shrink 和 flex-basis 三个属性的简写
        默认为  0 1 auto        (后两个属性可选)

    - align-self        允许单个项目和其他项目有不一样的对齐方式
        可覆盖 align-item属性，默认 auto 表示继承父元素的 align-item 属性，若没有父元素，则等同于 stretch
            auto(默认) | flex-start | flex-end | center | baseline | stretch



# 随记

- nextSibling 属性
    该属性表示当前节点的下一个节点（其后的节点与当前节点同属一个级别），如果其后没有节点，则返回null
    语法：   xxx.nextSibling

# English
 
direction   n. 方向；趋势
column      n. 柱；纵队
row         n. 一行；一排
stretch     n. 伸展；拉长；撑大
sibling     n. 兄弟姐妹


