/**
 * 深拷贝
 * 
 */

{
  function copy(value, hash = new WeakMap()) {
    if (value == null) return value
    if (value instanceof RegExp) return new RegExp(value)
    if (value instanceof Date) return new Date(value)
    // 函数不需要拷贝
    if (typeof value !== 'object') return value
  
    if (hash.has(value)) return hash.get(value)
    // 其他情况 对象 数组
    let instance = new value.constructor
    hash.set(value, instance)
    for (const key in value) {
      if (value.hasOwnProperty(key)) {
        instance[key] = copy(value[key], hash)
      }
    }
    // console.log(instance)
    return instance
  }

  // test
  let obj = {
    a: {
      a: {
        a: 1,
        fn: function () {console.log(666)},
        b: undefined,
        reg: /\d+/
      }
    }
  }

  // obj.a = obj // Circular

  let copy1 = JSON.parse(JSON.stringify(obj))
  console.log(copy1) // { a: { a: { a: 1, reg: {} } } }

  let copy2 = copy(obj)
  console.log(copy2)
  copy2.a.a.fn()
}

{
  /**
   * @see https://mp.weixin.qq.com/s/M7KBX3w2KqlWhZFHJSYP6Q
   */
  const MY_IMMER = Symbol('my-immer1')

  function isPlainObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]'
  }

  function isProxy(value) {
    return !!value && !!value[MY_IMMER]
  }

  
  function produce(state, callback) {
    const toProxy = new Map()
    const toRaw = new Map()


  }
}