- [node版本管理器 (nvm)](#node版本管理器nvm)
- [查看npm,yarn全局安装过的包](#查看npm,yarn全局安装过的包)
- []()
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

### 查看npm, yarn全局安装过的包

- [npm CLI Commands](https://docs.npmjs.com/cli/v8/commands)

C:\Users\l\AppData\Roaming\nvm

```
npm list -g --depth 0
yarn global list
```

```
npm uninstall -g nodemon
npm uninstall -g npm-check-updates
```

### 如何安装本地包

```
npm install --save-dev nodemon
yarn add nodemon -D
```

### 如何更新本地安装的包

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

yarn global upgrade
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

### node版本管理器nvm

- [nvm](https://github.com/nvm-sh/nvm)


```s
# 以管理员身份运行cmd

If you want to see what versions are installed:
# 查看
$ nvm ls

# 切换node版本
$ nvm use 16.13.0
$ nvm use 16.14.0
nvm use 10.24.1

Now using node v16.13.0 (64-bit)
$ node -v
v16.13.0
$ nvm use 14.18.1
Now using node v14.18.1 (64-bit)
$ node -v
v14.18.1

# 下载安装node
$ nvm install 12
$ nvm install 16.15.0
Now using node v12.22.6 (npm v6.14.5)
$ node -v
v12.22.6

# Uninstalling / Removal
$ nvm uninstall 16.14.0
```
