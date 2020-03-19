

- Vue 组件 data 为什么必须是函数 ?
> 因为组件是可以复用的,JS 里对象是引用关系,如果组件 data 是一个对象,那么子组件中的 data 属性值会互相污染,产生副作用。所以一个组件的 data 选项必须是一个函数,因此每个实例可以维护一份被返回对象的独立的拷贝。new Vue 的实例是不会被复用的,因此不存在以上问题。

- 谈一谈 nextTick 的原理
- 说说 Vue 的渲染过程
- Vue 响应式原理
- 谈谈 Vue 事件机制,手写$on,$off,$emit,$once


- 请说一下相应数据的原理

1. `Object.defineProperty`
2. 


- [【面试题解析】从 Vue 源码分析 key 的作用](https://juejin.im/post/5e6e2348f265da57424ba664)
> key 主要是应用在 Diff 算法中，作用是为了更快速定位出相同的新旧节点，尽量减少 DOM 的创建和销毁的操作


- computed 与 watch

> 默认的computed也是一个watcher是具备缓存的，只有当依赖的属性发生变化时才会更新视图
> 计算属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算
> 与computed的区别是，watch更加适用于监听某一个值的变化并做对应的操作，比如请求后台接口等，而computed适用于计算已有的值并返回结果
> 不要在computed和watch中修改被依赖(或者被监听)的值，这样可能会导致无限循环


- ajax请求一般情况放在mounted中，此时dom已经渲染，因为生命周期是同步执行的，ajax是异步执行的
> 服务端渲染不支持mounted方法，所以在服务端渲染的情况下统一放到created中