# 在 Webpack 中使用 Babel


> Tips：[AST Explorer](https://astexplorer.net/) 可以在线解析 JavaScript 代码的 AST 结构，还可以在线编写转换函数，学习 AST 的好帮手。

```shell
# 安装开发依赖
npm i webpack babel-loader webpack-cli @babel/core @babel/preset-env @babel/plugin-transform-runtime -D
# 将 runtime 作为依赖
npm i @babel/runtime -S

yarn add webpack babel-loader webpack-cli @babel/core @babel/preset-env @babel/plugin-transform-runtime --dev

yarn add @babel/runtime
```

---

> 下面的webpack.config.js文件直接将 Babel 的配置写到了options中，还可以在项目根目录下创建.babelrc或者使用package.json的 babel 字段。

```js
module.exports = {
  entry: './babel.js',
  mode: 'development',
  devtool: false,
  module: {
    rules: [{
      test: /\.js$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                useBuiltIns: 'usage'
              }
            ]
          ]
        }
      }]
    }]
  }
};
```


> @babel/preset-env是 Babel 官方推出的插件预设，它可以根据开发者的配置按需加载对应的插件，通过@babel/preset-env我们可以根据代码执行平台环境和具体浏览器的版本来产出对应的 JavaScript 代码，例如可以设置代码执行在 Node.js 8.9 或者 iOS 12 版本。








###备注

命令 | 简写 | 说明
---|---|---
npm install  | npm i
--save  | -S |  项目（运行时、发布到生产环境时）依赖
--save-dev  |  -D | 工程构建（开发时、“打包”时）依赖


```shell
window   => cmd ：set NODE_ENV=production && xxxx

mac      => shell  : NODE_ENV=production 空格 xxxx
```

