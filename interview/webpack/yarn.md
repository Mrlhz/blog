# Yarn

- [yarn](https://www.yarnpkg.com/zh-Hans/docs/usage)

### 初始化新项目

```
yarn init
```
### 添加依赖包

```
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
```

### 将依赖项添加到不同依赖项类别

分别添加到 devDependencies、peerDependencies 和 optionalDependencies：

```
yarn add [package] --dev
yarn add [package] --peer
yarn add [package] --optional
```

### 升级依赖包

```
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]
```

### 移除依赖包

```
yarn remove [package]
```

###  安装项目的全部依赖

```
yarn
```

### 或者

```
yarn install
```


###

```sh
# 查看当前设置的镜像源地址
yarn config get registry

# https://registry.yarnpkg.com

# 改成 taobao 的源
yarn config set registry 'https://registry.npm.taobao.org'

# 
yarn add --registry=https://registry.npm.taobao.org node-sass sass-loader
```


### npmrc

> .npmrc file 临时使用淘宝源 解决node-sass安装失败问题
```sh
# https://www.npmjs.cn/files/npmrc/
# phantomjs_cdnurl=http://cnpmjs.org/downloads
# https://blog.csdn.net/wk964269669/article/details/72845651

phantomjs_cdnurl=http://cnpmjs.org/downloads
sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
registry=https://registry.npm.taobao.org
```


### todo

```sh
npm 切换到淘宝源
地址
默认的npm下载地址：http://www.npmjs.org/
淘宝npm镜像的地址：https://npm.taobao.org/

临时使用淘宝源
npm --registry https://registry.npm.taobao.org install node-red-contrib-composer@latest

全局配置切换到淘宝源
npm config set registry https://registry.npm.taobao.org

全局配置切换到官方源
npm config set registry http://www.npmjs.org

检测是否切换到了淘宝源
npm info underscore
```