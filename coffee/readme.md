# 泡一杯咖啡
    1. 把水煮沸
    2. 用沸水冲泡咖啡
    3. 把咖啡倒进杯子
    4. 加糖和牛奶

传统的面向对象
Coffee 类
kpcn instance

- JS 面向对象的实现方式

    1. 对象字面量    表达性强       独一无二
        {
            name: "况兄"
        }

    2. 模板批量生产的
        class + constructor + new 
    
    3. 函数生成


- 类的构建的过程

    1. 定义了一个类      Coffee 模板

    2. 在构造函数（constructor）中，传了 type 属性
        this.type  this 是（绑定到）实例后的对象
        我们要的实例对象构建出来
            （构造函数为了在类的实例化(new)中多给对象一些属性）

    3. 添加一些方法， public 公有方法
        可以通过 实例(对象).方法 来调用       （任何这个类的实例（对象）都可以调用这些公有方法）      cof.boilWater();


- 面向对象的语法总结

    1. class 类的抽象        咖啡和茶抽象了一下    成了父类

    2. extends 继承
        子类就拥有了父类的模板
    
    3. 多个子类  细节略有不同
        重写父类方法...
        super 调用父类的方法





# 随记

- 用 class 声明一个类

- instanceof 用来判断某个对象是不是某个类的实例         
        如  cof instanceof Coffee     返回 ture
            cof instanceof Beverage   也返回 ture   （此处 Beverage 是 cof 的父类，也返回true）（原型链）



# English
boil        v. 煮
beverage    n. 饮料
abstract    n. 摘要；概要  v.分离；提取；写摘要  a. 抽象的
demo        v. 演示
brew        v. 冲泡；酿造；沏（茶）；煮（咖啡）
instance    n. 例子；实例； 
condiment   n. 作料；调味料