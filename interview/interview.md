
- 页面自适应相关
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


### 首屏优化

> 性能应该是基于业务和实际用户体验需求的一种工程实施，不是纯粹的技术游戏。

- 工具分析

- 缓存
- 降低请求成本
- 减少请求数
- 减少传输体积

### http状态码，缓存

- [HTTP](https://developer.mozilla.org/zh-CN/docs/Web/HTTP)
- [HTTP 响应状态码](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status)
- [HTTP 缓存](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching)

### 宏任务、微任务

不同的任务源会被分配到不同的 Task 队列中，任务源可以分为 微任务（microtask） 和 宏任务（macrotask）。在 ES6 规范中，microtask 称为 jobs，macrotask 称为 task。

### 事件循环(eventLoop)

- [并发模型与事件循环](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop)
- [Event loops](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops)

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

- [EventTarget.addEventListener()](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)
- [DOM 概述](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model/Introduction)

### 作用域链、变量提升、闭包

- [Scope（作用域）](https://developer.mozilla.org/zh-CN/docs/Glossary/Scope)
- [JavaScript深入之作用域链](https://github.com/mqyqingfeng/Blog/issues/6)
- [var](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/var)
- [Hoisting（变量提升）](https://developer.mozilla.org/zh-CN/docs/Glossary/Hoisting)
- [闭包](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures)
- [](https://github.com/Mrlhz/blog/interview/js/var-hoisting.js)

### js中的深浅拷贝实现

- [JavaScript专题之深浅拷贝](https://github.com/mqyqingfeng/Blog/issues/32)

### 防抖、节流

- [JavaScript专题之跟着underscore学防抖](https://github.com/mqyqingfeng/Blog/issues/22)
- [JavaScript专题之跟着underscore学节流](https://github.com/mqyqingfeng/Blog/issues/26)

### this指向，改变this的方法

- [apply](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
- [call](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
- [JavaScript深入之call和apply的模拟实现](https://github.com/mqyqingfeng/Blog/issues/11)
