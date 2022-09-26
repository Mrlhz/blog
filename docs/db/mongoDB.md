## MongoDB

- [Download MongoDB Community Server](https://www.mongodb.com/try/download/community)

- [安装和卸载MongoDB（亲测适用win10）](https://zhuanlan.zhihu.com/p/356950184)

- [解决net start MongoDB 报错之服务名无效的问题](https://www.jb51.net/article/202600.htm)
- [window启动MongoDB服务时提示：不能再本地计算机启动MongoDB](https://www.ngui.cc/el/1294293.html?action=onClick)

- [Windows 平台安装 MongoDB | 菜鸟教程](https://www.runoob.com/mongodb/mongodb-window-install.html)
- [七爪源码：查看 MongoDB 6.0 的新增功能 - 哔哩哔哩](https://www.bilibili.com/read/cv18549804/)
- [MongoDB Community Download | MongoDB](https://www.mongodb.com/try/download/community)
- [MongoDB服务启动 net start MongoDB 报错：服务名无效 解决方法](https://blog.csdn.net/myx666/article/details/118810278)

```
mongod --dbpath D:\softwares\mongodb\data\db
```

> 在mongodb安装目录bin路径，以管理员身份打开命令行
```
mongod --logpath "D:\softwares\mongodb\log\mongo.log" --logappend --dbpath "D:\softwares\mongodb\data\db" --directoryperdb --serviceName "MongoDB" --serviceDisplayName "MongoDB" --remove
```

```
mongod --logpath "D:\softwares\mongodb\log\mongo.log" --logappend --dbpath "D:\softwares\mongodb\data\db" --directoryperdb --serviceName "MongoDB" --serviceDisplayName "MongoDB" --install
```

```
net start MongoDB
```
### MongoDB Compass

- [Query Your Data](https://www.mongodb.com/docs/compass/current/query/filter/)
- [MongoDB Compass的基本使用](https://www.jianshu.com/p/a9d0243037d6)
- [MongoDB Compass的安装及使用图文说明（非常详细）](https://blog.csdn.net/sunshineGGB/article/details/122477159)

英文 | 中文
---|---
Documents                            | 文档
Aggregations                         | 聚合
Schema                               | 模式;   架构;   方案;   基模;     图式;
Explain Plan                         | 解释计划
Indexes                              | 索引
Validation                           | 验证


### MongoDB Documentation

- [Introduction to MongoDB](https://www.mongodb.com/docs/manual/introduction/)

英文 | 中文
---|---
MongoDB Documentation                |   MongoDB文档
Back To Develop Applications         |   返回开发应用程序
MongoDB Manual                       |   MongoDB手册
Introduction                         |   介绍
Installation                         |   安装
MongoDB Shell (mongosh)              |   MongoDB Shell（mongosh）
MongoDB CRUD Operations              |   MongoDB CRUD操作
Aggregation Operations               |   聚合操作
Data Models                          |   数据模型
Indexes                              |   索引
Security                             |   安全
Replication                          |   复制
Sharding                             |   分片
Change Streams                       |   更改流
Time Series                          |   时间序列
Transactions                         |   交易
Administration                       |   管理
Storage                              |   存储
Frequently Asked Questions           |   常见问题解答
Reference                            |   参考
Release Notes                        |   发行说明
Technical Support                    |   技术支持
