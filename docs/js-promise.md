# Promises

- [Promises/A+](https://promisesaplus.com/)
- [Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Promise A+中文翻译](https://juejin.im/post/5b6161e6f265da0f8145fb72)
- [Promise原理讲解 && 实现一个Promise对象 (遵循Promise/A+规范)](https://juejin.im/post/5aa7868b6fb9a028dd4de672)
- [100 行代码实现 Promises/A+ 规范](https://mp.weixin.qq.com/s/qdJ0Xd8zTgtetFdlJL3P1g)
- [A simple implementation of Promise /A+ Spec](https://github.com/Lucifier129/promise-aplus-impl)
- [Promise的源码实现（完美符合Promise/A+规范）](https://segmentfault.com/a/1190000018428848)


> JSC引擎的术语：我们把宿主（我们）发起的任务称为宏观任务，把JavaScript引擎发起的任务称为微观任务。
> JavaScript 引擎等待宿主环境分配宏观任务，在 Node 术语中，把这个部分称为事件循环。

### 如何分析异步执行的顺序：

- 首先我们分析有多少个宏任务；
- 在每个宏任务中，分析有多少个微任务；
- 根据调用次序，确定宏任务中的微任务执行次序；
- 根据宏任务的触发规则和调用次序，确定宏任务的执行次序；
- 确定整个顺序。

```js
/**
 * Promise 是一个类 new Promise
 * Promise 含义： 承诺 promise 三个状态 成功，失败，等待 pending, fulfilled, rejected
 * promise中存放两个变量，value和reason
 * promise的实例上会有then方法
 * 当创建一个promise的时候，需要提供一个执行器函数，此函数会立即执行
 * 默认时等待状态，可以转化为成功或失败， 状态更改后不能修改状态 
 */

```