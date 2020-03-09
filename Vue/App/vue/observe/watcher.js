let id = 0 // 每次产生一个watcher，都要有给一个唯一的标识

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
      id: id++
    })
    
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
    this.getter()
  }
}


export default Watcher
