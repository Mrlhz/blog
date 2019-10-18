# Git Commit 日志风格指南

- [Commit message 和 Change log 编写指南](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)
- [Git Commit 日志风格指南](https://open.leancloud.cn/git-commit-message/)
- [Git hooks made easy](https://github.com/typicode/husky)

以下为可用的 `commit` 类型及意义。

类型	| 说明
---|---
feat	    | feature - 所有实现新功能、新行为的 commit 都属这个类型
fix	      | 修正缺陷的 commit
chore	    | 日常维护性的改动，例如 linter 的配置等
test	    | 与测试有关的改动
refactor	| 不改变行为的对代码结构的改进
style	    | 对代码风格的修正（仅限缩进、空行一类的简单改动，对结构有影响的用 refactor）
cosm	    | cosmetic - 不改变行为的对界面的纯视觉上的改动
docs	    | 对文档的改进，包括对外文档和代码注释
build	    | 和构建流程、持续集成等有关的改动


### 创建版本库
```sh
git clone <url>
git init
```

### 分支与标签
```sh
# 查看分支：
git branch

创建分支：git branch <name>

切换分支：git checkout <name>或者git switch <name>

创建+切换分支：git checkout -b <name>或者git switch -c <name>

合并某分支到当前分支：git merge <name>

删除分支：git branch -d <name>
```
