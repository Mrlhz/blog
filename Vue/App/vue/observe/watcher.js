let id = 0 // 每次产生一个watcher，都要有给一个唯一的标识

import { pushTarget, popTarget } from './dep'

class Watcher {
  /**
   * @description Creates an instance of Watcher.
   * @param {*} vm 当前组件的实例
   * @param {*} exprOrFn 用户传达的表达式 || 函数
   * @param {*} [cb=() => {}] 用户传入的回调函数 vm.$watch('msg', cb)
   * @param {*} [options={}] 其他参数
   * @memberof Watcher
   */
  constructor(vm, exprOrFn, cb = () => {}, options = {}) {
    Object.assign(this, {
      vm,
      exprOrFn,
      cb,
      options,
      id: id++,
      deps: []
    })

    this.depsId = new Set()
      
    
    if (typeof exprOrFn === 'function') {
      this.getter = exprOrFn
    }

    this.get()
    
    // this.vm = vm
    // this.exprOrFn = exprOrFn
    // this.cb = cb
    // this.options = options
    // this.id = id++
  }

  get () {
    pushTarget(this) // 渲染watcher Dep.target = watcher msg变化了，需要让这个watcher重新执行

    this.getter()

    popTarget()
  }

  addDep(dep) {
    const id = dep.id
    if (!this.depsId.has(id)) {
      this.depsId.add(id)
      this.depsId.push(dep)
      dep.addSub(this) // this Watcher 当前实例
    }
  }

  update() {
    this.get()
  }

}


export default Watcher
