
- [页面自适应相关](#页面自适应相关)
- [首屏优化](#首屏优化)
- [http状态码，缓存](#http状态码，缓存)
- [webpack打包](#webpack打包)
- [宏任务、微任务](#宏任务、微任务)
- [事件循环(eventLoop)](#事件循环(eventLoop))
- [js事件基础](#js事件基础)
- [作用域链、变量提升、闭包](#作用域链、变量提升、闭包)
- [js中的深浅拷贝实现](#js中的深浅拷贝实现)
- [防抖、节流](#防抖、节流)
- [this指向，改变this的方法](#this指向，改变this的方法)
- 面相对象，设计模式
- ES6相关知识
- vue相关知识


### 页面自适应相关

- [媒体查询](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Media_Queries)
- [CSS 弹性盒子布局](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [flex 布局的基本概念](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- [Bootstrap](https://github.com/twbs/bootstrap)
- [Vant](https://github.com/youzan/vant)

### 首屏优化

> 性能应该是基于业务和实际用户体验需求的一种工程实施，不是纯粹的技术游戏。

#### 减少页面体积，提升网络加载

*   静态资源的压缩合并（JS 代码压缩合并、CSS 代码压缩合并、雪碧图）
*   静态资源缓存（资源名称加 MD5 戳）
*   使用 CDN 让资源加载更快

#### 优化页面渲染

*   CSS 放前面，JS 放后面
*   懒加载（图片懒加载、下拉加载更多）
*   减少DOM 查询，对 DOM 查询做缓存
*   减少DOM 操作，多个操作尽量合并在一起执行（`DocumentFragment`）
*   事件节流
*   尽早执行操作（`DOMContentLoaded`）
*   使用 SSR 后端渲染，数据直接输出到 HTML 中，减少浏览器使用 JS 模板渲染页面 HTML 的时间

#### 静态资源的压缩合并

* webpack打包工具

#### 使用 CDN 让资源加载更快
#### 事件节流


1.  建立性能数据收集平台，摸底当前性能数据，通过性能打点，将上述整个页面打开过程消耗时间记录下来
2.  分析耗时较长时间段原因，寻找优化点，确定优化目标
3.  开始优化
4.  通过数据收集平台记录优化效果
5.  不断调整优化点和预期目标，循环2~4步骤

性能优化是个长期的事情，不是一蹴而就的，应该本着先摸底、再分析、后优化的原则逐步来做。

- 工具分析

- 缓存
- 降低请求成本
- 减少请求数
- 减少传输体积

### http状态码，缓存

- [HTTP](https://developer.mozilla.org/zh-CN/docs/Web/HTTP)
- [HTTP 响应状态码](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status)
- [HTTP 缓存](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching)

HTTP 状态码，有 `2xx` `3xx` `4xx` `5xx` 这几种，比较常用的有以下几种：

*   `200` 正常
*   `3xx`
    *   `301` 永久重定向。如`http://xxx.com`这个 GET 请求（最后没有`/`），就会被`301`到`http://xxx.com/`（最后是`/`）
    *   `302` 临时重定向。临时的，不是永久的
    *   `304` 资源找到但是不符合请求条件，不会返回任何主体。如发送 GET 请求时，head 中有`If-Modified-Since: xxx`（要求返回更新时间是`xxx`时间之后的资源），如果此时服务器 端资源未更新，则会返回`304`，即不符合要求
*   `403` Forbidden 客户端没有访问内容的权限；也就是说，它是未经授权的，因此服务器拒绝提供请求的资源。与 401 Unauthorized 不同，服务器知道客户端的身份。
*   `404` 找不到资源
*   `5xx` 服务器端出错了


### webpack打包

#### Webpack 常见名词解释

参数 | 说明
--|--
entry 	| 项目入口
module 	| 开发中每一个文件都可以看做 module，模块不局限于 js，也包含 css、图片等
chunk 	| 代码块，一个 chunk 可以由多个模块组成
loader 	| 模块转化器，模块的处理器，对模块进行转换处理
plugin 	| 扩展插件，插件可以处理 chunk，也可以对最后的打包结果进行处理，可以完成 loader 完不成的任务
bundle 	| 最终打包完成的文件，一般就是和 chunk 一一对应的关系，bundle 就是对 chunk 进行便意压缩打包等处理后的产出

### loader

> loader 用于转换某些类型的模块
> loader 用于对模块的源代码进行转换。loader 可以使你在 import 或 "load(加载)" 模块时预处理文件。因此，loader 类似于其他构建工具中“任务(task)”，并提供了处理前端构建步骤的得力方式。loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript 或将内联图像转换为 data URL。loader 甚至允许你直接在 JavaScript 模块中 import CSS 文件！

### 插件(plugin)

> 插件则可以用于执行范围更广的任务。包括：打包优化，资源管理，注入环境变量。


### 宏任务、微任务

不同的任务源会被分配到不同的 Task 队列中，任务源可以分为 微任务（microtask） 和 宏任务（macrotask）。在 ES6 规范中，microtask 称为 jobs，macrotask 称为 task。

### 事件循环(eventLoop)

- [并发模型与事件循环](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop)
- [Event loops](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops)
- [Node.js 事件循环](https://www.nodejs.red/#/nodejs/translate/everything-you-need-to-know-about-node-js-lnc?id=the-event-loop（事件循环）)

`Event Loop` 执行顺序如下所示：

1. 首先执行同步代码，这属于宏任务
2. 当执行完所有同步代码后，执行栈为空，查询是否有异步代码需要执行
3. 执行所有微任务
4. 当执行完所有微任务后，如有必要会渲染页面
5. 然后开始下一轮 `Event Loop`，执行宏任务中的异步代码，也就是 setTimeout 中的回调函数


微任务包括 `process.nextTick` `，promise` ，`MutationObserver`。

宏任务包括 `script` ， `setTimeout` `，setInterval` `，setImmediate` ，`I/O` ，`UI rendering`。

这里很多人会有个误区，认为微任务快于宏任务，其实是错误的。因为宏任务中包括了 script ，浏览器会先执行一个宏任务，接下来有异步代码的话才会先执行微任务。

### js事件基础

- JavaScript高级程序设计（第3版）
- [EventTarget.addEventListener()](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)
- [DOM 概述](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model/Introduction)

> 事件流描述的是从页面中接收事件的顺序。

- 事件冒泡流
- 事件捕获流

#### 事件代理
通用事件绑定函数，加上事件代理。

```js
function bindEvent(elem, type, selector, fn) {
    // 这样处理，可接收两种调用方式 bindEvent(div1, 'click', 'a', function () {...}) 和 bindEvent(div1, 'click', function () {...}) 这两种
    if (fn == null) {
        fn = selector
        selector = null
    }

    // 绑定事件
    elem.addEventListener(type, function (e) {
        var target
        if (selector) {
            // 有 selector 说明需要做事件代理
            // 获取触发时间的元素，即 e.target
            target = e.target
            // 看是否符合 selector 这个条件
            if (target.matches(selector)) {
                fn.call(target, e)
            }
        } else {
            // 无 selector ，说明不需要事件代理
            fn(e)
        }
    })
}

```

```html
<div id="div1">
    <a href="#">a1</a>
    <a href="#">a2</a>
    <a href="#">a3</a>
    <a href="#">a4</a>
</div>
<button>点击增加一个 a 标签</button>
```
```js
// 使用代理，bindEvent 多一个 'a' 参数
var div1 = document.getElementById('div1')
bindEvent(div1, 'click', 'a', function (e) {
    console.log(this.innerHTML)
})

// 不使用代理
var a = document.getElementById('a1')
bindEvent(div1, 'click', function (e) {
    console.log(a.innerHTML)
})

```

最后，使用代理的优点如下：

*   使代码简洁
*   减少浏览器的内存占用

### 作用域链、变量提升、闭包

- [Scope（作用域）](https://developer.mozilla.org/zh-CN/docs/Glossary/Scope)
- [JavaScript深入之作用域链](https://github.com/mqyqingfeng/Blog/issues/6)
- [var](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/var)
- [Hoisting（变量提升）](https://developer.mozilla.org/zh-CN/docs/Glossary/Hoisting)
- [闭包](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures)
- [](https://github.com/Mrlhz/blog/interview/js/var-hoisting.js)

### js中的深浅拷贝实现

- [JavaScript专题之深浅拷贝](https://github.com/mqyqingfeng/Blog/issues/32)

```js
function deepCopy(obj, cache = new WeakMap()) {
  if (obj == null) return obj
  if (!isObject(obj)) return obj

  if (cache.has(obj)) {
    return cache.get(obj)
  }

  const copy = Array.isArray(obj) ? [] : {}

  cache.set(obj, copy)

  Object.keys(obj).forEach(key => {
    copy[key] = deepCopy(obj[key], cache)
  })
  return copy
}
```

### 防抖、节流

- [JavaScript专题之跟着underscore学防抖](https://github.com/mqyqingfeng/Blog/issues/22)
- [JavaScript专题之跟着underscore学节流](https://github.com/mqyqingfeng/Blog/issues/26)

一些频繁的事件触发，比如：
1. `window` 的 `resize`、`scroll`
2. `mousedown`、`mousemove`
3. `keyup`、`keydown`


#### 防抖

> 防抖的原理就是：你尽管触发事件，但是我一定在事件触发 n 秒后才执行，如果你在一个事件触发的 n 秒内又触发了这个事件，那我就以新的事件的时间为准，n 秒后才执行，总之，就是要等你触发完事件 n 秒内不再触发事件
```js
// 第三版
function debounce(func, wait) {
    var timeout;
    return function () {
        var context = this;
        var args = arguments;

        clearTimeout(timeout)
        timeout = setTimeout(function(){
            func.apply(context, args)
        }, wait);
    }
}
container.onmousemove = debounce(getUserAction, 1000);
```


#### 节流

> 如果你持续触发事件，每隔一段时间，只执行一次事件。
```js
// 第一版
function throttle(func, wait) {
    var context, args;
    var previous = 0;

    return function() {
        var now = +new Date();
        context = this;
        args = arguments;
        if (now - previous > wait) {
            func.apply(context, args);
            previous = now;
        }
    }
}

container.onmousemove = throttle(getUserAction, 1000);
```


### this指向，改变this的方法

- [apply](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
- [call](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
- [JavaScript深入之call和apply的模拟实现](https://github.com/mqyqingfeng/Blog/issues/11)
