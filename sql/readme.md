- sqlserver   mysql   关系型数据库
- mongodb   NOSQL    存储JSON文件    杂乱无章


- blog
    - 用户表
        登录   鉴权 + role 分配
        id(自增)    username(varchar 255)    password(varchar   不能存明文， hash 加盐)
           索引？   Primary KEY (`id`)      查询更快

           1. 密码不能存明文， java/node mvc 用户表单传过来的password 123456
           md5 单向加密的方式  先加密再存到数据库
                数据库被攻击， 解密的话，
                md5(123456) == password

            2. CREATE TABLE  `user` (           语句之间用段落隔开
                field(字段（id、username、password...）的抽象，俗名)   int(11)    AUTO_INCREMENT（可以让id自增）   NOT NULL,
                    varchar(255)
                    longtext    increment
                PRIMARY KEY(`id`),     主键索引
                UNIQUE KEY `名字` (`name`)    唯一索引      除了主索引之外， 其他索引 要取索引的名字
            ) ENGINE = InnoDB AUTO_INCREMENT=26  DEFAULT CHARSET=utf8mb4
               一定要加         从26开始自增        固定格式，默认字符集utf8（可以中文）

                    `userID` int(11) NOT NULL,
                    CONSTRAINT `名字` FOREIGN KEY (`userID`) REFERENCES `user` (`id`)        外键索引

                    KEY `名字` (`userId`)        普通索引


            INSERT INTO `user` (`id`, `name`, `password`) VALUES (‘7’，‘小雪’，‘123456789’),       后面不确定中英文符号
                    在user表中插入一个表单
            


            





            web http 默认服务    

            select * from user where id = 1;  O(1)



- create database blog;     新建blog 项目对应的数据库
    MySQL   工作在3306端口    启动的数据服务
    java/node/go  3000 http服务   sql 请求
 



- 文章列表？   select  索引？   index  查询更快    查询利用上索引
    primary key (`id`)

    文章表   主表
    用户表   附属于

    文章的列表（包含用户信息）

- select post.id, post.title, post.content, user.id as userID, user.name as userName form post LEFT JOIN user ON user.id = post.userId

    联合查询的一种      JOIN
    LEFT JOIN   左边的是主表
    ON  条件    user.id = post.id


- Engish

    engine  n. 发动机；引擎
    constraint   n.限制；约束
    foreign    a.外国的；外交的
    references  v.n. 涉及；查询；参考
    increment   n.增加；增量
    auto    n. 汽车； a. 自动的


    