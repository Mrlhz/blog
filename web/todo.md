# Webpack


```
npm i -D webpack-dev-server

```

- [awesome-webpack](https://github.com/webpack-contrib/awesome-webpack#loaders)

- [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server)

### Loader

> Webpack 的 Loader 解析顺序是从右到左（从后到前）的，即：

```js
// query 写法从右到左，使用!隔开
const styles = require('css-loader!less-loader!./src/index.less');
```

#### 文件

loader | description
---|---|---
[raw-loader](https://www.npmjs.com/package/raw-loader) | 加载文件原始内容（utf-8）
[val-loader](https://www.npmjs.com/package/) | 将代码作为模块执行，并将 exports 转为 JS 代码
[url-loader](https://www.npmjs.com/package/) | 像 file loader 一样工作，但如果文件小于限制，可以返回 data URL
[file-loader](https://www.npmjs.com/package/) | 将文件发送到输出文件夹，并返回（相对）URL

#### JSON

loader | description
---|---|---
[json-loader](https://www.npmjs.com/package/) | 加载 JSON 文件（默认包含）
[json5-loader](https://www.npmjs.com/package/) | 加载和转译 JSON 5 文件
[cson-loader](https://www.npmjs.com/package/) | 加载和转译 CSON 文件

#### 转换编译(Transpiling)

loader | description
---|---|---
[script-loader](https://www.npmjs.com/package/) | 在全局上下文中执行一次 JavaScript 文件（如在 script 标签），不需要解析
[babel-loader](https://www.npmjs.com/package/) | 加载 ES2015+ 代码，然后使用 Babel 转译为 ES5
[buble-loader](https://www.npmjs.com/package/) | 使用 Bublé 加载 ES2015+ 代码，并且将代码转译为 ES5
[traceur-loader](https://www.npmjs.com/package/) | 加载 ES2015+ 代码，然后使用 Traceur 转译为 ES5
ts-loader 或 awesome-typescript-loader | 像 JavaScript 一样加载 TypeScript 2.0+
[coffee-loader](https://www.npmjs.com/package/) | 像 JavaScript 一样加载 CoffeeScript

#### 模板(Templating)

loader | description
---|---|---
[html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin) | 在内存中生成html
[html-loader](https://www.npmjs.com/package/) | 导出 HTML 为字符串，需要引用静态资源
[pug-loader](https://www.npmjs.com/package/) | 加载 Pug 模板并返回一个函数
[jade-loader](https://www.npmjs.com/package/) | 加载 Jade 模板并返回一个函数
[markdown-loader](https://www.npmjs.com/package/) | 将 Markdown 转译为 HTML
[react-markdown-loader](https://www.npmjs.com/package/) | 使用 markdown-parse parser(解析器) 将 Markdown 编译为 React 组件
[posthtml-loader](https://www.npmjs.com/package/) | 使用 PostHTML 加载并转换 HTML 文件
[handlebars-loader ](https://www.npmjs.com/package/) |将 Handlebars 转移为 HTML
[markup-inline-loader](https://www.npmjs.com/package/) | 将内联的 SVG/MathML 文件转换为 HTML。在应用于图标字体，或将 CSS 动画应用于 SVG 时非常有用

#### 样式

loader | description
---|---|---
[style-loader](https://www.npmjs.com/package/style-loader) | 将模块的导出作为样式添加到 DOM 中
[css-loader](https://www.npmjs.com/package/css-loader) | 解析 CSS 文件后，使用 import 加载，并且返回 CSS 代码
[less-loader](https://www.npmjs.com/package/less-loader) | 加载和转译 LESS 文件
[sass-loader](https://www.npmjs.com/package/sass-loader) | 加载和转译 SASS/SCSS 文件
[postcss-loader](https://www.npmjs.com/package/postcss-loader) | 使用 PostCSS 加载和转译 CSS/SSS 文件
[stylus-loader](https://www.npmjs.com/package/stylus-loader) | 加载和转译 Stylus 文件

#### 清理和测试(Linting && Testing)

loader | description
---|---|---
[mocha-loader](https://www.npmjs.com/package/) | 使用 mocha 测试（浏览器/NodeJS）
[eslint-loader](https://www.npmjs.com/package/) | PreLoader，使用 ESLint 清理代码
[jshint-loader](https://www.npmjs.com/package/) | PreLoader，使用 JSHint 清理代码
[jscs-loader](https://www.npmjs.com/package/) | PreLoader，使用 JSCS 检查代码样式
[coverjs-loader](https://www.npmjs.com/package/) | PreLoader，使用 CoverJS 确定测试覆盖率

#### 框架(Frameworks)

loader | description
---|---|---
[vue-loader](https://www.npmjs.com/package/) | 加载和转译 Vue 组件
[polymer-loader](https://www.npmjs.com/package/) | 使用选择预处理器(preprocessor)处理，并且 require() 类似一等模块(first-class)的 Web 组件
[angular2-template-loader](https://www.npmjs.com/package/) | 加载和转译 Angular 组件
