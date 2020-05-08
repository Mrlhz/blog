import { initState } from './observe/index'
import { compiler, query } from './helper/util'
import Watcher from './observe/watcher'

function Vue(options) {
  console.log(options)
  this.init(options)
}

Vue.prototype.init = function (options) {
  const vm = this
  vm.$options = options

  initState(vm)

  if (vm.$options.el) {
    vm.$mount()
  }

}

Vue.prototype.update = function () {
  const vm = this
  const el = vm.$el

  // 循环这个元素，将里面的内容替换成数据
  const node = document.createDocumentFragment()
  let firstChild
  while (firstChild = el.firstChild) {
    node.appendChild(firstChild)
  }

  compiler(node, vm)

  el.appendChild(node)
  // 匹配{{}} 进行替换
  // 依赖收集，属性变化，需要重新渲染 watcher和dep
}

// 渲染页面 将组件进行挂载
Vue.prototype.$mount = function () {
  const vm = this
  let el = vm.$options.el

  el = vm.$el = query(el)

  // 渲染时通过 watcher来渲染
  // 渲染watcher 用于渲染的watcher
  // vue2.0 组件级更新 new Vue 产生一个组件

  const updateComponent = () => {
    vm.update()
  }

  new Watcher(vm, updateComponent)
}

// class Vue {
//   constructor(options) {
//     this.options = options

//     this.init(options)
//   }

//   init (options) {
//     console.log(this, 3)
//     const vm = this
//     vm.$options = options
//     initState(vm)
//   }
// }

export default Vue
