
### 参考
- [Yarn 中文文档](https://yarn.bootcss.com/docs/)

- [查看npm, yarn全局安装过的包](#查看npm,yarn全局安装过的包)
- [如何安装本地包](#如何安装本地包)
- [如何更新本地安装的包](#如何更新本地安装的包)
- [如何卸载本地安装的包](#如何卸载本地安装的包)
- [如何安装全局包](#如何安装全局包)
- [如何更新全局安装的包](#如何更新全局安装的包)
- [如何卸载全局安装的包](#如何卸载全局安装的包)
- [如何创建 Node.js 模块](#如何创建Node.js模块)

### 查看npm,yarn全局安装过的包
```
npm list -g --depth 0
yarn global list
```

```
npm uninstall -g nodemon
```

### 如何安装本地包

```
npm install --save-dev nodemon
yarn add nodemon -D
```

# 如何更新本地安装的包

```
yarn:
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]

npm:
在 package.json 文件所在的目录中执行 npm update <package> 命令
npm outdated
```

# 如何卸载本地安装的包

```
如需删除 node_modules 目录下面的包（package），请执行：

npm uninstall <package>:

npm uninstall lodash
如需从 package.json 文件中删除依赖，需要在命令后添加参数 --save:

npm uninstall --save lodash

yarn remove [package]
```

# 如何安装全局包

```
npm install -g nodemon
yarn global add nodemon
```

# 如何更新全局安装的包

```
npm update -g nodemon
```

# 如何卸载全局安装的包

```
npm uninstall -g nodemon
```

### 如何创建Node.js模块

```
npm init
yarn init
```
